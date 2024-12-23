export default (componentName) => {
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
                    readonly name: string
                    readonly values: number[]
                    readonly color: string
                    readonly type: 'line' | 'bar' | 'plot'
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
                        readonly name: string
                        readonly value: number
                        readonly color: string
                        readonly type: 'line' | 'bar' | 'plot'
                    }>
                    readonly index: number
                    readonly indexLabel: string
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
                        readonly shape: 'circle' | 'triangle' | 'square' | 'diamond' | 'pentagon' | 'star' | 'hexagon'
                        readonly name: string
                        readonly color: string
                        readonly type: 'line' | 'bar' | 'plot'
                        readonly value: number
                        readonly comments: string[]
                        readonly prefix: string
                        readonly suffix: string
                    }>
                    readonly absoluteIndex: number
                    readonly label: string
                }
                function selectTimeLabel(selectedTimeLabel: VueUiXySelectedTimeLabel) {
                    console.log({ selectedTimeLabel })
                }
                `
            }
        ],
        VueUiDonut: [
            {
                name: 'selectDatapoint',
                func: `/**
                * @selectDatapoint - On click returns the data related to the selected donut arc
                *
                * @typedef {Object} VueUiDonutDatapoint
                * @property {number} index - The index of the datapoint in the dataset.
                * @property {number[]} absoluteValues - The array of absolute values associated with the datapoint.
                * @property {string} arcSlice - The SVG path describing the arc slice.
                * @property {Object} center - The center point of the donut slice.
                * @property {number} center.endX - The ending X coordinate of the center.
                * @property {number} center.endY - The ending Y coordinate of the center.
                * @property {string} center.path - The path associated with the center point.
                * @property {number} center.startX - The starting X coordinate of the center.
                * @property {number} center.startY - The starting Y coordinate of the center.
                * @property {string} color - The color of the datapoint slice.
                * @property {string} comment - A comment or note associated with the datapoint.
                * @property {number} cx - The X coordinate of the slice center.
                * @property {number} cy - The Y coordinate of the slice center.
                * @property {number} endX - The ending X coordinate of the arc.
                * @property {number} endY - The ending Y coordinate of the arc.
                * @property {Object} firstSeparator - The first separator coordinates for the arc.
                * @property {number} firstSeparator.x - The X coordinate of the first separator.
                * @property {number} firstSeparator.y - The Y coordinate of the first separator.
                * @property {string} name - The name of the datapoint.
                * @property {string} path - The SVG path of the arc.
                * @property {number} proportion - The proportion of the datapoint relative to the total.
                * @property {number} ratio - The ratio of the datapoint relative to the total.
                * @property {Object} separator - The separator coordinates for the arc.
                * @property {number} separator.x - The X coordinate of the separator.
                * @property {number} separator.y - The Y coordinate of the separator.
                * @property {number} seriesIndex - The index of the series to which the datapoint belongs.
                * @property {number} startX - The starting X coordinate of the arc.
                * @property {number} startY - The starting Y coordinate of the arc.
                * @property {number} value - The value associated with the datapoint.
                *
                * Logs the data related to the selected donut arc.
                *
                * @param {VueUiDonutDatapoint} datapoint - The data related to the selected donut arc.
                * @returns {void}
                */
                function selectDatapoint(datapoint) {
                    console.log(datapoint);
                }`,
                funcTs: `type VueUiDonutDatapoint = {
                    readonly index: number
                    readonly absoluteValues: number[]
                    readonly arcSlice: string
                    readonly center: {
                        endX: number
                        endY: number
                        path: string
                        startX: number
                        startY: number
                    }
                    readonly color: string
                    readonly comment: string
                    readonly cx: number
                    readonly cy: number
                    readonly endX: number
                    readonly endY: number
                    readonly firstSeparator: {
                        x: number
                        y: number
                    }
                    readonly name: string
                    readonly path: string
                    readonly proportion: number
                    readonly ratio: number
                    readonly separator: {
                        x: number
                        y: number
                    }
                    readonly seriesIndex: number
                    readonly startX: number
                    readonly startY: number
                    readonly value: number
                }

                /**
                * @selectDatapoint - On click returns the data related to the selected donut arc
                */
                function selectDatapoint(datapoint: VueUiDonutDatapoint){
                    console.log(datapoint)
                }`,
            },
        ],
    }

    return emitExamples[componentName]
}