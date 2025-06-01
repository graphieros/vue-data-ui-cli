#!/usr/bin/env node

import { program } from 'commander';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import chalk from 'chalk';
import prettier from 'prettier';
import boilerplate from './boilerplate.js';
import inquirer from 'inquirer';
import datasets from './datasets.js';
import emitExamples from './emits.js'

let getVueDataUiConfig;
try {
  ({ getVueDataUiConfig } = await import('vue-data-ui'));
} catch (err) {
  console.error(
    chalk.red('Failed to load vue-data-ui. Please ensure it is installed.')
  );
  process.exit(1);
}

const supportedComponents = {
  VueUiWorld: {
    key: 'vue_ui_world',
    link: 'vue-ui-world',
    datasetType: 'VueUiWorldDataset',
    configType: 'VueUiWorldConfig',
    isDatasetArray: false,
    slots: ['source']
  },
  VueUiXy: {
    key: 'vue_ui_xy',
    link: 'vue-ui-xy',
    datasetType: 'VueUiXyDatasetItem',
    configType: 'VueUiXyConfig',
    isDatasetArray: true,
    slots: [
      'svg',
      'legend',
      'tooltip-before',
      'tooltip-after',
      'reset-action',
      'time-label',
      'watermark',
      'source',
      'plot-comment',
    ],
  },
  VueUiDonut: {
    key: 'vue_ui_donut',
    link: 'vue-ui-donut',
    datasetType: 'VueUiDonutDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiDonutConfig',
    slots: ['source']
  },
  VueUiNestedDonuts: {
    key: 'vue_ui_nested_donuts',
    link: 'vue-ui-nested-donuts',
    datasetType: 'VueUiNestedDonutsDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiNestedDonutsConfig',
    slots: ['source']
  },
  VueUiQuickChart: {
    key: 'vue_ui_quick_chart',
    link: 'vue-ui-quick-chart',
    datasetType: 'VueUiQuickChartDataset',
    isDatasetArray: false,
    configType: 'VueUiQuickChartConfig',
    slots: ['source']
  },
  VueUiStackbar: {
    key: 'vue_ui_stackbar',
    link: 'vue-ui-stackbar',
    datasetType: 'VueUiStackbarDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiStackbarConfig',
    slots: ['source']
  },
  VueUiSparkline: {
    key: 'vue_ui_sparkline',
    link: 'vue-ui-sparkline',
    datasetType: 'VueUiSparklineDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiSparklineConfig',
    slots: ['source']
  },
  VueUiSparkbar: {
    key: 'vue_ui_sparkbar',
    link: 'vue-ui-sparkbar',
    datasetType: 'VueUiSparkbarDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiSparkbarConfig',
    slots: ['source']
  },
  VueUiSparkStackbar: {
    key:'vue_ui_sparkstackbar',
    link: 'vue-ui-sparkstackbar',
    datasetType: 'VueUiSparkStackbarDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiSparkStackbarConfig',
    slots: ['source']
  },
  VueUiGauge: {
    key: 'vue_ui_gauge',
    link: 'vue-ui-gauge',
    datasetType: 'VueUiGaugeDataset',
    isDatasetArray: false,
    configType: 'VueUiGaugeConfig',
    slots: ['source']
  },
  VueUiSparkHistogram: {
    key: 'vue_ui_sparkhistogram',
    link: 'vue-ui-sparkhistogram',
    datasetType: 'VueUiSparkHistogramDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiSparkHistogramConfig',
    slots: ['source']
  },
  VueUiSparkgauge: {
    key: 'vue_ui_sparkgauge',
    link: 'vue-ui-sparkgauge',
    datasetType: 'VueUiSparkgaugeDataset',
    isDatasetArray: false,
    configType: 'VueUiSparkgaugeConfig',
    slots: ['source']
  },
  VueUiSparkTrend: {
    key: 'vue_ui_spark_trend',
    link: 'vueè-ui-spark-trend',
    datasetType: 'number',
    isDatasetArray: true,
    configType: 'VueUiSparkTrendConfig',
    slots: ['source']
  },
  VueUiGizmo: {
    key: 'vue_ui_gizmo',
    link: 'vue-ui-gizmo',
    datasetType: 'number',
    isDatasetArray: false,
    configType: 'VueUiGizmoConfig',
    slots: []
  },
  VueUiKpi: {
    key: 'vue_ui_kpi',
    link: 'vue-ui-kpi',
    datasetType: 'number',
    isDatasetArray: false,
    configType: 'VueUiKpiConfig',
    slots: []
  },
  VueUiBullet: {
    key: 'vue_ui_bullet',
    link: 'vue-ui-bullet',
    datasetType: 'VueUiBulletDataset',
    isDatasetArray: false,
    configType: 'VueUiBulletConfig',
    slots: ['source']
  },
  VueUiXyCanvas: {
    key: 'vue_ui_xy_canvas',
    link: 'vue-ui-xy-canvas',
    datasetType: 'VueUiXyCanvasDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiXyCanvasConfig',
    slots: ['source']
  },
  VueUiVerticalBar: {
    key: 'vue_ui_vertical_bar',
    link: 'vue-ui-vertical-bar',
    datasetType: 'VueUiVerticalBarDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiVerticalBarConfig',
    slots: ['source']
  },
  VueUiParallelCoordinatePlot: {
    key: 'vue_ui_parallel_coordinate_plot',
    link: 'vue-ui-parallel-coordinate-plot',
    datasetType: 'VueUiParallelCoordinatePlotDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiParallelCoordinatePlotConfig',
    slots: ['source']
  },
  VueUiFlow: {
    key: 'vue_ui_flow',
    link: 'vue-ui-flow',
    datasetType: 'VueUiFlowDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiFlowConfig',
    slots: ['source']
  },
  VueUiCandlestick: {
    key: 'vue_ui_candlestick',
    link: 'vue-ui-candlestick',
    datasetType: 'Array<Array<string | number>>',
    isDatasetArray: false,
    configType: 'VueUiCandlestickConfig',
    slots: ['source']
  },
  VueUiAgePyramid: {
    key: 'vue_ui_age_pyramid',
    link: 'vue-ui-age-pyramid',
    datasetType: 'Array<Array<string | number>>',
    isDatasetArray: false,
    configType: 'VueUiAgePyramidConfig',
    slots: ['source']
  },
  VueUiDonutEvolution: {
    key: 'vue_ui_donut_evolution',
    link: 'vue-ui-donut-evolution',
    datasetType: 'VueUiDonutEvolutionDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiDonutEvolutionConfig',
    slots: ['source']
  },
  VueUiFunnel: {
    key: 'vue_ui_funnel',
    link: 'vue-ui-funnel',
    datasetType: 'VueUiFunnelDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiFunnelConfig',
    slots: ['source']
  },
  VueUiHistoryPlot: {
    key: 'vue_ui_history_plot',
    link: 'vue-ui-history-plot',
    datasetType: 'VueUiHistoryPlotDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiHistoryPlotConfig',
    slots: ['source']
  },
  VueUiWaffle: {
    key: 'vue_ui_waffle',
    link: 'vue-ui-waffle',
    datasetType: 'VueUiWaffleDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiWaffleConfig',
    slots: ['source']
  },
  VueUiHeatmap: {
    key: 'vue_ui_heatmap',
    link: 'vue-ui-heatmap',
    datasetType: 'VueUiHeatmapDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiHeatmapConfig',
    slots: ['source']
  },
  VueUiTreemap: {
    key: 'vue_ui_treemap',
    link: 'vue-ui-treemap',
    datasetType: 'VueUiTreemapDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiTreemapConfig',
    slots: ['source']
  },
  VueUiRings: {
    key: 'vue_ui_rings',
    link: 'vue-ui-rings',
    datasetType: 'VueUiRingsDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiRingsConfig',
    slots: ['source']
  },
  VueUiGalaxy: {
    key: 'vue_ui_galaxy',
    link: 'vue-ui-galaxy',
    datasetType: 'VueUiGalaxyDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiGalaxyConfig',
    slots: ['source']
  },
  VueUiChestnut: {
    key: 'vue_ui_chestnut',
    link: 'vue-ui-chestnut',
    datasetType: 'VueUiChestnutDatasetRoot',
    isDatasetArray: true,
    configType: 'VueUiChestnutConfig',
    slots: ['source']
  },
  VueUiOnion: {
    key: 'vue_ui_onion',
    link: 'vue-ui-onion',
    datasetType: 'VueUiOnionDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiOnionConfig',
    slots: ['source']
  },
  VueUiWheel: {
    key: 'vue_ui_wheel',
    link: 'vue-ui-wheel',
    datasetType: 'VueUiWheelDataset',
    isDatasetArray: false,
    configType: 'VueUiWheelConfig',
    slots: ['source']
  },
  VueUiTiremarks: {
    key: 'vue_ui_tiremarks',
    link: 'vue-ui-tiremarks',
    datasetType: 'VueUiTiremarksDataset',
    isDatasetArray: false,
    configType: 'VueUiTiremarksConfig',
    slots: ['source']
  },
  VueUiThermometer: {
    key: 'vue_ui_thermometer',
    link: 'vue-ui-thermometer',
    datasetType: 'VueUiThermometerDataset',
    isDatasetArray: false,
    configType: 'VueUiThermometerConfig',
    slots: ['source']
  },
  VueUiWordCloud: {
    key: 'vue_ui_word_cloud',
    link: 'vue-ui-word-cloud',
    datasetType: 'VueUiWordCloudDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiWordCloudConfig',
    slots: ['source']
  },
  VueUiRelationCircle: {
    key: 'vue_ui_relation_circle',
    link: 'vue-ui-relation-circle',
    datasetType: 'VueUiRelationCircleDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiRelationCircleConfig',
    slots: ['source']
  },
  VueUiRadar: {
    key: 'vue_ui_radar',
    link: 'vue-ui-radar',
    datasetType: 'VueUiRadarDataset',
    isDatasetArray: false,
    configType: 'VueUiRadarConfig',
    slots: ['source']
  },
  VueUiMoodRadar: {
    key: 'vue_ui_mood_radar',
    link: 'vue-ui-mood-radar',
    datasetType: 'VueUiMoodRadarDataset',
    isDatasetArray: false,
    configType: 'VueUiMoodRadarConfig',
    slots: ['source']
  },
  VueUiQuadrant: {
    key: 'vue_ui_quadrant',
    link: 'vue-ui-quadrant',
    datasetType: 'VueUiQuadrantDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiQuadrantConfig',
    slots: ['source']
  },
  VueUiScatter: {
    key: 'vue_ui_scatter',
    link: 'vue-ui-scatter',
    datasetType: 'VueUiScatterDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiScatterConfig',
    slots: ['source']
  },
  VueUiMolecule: {
    key: 'vue_ui_molecule',
    link: 'vue-ui-molecule',
    datasetType: 'VueUiMoleculeDatasetNode',
    isDatasetArray: true,
    configType: 'VueUiMoleculeConfig',
    slots: ['source']
  },
  VueUiStripPlot: {
    key: 'vue_ui_strip_plot',
    link: 'vue-ui-strip-plot',
    datasetType: 'VueUiStripPlotDataset',
    isDatasetArray: true,
    configType: 'VueUiStripPlotConfig',
    slots: ['source']
  },
  VueUiDumbbell: {
    key: 'vue_ui_dumbbell',
    link: 'vue-ui-dumbbell',
    datasetType: 'VueUiDumbbellDataset',
    isDatasetArray: true,
    configType: 'VueUiDumbbellConfig',
    slots: ['source']
  },
  VueUi3dBar: {
    key: 'vue_ui_3d_bar',
    link: 'vue-ui-3d-bar',
    datasetType: 'VueUi3dBarDataset',
    isDatasetArray: false,
    configType: 'VueUi3dBarConfig',
    slots: ['source']
  },
  VueUiTableSparkline: {
    key: 'vue_ui_table_sparkline',
    link: 'vue-ui-table-sparkline',
    datasetType: 'VueUiTableSparklineDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiTableSparklineConfig',
    slots: ['source']
  },
  VueUiCarouselTable: {
    key: 'vue_ui_carousel_table',
    link: 'vue-ui-carousel-table',
    datasetType: 'VueUiCarouselTableDataset',
    isDatasetArray: false,
    configType: 'VueUiCarouselTableConfig',
    slots: ['source']
  },
  VueUiRating: {
    key: 'vue_ui_rating',
    link: 'vue-ui-rating',
    datasetType: 'VueUiRatingDataset',
    isDatasetArray: false,
    configType: 'VueUiRatingConfig',
    slots: []
  },
  VueUiSmiley: {
    key: 'vue_ui_smiley',
    link: 'vue-ui-smiley',
    datasetType: 'VueUiRatingDataset',
    isDatasetArray: false,
    configType: 'VueUiSmileyConfig',
    slots: []
  },
  VueUiAccordion: {
    key: 'vue_ui_accordion',
    link: 'vue-ui-accordion',
    datasetType: '',
    isDatasetArray: false,
    configType: 'VueUiAccordionConfig',
    slots: ['content']
  },
  VueUiSkeleton: {
    key: 'vue_ui_skeleton',
    link: 'vue-ui-skeleton',
    datasetType: '',
    isDatasetArray: false,
    configType: 'VueUiSkeletonConfig',
    slots: []
  },
  VueUiCirclePack: {
    key: 'vue_ui_circle_pack',
    link: 'vue-ui-circle-pack',
    datasetType: 'VueUiCirclePackDatasetItem',
    isDatasetArray: true,
    configType: 'VueUiCirclePackConfig',
    slots: ['source']
  },
};

(function displayBanner() {
  console.log(chalk.green.bold(`
▗▖  ▗▖▗▖ ▗▖▗▄▄▄▖    ▗▄▄▄  ▗▄▖▗▄▄▄▖▗▄▖     ▗▖ ▗▖ ▄     ▗▄▄▖▗▖    ▄
▐▌  ▐▌▐▌ ▐▌▐▌       ▐▌  █▐▌ ▐▌ █ ▐▌ ▐▌    ▐▌ ▐▌ █    ▐▌   ▐▌      
▐▌  ▐▌▐▌ ▐▌▐▛▀▀▘    ▐▌  █▐▛▀▜▌ █ ▐▛▀▜▌    ▐▌ ▐▌ █    ▐▌   ▐▌    █  
 ▝▚▞▘ ▝▚▄▞▘▐▙▄▄▖    ▐▙▄▄▀▐▌ ▐▌ █ ▐▌ ▐▌    ▝▚▄▞▘ █    ▝▚▄▄▖▐▙▄▄▖ █
  `))
  console.log(chalk.blue.bold(`Create Vue Data UI boilerplate components easily\n\n`))
})()

program
  .version('1.4.5')
  .description('CLI to generate Vue Data UI component boilerplates')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'chartComponent',
        message: 'Select a Vue Data UI chart component:\n',
        choices: Object.keys(supportedComponents),
        validate: (input) =>
          input ? true : 'You must select a chart component.',
      },
      {
        type: 'confirm',
        name: 'useComputedDataset',
        message: 'Use computed for the dataset ? (Answering no will use ref)',
        default: false,
      },
      {
        type: 'confirm',
        name: 'useComputedConfig',
        message: 'Use computed for the config ? (Answering no will use ref)',
        default: false,
      },
      {
        type: 'confirm',
        name: 'useTypescript',
        message: 'Would you like to use TypeScript?',
        default: false,
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter the name of your Vue component (e.g., MyComponent):',
        validate: (input) => (input ? true : 'Component name is required.'),
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Enter the directory to create the component in:',
        default: './src/components/charts',
      },
    ]);

    const {
      componentName,
      chartComponent,
      useTypescript,
      directory,
      useComputedDataset,
      useComputedConfig,
    } = answers;

    const targetDir = resolve(directory);
    const fileName = `${componentName}.vue`;
    const filePath = join(targetDir, fileName);

    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    const componentKey = supportedComponents[chartComponent].key;
    if (!componentKey) {
      console.error(
        chalk.red(`${chartComponent} is not a valid Vue Data UI component.`)
      );
      process.exit(1);
    }

    let config;
    try {
      config = await getVueDataUiConfig(componentKey);
    } catch (err) {
      console.error(
        chalk.red(`Failed to get configuration for ${chartComponent}.`)
      );
      process.exit(1);
    }

    let dataset;
    try {
      dataset = datasets(chartComponent);
    } catch (err) {
      console.error(
        chalk.red(`Failed to get dataset boilerplate for ${chartComponent}.`)
      );
      process.exit(1);
    }

    let emits;
    try {
      emits = emitExamples(chartComponent);
    } catch (err) {
      console.error(
        chalk.red(`Failed to get emits for ${chartComponent}.`)
      );
      process.exit(1);
    }

    let rawContent;
    try {
      rawContent = boilerplate({
        component: chartComponent,
        config,
        dataset,
        useTypescript,
        useComputedConfig,
        useComputedDataset,
        datasetType: supportedComponents[chartComponent].datasetType,
        configType: supportedComponents[chartComponent].configType,
        isDatasetArray: supportedComponents[chartComponent].isDatasetArray,
        componentSlots: supportedComponents[chartComponent].slots,
        componentLink: supportedComponents[chartComponent].link,
        emits
      });

      if (typeof rawContent !== 'string') {
        console.error(chalk.red('Boilerplate content is not a valid string.'));
        process.exit(1);
      }
    } catch (err) {
      console.error(chalk.red('Error generating boilerplate content.'));
      process.exit(1);
    }

    // Prettier formatting
    let formattedContent;
    try {
      const prettierOptions = (await prettier.resolveConfig(process.cwd())) || {
        parser: 'vue',
      };
      formattedContent = await prettier.format(rawContent, prettierOptions);
    } catch (err) {
      console.warn(
        chalk.yellow('Prettier formatting failed. Writing unformatted content.')
      );
      formattedContent = rawContent;
    }

    if (typeof formattedContent !== 'string') {
      console.error(chalk.red('Formatted content is not a valid string.'));
      process.exit(1);
    }

    try {
      writeFileSync(filePath, formattedContent);
      console.log(
        chalk.green(
          `Component ${fileName} created and formatted at ${filePath}`
        )
      );
    } catch (err) {
      console.error(chalk.red('Error writing to file:'), err);
      process.exit(1);
    }
  });

program.parse(process.argv);
