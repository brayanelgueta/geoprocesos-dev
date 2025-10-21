import { React, Immutable } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector';
import { AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector';

const Setting = (props: AllWidgetSettingProps<any>) => {
  const { useDataSources } = props;
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    })
  }
  const onDataSourceChange = (useDataSources) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    });
  };
  return (
    <div className="widget-setting-demo">
      <MapWidgetSelector
        useMapWidgetIds={props.useMapWidgetIds}
        onSelect={onMapWidgetSelected}
      />
      <DataSourceSelector
        types={Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.MapService])}
        useDataSources={useDataSources}
        onChange={onDataSourceChange}
        mustUseDataSource={true} // Obligatorio seleccionar uno
      />
    </div>
  )
}

export default Setting

