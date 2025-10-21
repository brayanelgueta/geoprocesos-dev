import type {
  DataLevel,
  extensionSpec,
  ImmutableObject,
  IMState,
} from "jimu-core";

//Types
export enum MyActionKeys {
  // SHARED STATE
  LOADING = "LOADING",
  SET_ERROR = "SET_ERROR",

  // IMAGE SEARCH STATE
  SET_ALL_SENSORS = "SET_ALL_SENSORS",
  SET_SENSOR = "SET_SENSOR",
  SET_SEARCH_DATE = "SET_SEARCH_DATE",
  ADD_IMAGERY = "ADD_IMAGERY",

  // CHANGE DETECTION STATE
  SET_SELECTED_SENSORS = "SET_SELECTED_SENSORS",
  SELECT_IMAGERY = "SELECT_IMAGERY",
  REMOVE_IMAGERY = "REMOVE_IMAGERY",
  CHANGE_DETECTION_READY = "CHANGE_DETECTION_READY",

  BAND_FORMULA = "BAND_FORMULA",
  INDEX_FORMULA = "INDEX_FORMULA",

  GEOPROCESS = "GEOPROCESS",
  ONLINE_PROCESSOR = "ONLINE_PROCESSOR"
}

//Actions

export interface loading {
  type: MyActionKeys.LOADING;
  val: boolean;
}
export interface setError {
  type: MyActionKeys.SET_ERROR;
  val: string | null;
}

export interface setAllSensors {
  type: MyActionKeys.SET_ALL_SENSORS;
  val: Sensor[];
}
export interface setSensor {
  type: MyActionKeys.SET_SENSOR;
  val: Sensor;
}
export interface setSearchDate {
  type: MyActionKeys.SET_SEARCH_DATE;
  val: Imagery;
}
export interface addImagery {
  type: MyActionKeys.ADD_IMAGERY;
  val: Imagery[];
}

export interface setSelectedSensors {
  type: MyActionKeys.SET_SELECTED_SENSORS;
  val: [Sensor | null, Sensor | null];
}
export interface selectImagery {
  type: MyActionKeys.SELECT_IMAGERY;
  val: [Imagery | null, Imagery | null];
}
export interface removeImagery {
  type: MyActionKeys.REMOVE_IMAGERY;
}
export interface changeDetectionReady {
  type: MyActionKeys.CHANGE_DETECTION_READY;
  val: boolean;
}
export interface bandFormula {
  type: MyActionKeys.BAND_FORMULA;
  val: boolean;
}
export interface indexFormula {
  type: MyActionKeys.INDEX_FORMULA;
  val: boolean;
}

export interface geoprocess{
  type: MyActionKeys.GEOPROCESS;
  val: number;
}

export interface onlineProcessor{
  type: MyActionKeys.ONLINE_PROCESSOR;
  val: number;
}

type ActionTypes =
  | loading
  | setError
  | setAllSensors
  | setSensor
  | setSearchDate
  | addImagery
  | setSelectedSensors
  | selectImagery
  | removeImagery
  | changeDetectionReady
  | bandFormula
  | indexFormula
  | geoprocess
  | onlineProcessor;

export interface Imagery {
  ID: string;
  Category?: number;
  CenterX?: DoubleRange;
  CenterY?: DoubleRange;
  IdentificacionSensor?: string;
  FechaCreacionMetadata?: Date;
  FechaCaptura?: string;
  SENSOR?: DoubleRange;
  OBJECTID?: number;
  cloudCoverPercentage?: string;
  snowCoverPercentage?: string;
  localizacion?: string;
}

export interface Sensor {
  uid: string;
  id: string;
  url: string;
  title: string;
  type: string;
  definitionExpression: string;
  visible?: boolean;
}

export interface MyState {
  loading: Boolean;
  error: Boolean;

  availableSensors: Sensor[];
  selectedSensor: Sensor;
  searchDate: Imagery;
  filteredImages: Imagery[];

  selectedSensors: Sensor[];
  selectedImages: Imagery[];
  isReady: Boolean;

  bandFormula: Boolean;
  indexFormula: Boolean;

  geoprocess: Number;
  onlineProcessor: Number;
}

type IMMyState = ImmutableObject<MyState>;

declare module "jimu-core/lib/types/state" {
  interface State {
    myState?: IMMyState;
  }
}

export default class MyReduxStoreExtension
  implements extensionSpec.ReduxStoreExtension
{
  id = "my-local-redux-store-extension";

  getActions() {
    return Object.keys(MyActionKeys).map((k) => MyActionKeys[k]);
  }
  getInitLocalState() {
    return {
      loading: true,
      error: null,

      availableSensors: [],
      selectedSensor: null,
      searchDate: null,
      filteredImages: [],

      selectedSensors: [null, null],
      selectedImages: [null, null],
      isReady: true,

      bandFormula: false,
      indexFormula: false,

      geoprocess: null,
      onlineProcessor: null
    };
  }
  //Reducer
  getReducer() {
    return (
      localState: IMMyState,
      action: ActionTypes,
      state: IMState
    ): IMMyState => {
      switch (action.type) {
        // SHARED
        case MyActionKeys.LOADING:
          return localState.set("loading", action.val);
        case MyActionKeys.SET_ERROR:
          return localState.set("error", action.val);

        // IMAGE SEARCH
        case MyActionKeys.SET_ALL_SENSORS:
          return localState.set("availableSensors", action.val);
        case MyActionKeys.SET_SENSOR:
          return localState.set("selectedSensor", action.val);
        case MyActionKeys.SET_SEARCH_DATE:
          return localState.set("searchDate", action.val);
        case MyActionKeys.ADD_IMAGERY:
          return localState.set("filteredImages", action.val);
        case MyActionKeys.BAND_FORMULA:
          return localState.set("bandFormula", action.val);
        case MyActionKeys.INDEX_FORMULA:
          return localState.set("indexFormula", action.val);
        // CHANGE DETECTION
        case MyActionKeys.SET_SELECTED_SENSORS:
          return localState.set("selectedSensors", action.val);
        case MyActionKeys.SELECT_IMAGERY:
          return localState.set("selectedImages", action.val);
        case MyActionKeys.REMOVE_IMAGERY:
          return localState.set("selectedImages", []);
        case MyActionKeys.CHANGE_DETECTION_READY:
          return localState.set("isReady", action.val);
        case MyActionKeys.GEOPROCESS:
          return localState.set("geoprocess", action.val)
        case MyActionKeys.ONLINE_PROCESSOR:
          return localState.set("onlineProcessor", action.val)
        default:
          return localState;
      }
    };
  }
  getStoreKey() {
    return "myState";
  }
}
