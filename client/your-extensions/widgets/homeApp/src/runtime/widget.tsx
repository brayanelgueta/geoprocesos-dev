import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './assets/style.css';

const logoHome = require('./img/logoHome.png')

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="widget-home jimu-widget">
      <div className="widget-content-home">
          <div className="widget-content2-home">
            <div className="h-100 p-5 bg-body-tertiary rounded-3 alinearVertical">
              <img src={logoHome} alt="" className='logoHome'/>
            </div>
          </div>


          <div className="widget-content2-home alinearVertical">
            <div className='content-home-text'>
              <h2>Herramientas Espaciales</h2>
              <p>Para comenzar a utilizar el aplicativo realiza un filtro por fecha, dencidad de nubes y poligono de seleccion.</p>
            </div>
              
            
          </div>
        
        
      </div>
    </div>
  )
}

export default Widget
