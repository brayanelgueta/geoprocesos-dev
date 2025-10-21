import { React, type AllWidgetProps, type IMState } from 'jimu-core'

import { Loading } from 'jimu-ui'
import './assets/style.css';
import { useSelector } from 'react-redux';

import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

interface WidgetProps extends AllWidgetProps<unknown> {
  imageries?: string;
}

const Widget = (props: WidgetProps) => {

  const { t } = useLocale(translations);
  //Se selecciona los estados con los cuales quiero trabajar desde la store
  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages);
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess);
  const loading = useSelector((state: IMState) => state.myState?.loading)

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
  return (
    <div className="widget-respuestaImagenes jimu-widget"  >
      <div className="contentTitleIMG">
        <p>{t("widgetLabel")}</p>
      </div>
      <div
        id="contentImgSelected"
        className="contentDataIMG"
      >
        <table>
          <thead>

            <tr>
              <th>{t("thImg")}</th>
              <th>{t("thDate")}</th>

            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={2}>
                  <Loading type="DONUT" height={20} width={20} />
                </td>
              </tr>
            ) : selectedImageries && selectedImageries.length > 0 ? (
              selectedImageries.map((item, index) => (
                <tr key={index}>
                  <td>{item?.OBJECTID}</td>
                  <td>{formatDateToYMD(item?.FechaCaptura)}</td>
                </tr>
              ))
            ) : geoprocess?.valueOf() === 1 ? (
              <>
                <tr>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </>
            ) : (
              <tr>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            )}
          </tbody>

        </table>
        {/* <input type="checkbox" id="seleccionImgsInput" />
                    <label id='seleccionImgs'>Mostrar Seleccion</label> */}
      </div>
    </div >
  );
};

export default Widget;
