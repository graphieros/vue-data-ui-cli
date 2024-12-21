#!/usr/bin/env node

import { program } from 'commander';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import chalk from 'chalk';
import prettier from 'prettier';
import boilerplate from './boilerplate.js';
import inquirer from 'inquirer';
import datasets from './datasets.js';

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
  }
};

program
  .version('0.0.1')
  .description('CLI to generate Vue Data UI component boilerplates')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'chartComponent',
        message: 'Select a Vue Data UI chart component:',
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
    let dataset;
    try {
      config = await getVueDataUiConfig(componentKey);
    } catch (err) {
      console.error(
        chalk.red(`Failed to get configuration for ${chartComponent}.`)
      );
      process.exit(1);
    }

    try {
      dataset = datasets(chartComponent);
    } catch (err) {
      console.error(
        chalk.red(`Failed to get dataset boilerplate for ${chartComponent}.`)
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
