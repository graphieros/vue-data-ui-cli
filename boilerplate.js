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
  componentLink,
  emits
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

  let emitFuncs = '';
  let emitDefs = '';

  if (emits && emits.length) {
    emitFuncs = emits.map(emit => {
      return `${useTypescript ? emit.funcTs : emit.func}`
    }).toString().replaceAll(',', '\n\n');
  
    emitDefs = emits.map(emit => {
      return `@${emit.name}="${emit.name}"`;
    }).toString().replaceAll(',', '');
  }


  return `
<script setup${useTypescript ? ' lang="ts"' : ''}>
import { ${[useComputedConfig, useComputedDataset].includes(false) ? 'ref, ' : ''}${useComputedConfig || useComputedDataset ? 'computed ' : ''}} from "vue";
import { VueDataUi${useTypescript ? `,${['number', 'Array<Array<string | number>>', ''].includes(datasetType) ? '' : `type ${datasetType},`} type ${configType} }` : '}'} from "vue-data-ui";
import "vue-data-ui/style.css"; // Consider importing the css in your main file

${!datasetType ? '' : `const dataset = ${useComputedDataset ? `computed${dsType}(() => {
  return ${ds};
})` : `ref${dsType}(${ds})`};`}

/**
 * This is the default config.
 * It is not required to send it all to the component.
 * You can keep only the modified attributes you need.
 */
const config = ${useComputedConfig ? `computed${confType}(() => {
  return ${conf};
})` : `ref${confType}(${conf})`};

${emitFuncs}

</script>

<template>
  <div :style="{ width: '600px' /** Set your styles for the chart wrapper. This wrapper is not necessary. */ }">
    <VueDataUi
      component="${component}"
      ${!datasetType ? '' : `:dataset="dataset"`}
      :config="config"
      ${emitDefs}
    ${componentSlots.length ? '>' : '/>'}
      ${ componentSlots.length ? '<!-- Use slots here in template tags. Official Vue slots documentation https://vuejs.org/guide/components/slots -->' : '' }
      ${ componentSlots.length ? `<!-- Documentation on Vue Data UI slots, check the slots tab at https://vue-data-ui.graphieros.com/docs#${componentLink} -->` : '' }
      ${ componentSlots.includes('source') ? sourceSlot : ''}
    ${componentSlots.length ? '</VueDataUi>' : ''}
  </div>
</template>
`;
};
