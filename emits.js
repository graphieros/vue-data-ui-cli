export default(componentName) => {
    const emitExamples = {
        VueUiXy: [
            {
                name: 'selectLegend',
                func: `/**
                 * @selectLegend - Returns the current visible series when selecting / unselecting the legend
                 *
                 * @typedef {Object} VueUiXySelectedLegend
                 * @property {string} name - The name of the legend item.
                 * @property {number[]} values - The array of values associated with the legend item.
                 * @property {string} color - The color representing the legend item.
                 * @property {"line" | "bar" | "plot"} type - The type of the series.
                 *
                 * @param {VueUiXySelectedLegend[]} legend - The current visible series when selecting or unselecting the legend.
                 * @returns {void}
                 */
                function selectLegend(legend){
                    console.log({ legend });
                }`,
                funcTs: `type VueUiXySelectedLegend = {
                    name: string
                    values: number[]
                    color: string
                    type: 'line' | 'bar' | 'plot'
                }
                /*
                * @selectLegend - Returns the current visible series when selecting / unselecting the legend
                */
                function selectLegend(legend: VueUiXySelectedLegend[]){
                    console.log({ legend });
                }`,
            },
            {
                name: 'selectX',
                func: `/**
                * @selectX - Returns the selected X-axis data
                *
                * @typedef {Object} DatasetItem
                * @property {string} name - The name of the dataset item.
                * @property {number} value - The value associated with the dataset item.
                * @property {string} color - The color representing the dataset item.
                * @property {"line" | "bar" | "plot"} type - The type of the dataset item.
                *
                * @typedef {Object} VueUiXySelectedX
                * @property {DatasetItem[]} dataset - An array of dataset items representing the selected X-axis data.
                * @property {number} index - The index of the selected item.
                * @property {string} indexLabel - The label of the selected index.
                *
                * Logs the selected X-axis data.
                *
                * @param {VueUiXySelectedX} selectedX - The data representing the selected X-axis.
                * @returns {void}
                */
                function selectX(selectedX) {
                    console.log({ selectedX });
                }`,
                funcTs: `/*
                * @selectX - Returns the selected X-axis data
                */
                type VueUiXySelectedX = {
                    dataset: Array<{
                        name: string
                        value: number
                        color: string
                        type: 'line' | 'bar' | 'plot'
                    }>
                    index: number
                    indexLabel: string
                }
                function selectX(selectedX: VueUiXySelectedX) {
                    console.log({ selectedX });
                }`,
            },
            {
                name: 'selectTimeLabel',
                func: `/**
                 * @selectTimeLabel - Returns the data associated with the selected time label
                 *
                 * @typedef {Object} DatapointItem
                 * @property {"circle" | "triangle" | "square" | "diamond" | "pentagon" | "star" | "hexagon"} shape - The shape representing the datapoint.
                 * @property {string} name - The name of the datapoint.
                 * @property {string} color - The color associated with the datapoint.
                 * @property {"line" | "bar" | "plot"} type - The type of the datapoint.
                 * @property {number} value - The value of the datapoint.
                 * @property {string[]} comments - Additional comments associated with the datapoint.
                 * @property {string} prefix - A prefix to be displayed with the value.
                 * @property {string} suffix - A suffix to be displayed with the value.
                 *
                 * @typedef {Object} VueUiXySelectedTimeLabel
                 * @property {DatapointItem[]} datapoint - An array of datapoints representing the selected time label.
                 * @property {number} absoluteIndex - The absolute index of the selected time label.
                 * @property {string} label - The label of the selected time.
                 *
                 * Logs the data associated with the selected time label.
                 *
                 * @param {VueUiXySelectedTimeLabel} selectedTimeLabel - The data associated with the selected time label.
                 * @returns {void}
                 */
                function selectTimeLabel(selectedTimeLabel) {
                console.log({ selectedTimeLabel });
                }`,
                funcTs: `/*
                * @selectTimeLabel - Returns the data associated with the selected time label
                */
                type VueUiXySelectedTimeLabel = {
                    datapoint: Array<{
                        shape: 'circle' | 'triangle' | 'square' | 'dialond' | 'pentagon' | 'star' | 'hexagon'
                        name: string
                        color: string
                        type: 'line' | 'bar' | 'plot'
                        value: number
                        comments: string[]
                        prefix: string
                        suffix: string
                    }>
                    absoluteIndex: number
                    label: string
                }
                function selectTimeLabel(selectedTimeLabel: VueUiXySelectedTimeLabel) {
                    console.log({ selectedTimeLabel })
                }
                `
            }
        ],
        VueUiDonut: [
            {
                name: 'selectLegend',
                func: `/**
                 * @selectLegend - Returns the current visible series when selecting / unselecting the legend
                 *
                 * @typedef {Object} VueUiDonutSelectedLegend
                 * @property {string} name - The name of the legend item.
                 * @property {number} value - The value associated with the legend item.
                 * @property {string} color - The color representing the legend item.
                 *
                 * @param {VueUiDonutSelectedLegend[]} legend - The current visible series when selecting or unselecting the legend.
                 * @returns {void}
                 */
                function selectLegend(legend){
                    console.log({ legend });
                }`,
                funcTs: `type VueUiDonutSelectedLegend = {
                    name: string
                    value: number
                    color: string
                }
                /*
                * @selectLegend - Returns the current visible series when selecting / unselecting the legend
                */
                function selectLegend(legend: VueUiDonutSelectedLegend[]){
                    console.log({ legend });
                }`,
            },
        ],
    }

    return emitExamples[componentName]
}