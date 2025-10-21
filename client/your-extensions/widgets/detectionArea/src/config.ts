import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  exampleConfigProperty: string,
  layers: Array<string>
}
const layers = [
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Comisar%C3%ADas/FeatureServer",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Policía_de_Investigaciones/FeatureServer/2",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Cuerpos_de_bomberos/FeatureServer/3",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Compañías_de_bomberos/FeatureServer/4",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Establecimientos_de_salud/FeatureServer/5",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Plantas_de_tratamiento_de_aguas/FeatureServer/6",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Jardines_infantiles/FeatureServer/7",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Infraestructura_aeroportuaria/FeatureServer/8",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Establecimientos_de_educación_superior/FeatureServer/9",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Establecimientos_educacionales/FeatureServer/10",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Antenas_de_telecomunicaciones/FeatureServer",
  "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Estaciones_Metro_de_Santiago/FeatureServer/18",

]

export default layers
export type IMConfig = ImmutableObject<Config>
