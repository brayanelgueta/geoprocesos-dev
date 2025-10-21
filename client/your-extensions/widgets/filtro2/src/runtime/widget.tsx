import { useState, useEffect, useRef } from 'react';
import { IMState, React, type AllWidgetProps } from 'jimu-core';
import { JimuMapViewComponent } from 'jimu-arcgis';
import './assets/style.css';
import { TbSnowflake, TbSnowflakeOff } from "react-icons/tb";
import { IoCloudSharp } from "react-icons/io5";
import { BsCloudSlashFill } from "react-icons/bs";
import { loadModules } from 'esri-loader';
import { useDispatch, useSelector } from 'react-redux';


const Widget = (props) => {
  const dispatch = useDispatch()
  //ARRANQUE WIDGET FILTRO
  //Constante del Mapa
  const [jimuMapView, setJimuMapView] = useState(null);


  //Brayan 
  const [snow, setSnow] = useState('0')
  const [clouds, setClouds] = useState('50')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState(new Date() || "")
  const [extension, setExtension] = useState("off")
  const [mapExtend, setMapExtend] = useState("")
  let rangoFechas = "1=1"
  const extent = jimuMapView?.view.extent;


  const handleFilterChange = (e) => {

    const { name, value } = e.target

    if (name == 'fromDate') setFromDate(value)
    if (name == 'toDate') setToDate(value)
    if (name == 'clouds') setClouds(value)
    if (name == 'snow') setSnow(value)
    if (name == 'extension') {
      if (value == "on") {
        setExtension("off")
      } else {
        setExtension("on")
      }

    }
  }
  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };

  const newQuery = async () => {

    dispatch({ type: 'LOADING', val: true });
    // preparar el filtro para hacer la consulta
    try {
    
      const imageryLayer = await jimuMapView?.view.map.findLayerById("1958c3accf5-layer-4");
      if (imageryLayer) {
        if (fromDate !== "" && formatDateToYMD(toDate) !== "") {
          rangoFechas = "FechaCaptura BETWEEN timestamp '" + fromDate + " 00:00:00' AND timestamp '" + formatDateToYMD(toDate) + " 00:00:00'";
        }
        if (extension == 'on') {
          setMapExtend(jimuMapView.view.extent)
        }
        if (clouds) {
          rangoFechas = rangoFechas + " AND cloudCoverPercentage > '" + clouds + "'";
        }
        if (snow) {
          rangoFechas = rangoFechas + " AND snowCoverPercentage > '" + snow + "'";
        }

        imageryLayer.definitionExpression = rangoFechas;

        const queryParams = {
          where: rangoFechas,
          geometry: mapExtend,
          outFields: ["*"],
          returnGeometry: true
        };
        //hacer la consulta

        loadModules(['esri/rest/query'])
          .then(([Query]) => {
            Query.executeQueryJSON(imageryLayer.url, queryParams).then((result) => {
              const parsedFeatures = result.features.map(f => ({
                //Se reestructura al objeto para que deje de ser inmutable
                OBJECTID: f.attributes?.OBJECTID,
                FechaCaptura: f.attributes?.FechaCaptura,
                localizacion: f.attributes?.localizacion,
              }));

              dispatch({ type: 'ADD_IMAGERY', val: parsedFeatures });
              dispatch({ type: 'REMOVE_IMAGERY' })
              dispatch({ type: 'LOADING', val: false });
            })
          })
      }

    } catch (e) {
      console.log({error: e})
    }





  }
  //utils 
  const formatDateToYMD = (date: Date | string): string => {
    try {
      const d = new Date(date);

      if (isNaN(d.getTime())) {
        return ""; // Retorna cadena vacía si la fecha no es válida
      }

      const pad = (num: number): string => num.toString().padStart(2, '0');

      const year = d.getFullYear();
      const month = pad(d.getMonth() + 1); // Meses son 0-indexados
      const day = pad(d.getDate());

      return `${year}-${month}-${day}`;
    } catch (error) {
      console.error('Error al formatear fecha:', error);
      return "";
    }
  };


  useEffect(() => {
    newQuery()
    console.log({jimuMapView})
  }, [jimuMapView, snow, toDate, fromDate, extension, clouds, mapExtend]);



  return (
    <div className="jimu-widget filter-main-container">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}

      <div className="filter-container">
        <div className="date-inputs">
          <input id='fecha1' type="date" placeholder="mm/dd/yyyy" value={fromDate} name='fromDate' onChange={handleFilterChange} />
          <input id='fecha2' type="date" placeholder="mm/dd/yyyy" value={formatDateToYMD(toDate)} name='toDate' onChange={handleFilterChange} />
        </div>

        <div className="sliders">
          <div className="slider-item">
            <p id='rangoNube' className='m-0 d-flex align-items'>{clouds} %</p>
            <BsCloudSlashFill />
            <input
              id='nube'
              type="range"
              min="0"
              max="100"
              step="2"
              value={clouds}
              className='slider-input'
              onChange={handleFilterChange}
              name='clouds'
            />
            <IoCloudSharp />
          </div>
          <div className="slider-item">
            <p id='rangoNieve' className='m-0 d-flex align-items'>{snow} %</p>
            <TbSnowflakeOff />
            <input
              id='nieve'
              type="range"
              min="0"
              max="100"
              step="2"
              name='snow'
              value={snow}
              className='slider-input'
              onChange={handleFilterChange}
            />
            <TbSnowflake />
          </div>
        </div>
        {/* <div className="date-range2">
          <div className='contentInputCheck'>
            <label htmlFor="">Extensión del mapa:</label>
            <input id='checkExtend' type="checkbox" name='mapExtension' value={extension} onChange={handleFilterChange} />
          </div>
        </div> */}


      </div>

    </div>
  );
};

export default Widget;