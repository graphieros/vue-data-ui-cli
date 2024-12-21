export default ({
  component,
  config,
  dataset,
  useTypescript,
  useComputedDataset,
  useComputedConfig,
  configType,
  datasetType,
  isDatasetArray,
  componentSlots,
  componentLink
}) => {

  const dsType = useTypescript ? `<${`${datasetType}${isDatasetArray ? '[]' : ''}`}>` : '';
  const confType = useTypescript ? `<${configType}>` : '';
  const ds = JSON.stringify(dataset);
  const conf = JSON.stringify(config);

  const sourceSlot = `
        <!-- #source slot: display the source for your data -->
      <!--<template #source>
        <small>Source: <cite>My source</cite></small>
      </template>-->
  `;

  return `
<script setup${useTypescript ? ' lang="ts"' : ''}>
import { ${[useComputedConfig, useComputedDataset].includes(false) ? 'ref, ' : ''}${useComputedConfig || useComputedDataset ? 'computed ' : ''}} from "vue";
import { VueDataUi${useTypescript ? `, type ${datasetType}, type ${configType} }` : '}'} from "vue-data-ui";

const dataset = ${useComputedDataset ? `computed${dsType}(() => {
  return ${ds};
})` : `ref${dsType}(${ds})`};

/**
 * This is the default config.
 * It is not required to send it all to the component.
 * You can keep only the modified attributes you need.
 */
const config = ${useComputedConfig ? `computed${confType}(() => {
  return ${conf};
})` : `ref${confType}(${conf})`};

</script>

<template>
  <div :style="{ width: '600px' }">
    <VueDataUi
      component="${component}"
      :dataset="dataset"
      :config="config"
    >
      <!-- Include slots here -->
      <!-- For more info on slots, check the slots tab at https://vue-data-ui.graphieros.com/docs#${componentLink} -->
      ${ componentSlots.includes('source') ? sourceSlot : ''}
    </VueDataUi>
  </div>
</template>
`;
};
