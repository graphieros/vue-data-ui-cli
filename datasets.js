export default (componentName) => {
    const datasets = {
        VueUiXy: [
            {
                name: 'Serie',
                series: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                type: 'line',
                dataLabels: true,
            }
        ],
        VueUiDonut: [
            {
                name: "Series 1",
                color: "#1f77b4",
                values: [100]
            },
            {
                name: "Series 2",
                color: "#aec7e8",
                values: [200]
            },
            {
                name: "Series 3",
                color: "#ff7f0e",
                values: [300, 1]
            },
        ],
        VueUiStackbar: [
            {
                name: "Serie 1",
                series: [19, 20.07, 30, 40, 50, 60],
            },
            {
                name: "Serie 2",
                series: [13, 8, 9, 13, 25, 27],
            },
            {
                name: "Serie 3",
                series: [13, 10, 9, 13, 25, 19],
            },
            {
                name: "Serie 4",
                series: [25, 23, 9, 13, 25, 31],
        
            },
        ],
        VueUiSparkline: [
            { period: 'T0', value: 0 },
            { period: 'T1', value: 1 },
            { period: 'T2', value: 1 },
            { period: 'T3', value: 2 },
            { period: 'T4', value: 3 },
            { period: 'T5', value: 5 },
            { period: 'T6', value: 8 },
            { period: 'T7', value: 13 },
            { period: 'T8', value: 21 },
            { period: 'T9', value: 34 },
        ],
        VueUiSparkbar: [
            {
                name: "quality",
                value: 61.953,
                rounding: 2,
                prefix: '',
                suffix: "%",
            },
            {
                name: "popularity",
                value: 2.0412,
                rounding: 2,
                prefix: '',
                suffix: "%",
            },
            {
                name: "maintenance",
                value: 33.3291,
                rounding: 2,
                prefix: '',
                suffix: "%",
            },
        ],
        VueUiSparkStackbar: [
            {
                name: "Vue",
                value: 258,
                color: "#1f77b4",
            },
            {
                name: "Javascript",
                value: 36,
                color: "#aec7e8",
            },
            {
                name: "Other",
                value: 16,
                color: "#ff7f0e",
            },
        ],
        VueUiGauge: {
            base: 0,
            value: 4.2,
            series: [
                {
                    from: 1,
                    to: 3,
                    color: "#ff6400",
                    name: 'bad'
                },
                {
                    from: 3,
                    to: 4,
                    color: "#5f8bee",
                    name: 'acceptable'
                },
                {
                    from: 4,
                    to: 5,
                    color: "#42d392",
                    name: 'very good'
                },
            ]
        }
    }

    return datasets[componentName]
}