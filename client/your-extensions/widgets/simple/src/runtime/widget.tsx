import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer.js";


const Widget = (props: AllWidgetProps<IMConfig>) => {

  const imageryLayer = new ImageryTileLayer({
    title: "Capa Generada",
  });
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>Widget Ejemplo</p>
      <p>exampleConfigProperty: {props.config.exampleConfigProperty}</p>
    </div>
  )
}

export default Widget
