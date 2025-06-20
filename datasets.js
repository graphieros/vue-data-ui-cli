export default (componentName) => {
    const datasets = {
        VueUiChord: {
            matrix: [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ],
            labels: ["A", "B", "C"]
        },
        VueUiRidgeline: [
            {
                name: "Moscow",
                datapoints: [
                    {
                        name: "Average Temperature (°C)",
                        values: [-7, -6, 0, 8, 15, 18, 20, 18, 13, 7, 1, -4],
                    },
                ],
            },
            {
                name: "Chicago",
                datapoints: [
                    {
                        name: "Average Temperature (°C)",
                        values: [-4, -2, 3, 10, 16, 22, 24, 23, 19, 12, 5, -1],
                    },
                ],
            },
            {
                name: "Toronto",
                datapoints: [
                    {
                        name: "Average Temperature (°C)",
                        values: [-3, -2, 2, 9, 15, 20, 22, 21, 17, 10, 4, -1],
                    },
                ],
            },
            {
                name: "Berlin",
                datapoints: [
                    {
                        name: "Average Temperature (°C)",
                        values: [0, 2, 6, 12, 16, 19, 21, 21, 17, 12, 7, 3],
                    },
                ],
            }, 
        ],
        VueUiWorld: {
            USA: { value: 26465 },
            CHN: { value: 17679 },
        },
        VueUiXy: [
            {
                name: 'Serie',
                series: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                type: 'line',
                dataLabels: true,
            },
        ],
        VueUiCirclePack: [
            { name: 'Datapoint A', value: 200 },
            { name: 'Datapoint B', value: 150 },
            { name: 'Datapoint C', value: 100 },
            { name: 'Datapoint D', value: 50 },
            { name: 'Datapoint E', value: 25 },
        ],
        VueUiDonut: [
            {
                name: 'Series 1',
                color: '#1f77b4',
                values: [100],
            },
            {
                name: 'Series 2',
                color: '#aec7e8',
                values: [200],
            },
            {
                name: 'Series 3',
                color: '#ff7f0e',
                values: [300, 1],
            },
        ],
        VueUiNestedDonuts: [
            {
                name: 'Group 1',
                series: [
                    {
                        name: 'Serie 1',
                        values: [50],
                    },
                    {
                        name: 'Serie 2',
                        values: [30],
                    },
                    {
                        name: 'Serie 3',
                        values: [20],
                    },
                ],
            },
            {
                name: 'Group 2',
                series: [
                    {
                        name: 'Serie 1',
                        values: [40],
                    },
                    {
                        name: 'Serie 2',
                        values: [40],
                    },
                    {
                        name: 'Serie 3',
                        values: [30],
                    },
                ],
            },
        ],
        VueUiStackbar: [
            {
                name: 'Serie 1',
                series: [19, 20.07, 30, 40, 50, 60],
            },
            {
                name: 'Serie 2',
                series: [13, 8, 9, 13, 25, 27],
            },
            {
                name: 'Serie 3',
                series: [13, 10, 9, 13, 25, 19],
            },
            {
                name: 'Serie 4',
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
                name: 'quality',
                value: 61.953,
                rounding: 2,
                prefix: '',
                suffix: '%',
            },
            {
                name: 'popularity',
                value: 2.0412,
                rounding: 2,
                prefix: '',
                suffix: '%',
            },
            {
                name: 'maintenance',
                value: 33.3291,
                rounding: 2,
                prefix: '',
                suffix: '%',
            },
        ],
        VueUiSparkStackbar: [
            {
                name: 'Vue',
                value: 258,
                color: '#1f77b4',
            },
            {
                name: 'Javascript',
                value: 36,
                color: '#aec7e8',
            },
            {
                name: 'Other',
                value: 16,
                color: '#ff7f0e',
            },
        ],
        VueUiGauge: {
            base: 0,
            value: 4.2,
            series: [
                {
                    from: 1,
                    to: 3,
                    color: '#ff6400',
                    name: 'bad',
                },
                {
                    from: 3,
                    to: 4,
                    color: '#5f8bee',
                    name: 'acceptable',
                },
                {
                    from: 4,
                    to: 5,
                    color: '#42d392',
                    name: 'very good',
                },
            ],
        },
        VueUiSparkHistogram: [
            {
                value: 1.2,
                valueLabel: '20%',
                timeLabel: '09:00',
                intensity: 0.2,
            },
            {
                value: 1.3,
                valueLabel: '50%',
                timeLabel: '10:00',
                intensity: 0.5,
            },
            {
                value: 1.1,
                valueLabel: '60%',
                timeLabel: '11:00',
                intensity: 0.6,
            },
            {
                value: 0.8,
                valueLabel: '70%',
                timeLabel: '12:00',
                intensity: 0.7,
            },
            {
                value: 2,
                valueLabel: '100%',
                timeLabel: '13:00',
                intensity: 1,
            },
            {
                value: 2.1,
                valueLabel: '100%',
                timeLabel: '14:00',
                intensity: 1,
            },
            {
                value: 2.3,
                valueLabel: '80%',
                timeLabel: '15:00',
                intensity: 0.8,
            },
            {
                value: 2.1,
                valueLabel: '70%',
                timeLabel: '16:00',
                intensity: 0.7,
            },
            {
                value: 0.9,
                valueLabel: '60%',
                timeLabel: '17:00',
                intensity: 0.6,
            },
            {
                value: 0.7,
                valueLabel: '50%',
                timeLabel: '18:00',
                intensity: 0.5,
            },
            {
                value: 0.3,
                valueLabel: '30%',
                timeLabel: '19:00',
                intensity: 0.3,
            },
            {
                value: 0.2,
                valueLabel: '20%',
                timeLabel: '20:00',
                intensity: 0.2,
            },
        ],
        VueUiSparkgauge: {
            value: -8,
            min: -10,
            max: 10,
            title: 'KPI 1',
        },
        VueUiSparkTrend: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        VueUiGizmo: 66.33,
        VueUiQuickChart: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        VueUiKpi: 123456789,
        VueUiBullet: {
            value: 85,
            target: 80,
            segments: [
                {
                    name: 'Low',
                    from: 0,
                    to: 50,
                },
                {
                    name: 'Medium',
                    from: 50,
                    to: 70,
                },
                {
                    name: 'High',
                    from: 70,
                    to: 100,
                },
            ],
        },
        VueUiXyCanvas: [
            {
                name: 'Series 1',
                series: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                type: 'bar',
                dataLabels: false,
            },
        ],
        VueUiVerticalBar: [
            {
                name: 'Serie 1',
                value: 100,
                children: [
                    {
                        name: 'serie 1 child 1',
                        value: 80,
                    },
                    {
                        name: 'serie 1 child 2',
                        value: 20,
                    },
                ],
            },
            {
                name: 'Serie 2',
                value: 345,
            },
            {
                name: 'Serie 3',
                value: 210,
            },
            {
                name: 'Serie 4',
                value: 188,
            },
            {
                name: 'Serie 5',
                value: 120,
                children: [
                    {
                        name: 'Serie 5 child 1',
                        value: 60,
                    },
                    {
                        name: 'Serie 5 child 2',
                        value: 20,
                    },
                    {
                        name: 'Serie 5 child 3',
                        value: 40,
                    },
                ],
            },
        ],
        VueUiParallelCoordinatePlot: [
            {
                name: 'Series 1',
                shape: 'triangle',
                series: [
                    {
                        name: 'Item 1.1',
                        values: [1200, 300, 12, 1.2],
                    },
                    {
                        name: 'Item 1.2',
                        values: [1000, 100, 10, 1],
                    },
                    {
                        name: 'Item 1.3',
                        values: [-800, 85, 8.5, 0.85],
                    },
                ],
            },
            {
                name: 'Series 2',
                series: [
                    {
                        name: 'Item 2.1',
                        values: [2300, 230, 23, 2.3],
                    },
                    {
                        name: 'Item 2.2',
                        values: [2500, 250, 25, 2.5],
                    },
                    {
                        name: 'Item 2.3',
                        values: [2800, 280, 28, 2.8],
                    },
                ],
            },
        ],
        VueUiFlow: [
            ['A1', 'B1', 10],
            ['A1', 'B2', 10],
            ['B1', 'C1', 5],
            ['B1', 'C2', 5],
            ['B1', 'C3', 5],
            ['B1', 'C4', 5],
            ['A2', 'B1', 10],
            ['B2', 'C5', 10],
            ['C3', 'D1', 2],
            ['C4', 'D1', 2],
            ['C5', 'D1', 2],
            ['C2', 'D2', 2],
            ['C3', 'D2', 1],
        ],
        VueUiCandlestick: [
            ['2025-01-01', 56, 120, 40, 110, 1250],
            ['2025-02-01', 110, 150, 80, 98, 2200],
            ['2025-03-01', 98, 155, 75, 103, 3500],
            ['2025-04-01', 103, 115, 102, 102, 999],
            ['2025-05-01', 102, 135, 72, 85, 3216],
            ['2025-06-01', 85, 162, 65, 107, 4315],
            ['2025-07-01', 107, 134, 99, 112, 2561],
            ['2025-08-01', 112, 125, 112, 120, 669],
            ['2025-09-01', 120, 113, 76, 89, 2591],
            ['2025-10-01', 89, 150, 85, 125, 2881],
            ['2025-11-01', 125, 130, 45, 92, 1972],
            ['2025-12-01', 92, 120, 35, 75, 3599],
            ['2025-13-01', 75, 80, 26, 45, 5881],
            ['2025-14-01', 45, 60, 20, 30, 2881],
            ['2025-15-01', 30, 120, 10, 105, 2881],
        ],
        VueUiAgePyramid: [
            ['2017', 5, 366538, 382762],
            ['2018', 4, 356873, 376705],
            ['2019', 3, 351707, 368670],
            ['2020', 2, 341042, 356678],
            ['2021', 1, 343026, 357351],
            ['2022', 0, 330929, 345538],
        ],
        VueUiDonutEvolution: [
            {
                name: 'Serie 1',
                values: [55, 34, 21, 13, 8, 5, 8, 13, 21, 34, 55],
            },
            {
                name: 'Serie 2',
                values: [1, 12, 24, 32, 5, 8, 13, 21, 34, 55, 89],
            },
            {
                name: 'Serie 3',
                values: [16, 2, 3, 5, 28, 13, 21, 34, 55, 89, 134],
            },
            {
                name: 'Serie 4',
                values: [5, null, 5, 5, 5, 5],
            },
        ],
        VueUiFunnel: [
            {
                name: 'Lead',
                value: 8249,
            },
            {
                name: 'Opportunity',
                value: 6322,
            },
            {
                name: 'Qualified',
                value: 4562,
            },
            {
                name: 'Sold',
                value: 3021,
            },
            {
                name: 'Retained',
                value: 1412,
            },
        ],
        VueUiHistoryPlot: [
            {
                name: 'Series 1',
                values: [
                    { x: 355, y: 2.3, label: 'January' },
                    { x: 112, y: 1.2, label: 'February' },
                    { x: 313, y: 0.4, label: 'March' },
                    { x: 555, y: 1.2, label: 'April' },
                ],
            },
            {
                name: 'Series 2',
                values: [
                    { x: 1000, y: 2, label: 'January' },
                    { x: 655, y: 4, label: 'February' },
                    { x: 350, y: 3, label: 'March' },
                    { x: 815, y: 2.5, label: 'April' },
                ],
            },
        ],
        VueUiWaffle: [
            {
                name: 'Series 1',
                color: '#1f77b4',
                values: [100],
            },
            {
                name: 'Series 2',
                color: '#aec7e8',
                values: [200],
            },
            {
                name: 'Series 3',
                color: '#ff7f0e',
                values: [300, 1],
            },
        ],
        VueUiHeatmap: [
            {
                name: "Mon",
                values: [31, 58, 12, 25, 13]
            },
            {
                name: "Tue",
                values: [3, 12, 7, 9, 15, 27]
            },
            {
                name: "Wed",
                values: [8, 9, 3, 18, 11, 7]
            }
        ],
        VueUiTreemap: [
            {
                name: "Parent 1",
                value: 100,
                children: [
                    {
                        name: "P1 C1",
                        value: 70,
                    },
                    {
                        name: 'P1 C2',
                        value: 20
                    },
                    {
                        name: 'P1 C3',
                        value: 10,
                    },
                ]
            },
            {
                name: "Parent 2",
                value: 110,
                children: [
                    {
                        name: "P2 C1",
                        value: 80,
                    },
                    {
                        name: 'P2 C2',
                        value: 20
                    },
                    {
                        name: 'P2 C3',
                        value: 10,
                    },
                ]
            }
        ],
        VueUiRings: [
            {
                name: "Serie 1",
                color: "#5f8bee",
                values: [100]
            },
            {
                name: "Serie 2",
                color: "#42d392",
                values: [200]
            },
            {
                name: "Serie 3",
                color: "#ff6400",
                values: [300, 1]
            },
            {
                name: "Serie 4",
                color: "#f7e97c",
                values: [50, 1]
            },
            {
                name: "Serie 5",
                color: "#42e9f5",
                values: [25, 1]
            }
        ],
        VueUiGalaxy: [
            {
                name: 'Series 1',
                color: '#1f77b4',
                values: [100],
            },
            {
                name: 'Series 2',
                color: '#aec7e8',
                values: [200],
            },
            {
                name: 'Series 3',
                color: '#ff7f0e',
                values: [300, 1],
            },
        ],
        VueUiChestnut: [
            {
                name: "Root1",
                color: "#ff6400",
                branches: [
                    {
                        name: "branch 1.1",
                        value: 200,
                        breakdown: [
                            {
                                name: "break 1.1.1",
                                value: 50,
                                color: "#F17171"
                            },
                            {
                                name: "break 1.1.2",
                                value: 25,
                                color: "#ffc800"
                            },
                            {
                                name: "break 1.1.3",
                                value: 25,
                                color: "#42d392"
                            },
                        ]
                    },
                    {
                        name: "branch 1.2",
                        value: 100,
                        breakdown: [
                            {
                                name: "break 1.2.1",
                                value: 10,
                                color: "#F17171"
                            },
                            {
                                name: "break 1.2.2",
                                value: 20,
                                color: "#ffc800"
                            },
                            {
                                name: "break 1.2.3",
                                value: 70,
                                color: "#42d392"
                            },
                        ]
                    },
                    {
                        name: "branch 1.3",
                        value: 175,
                        breakdown: [
                            {
                                name: "break 1.3.1",
                                value: 90,
                                color: "#F17171"
                            },
                            {
                                name: "break 1.3.2",
                                value: 10,
                                color: "#ffc800"
                            },
                            {
                                name: "break 1.3.3",
                                value: 75,
                                color: "#42d392"
                            },
                        ]
                    },
                ]
            }
        ],
        VueUiOnion: [
            {
                name: "Serie 1",
                percentage: 21,
                value: 1200,
                color: "#5f8bee"
            },
            {
                name: "Serie 2",
                percentage: 34,
                value: 1000,
                color: "#ff6400"
            },
            {
                name: "Serie 3",
                percentage: 79,
                value: 1280,
                color: "#42d392",
            }
        ],
        VueUiWheel: { percentage: 66.33 },
        VueUiTiremarks: { percentage: 66.33 },
        VueUiThermometer: {
            value: 37,
            from: -100,
            to: 100,
            steps: 20,
            colors: {
                from: "#dc3912",
                to: "#3366cc",
            }
        },
        VueUiWordCloud: [
            { name: 'Lorem', value: 100 },
            { name: 'Ipsum', value: 80 },
            { name: 'Dolor', value: 66 },
            { name: 'Sit', value: 40 },
            { name: 'Amet', value: 20 }
        ],
        VueUiRelationCircle: [
            {
                id: "01",
                label: "Lorem",
                relations: ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                weights: [5, 3, 10, 2, 9, 3, 1, 2, 3, 7, 1],
                color: "#eb4034",
            },
            {
                id: "02",
                label: "Ipsum",
                relations: ["01", "03", "07", "06", "07"],
                weights: [3, 2, 9, 7, 1],
                color: "#e0992d",
            },
            {
                id: "03",
                label: "Dolor",
                relations: ["01", "02"],
                weights: [2, 5],
                color: "#decc2c",
            },
            {
                id: "04",
                label: "Consectetur",
                relations: ["01", "05", "10"],
                weights: [2, 1, 4],
                color: "#a8de2a",
            },
            {
                id: "05",
                label: "Amet",
                relations: ["01", "04", "07", "10"],
                weights: [2, 3, 4, 5],
                color: "#5ed622",
            },
            {
                id: "06",
                label: "Rherum",
                relations: ["01", "02"],
                weights: [4, 1],
                color: "#21d92d",
            },
            {
                id: "07",
                label: "Delecta",
                relations: ["01", "02", "08", "12"],
                weights: [4, 8, 2, 1],
                color: "#23d97b",
            },
            {
                id: "08",
                label: "Nitimur",
                relations: ["01", "07", "12", "01"],
                weights: [7, 3, 2, 3],
                color: "#29d6c2",
            },
            {
                id: "09",
                label: "Vetitum",
                relations: ["01"],
                weights: [1],
                color: "#2aacdb",
            },
            {
                id: "10",
                label: "Monumentum",
                relations: ["01", "04", "05"],
                weights: [4, 1, 4],
                color: "#295bd9",
            },
            {
                id: "11",
                label: "Aere",
                relations: ["01"],
                weights: [3],
                color: "#523ed6",
            },
            {
                id: "12",
                label: "Perennius",
                relations: ["01", "07", "08"],
                weights: [8, 1, 1],
                color: "#8235db",
            }
        ],
        VueUiRadar: {
            categories: [
                {
                    name: "category 1",
                    color: "#5f8bee"
                },
                {
                    name: "category 2",
                    color: "#42d392"
                },
                {
                    name: "category 3",
                    color: "#ff6400"
                }
            ],
            series: [
                {
                    name: "Serie 1",
                    values: [65, 45, 12],
                    color: "",
                    target: 100
                },
                {
                    name: "Serie 2",
                    values: [2525, 3472, 4950],
                    color: "",
                    target: 10000
                },
                {
                    name: "Serie 3",
                    values: [4.7, 1, 3],
                    color: "",
                    target: 5
                },
                {
                    name: "Serie 4",
                    values: [400, 250, 325],
                    color: "",
                    target: 500
                },
                {
                    name: "Serie 5",
                    values: [5, 9, 7],
                    color: "",
                    target: 10
                },
                {
                    name: "Serie 6",
                    values: [6, 7, 10],
                    color: "",
                    target: 10
                },
            ]
        },
        VueUiMoodRadar: {
            "1": 96,
            "2": 64,
            "3": 128,
            "4": 256,
            "5": 384
        },
        VueUiQuadrant: [
            {
                name: "Stars",
                shape: 'star',
                color: "#5f8bee",
                series: [
                    {
                        name: "Star 1",
                        x: 50,
                        y: 50
                    },
                    {
                        name: "Star 2",
                        x: -10,
                        y: -10
                    },
                    {
                        name: "Star 3",
                        x: -15,
                        y: 20
                    },
                    {
                        name: "Star 4",
                        x: 15,
                        y: -20
                    },
                ]
            },
            {
                name: "Triangles",
                shape: 'triangle',
                color: "#42d392",
                series: [
                    {
                        name: "Triangle 1",
                        x: -50,
                        y: -50
                    },
                    {
                        name: "Triangle 2",
                        x: 25,
                        y: -25
                    },
                    {
                        name: "Triangle 3",
                        x: -25,
                        y: 25
                    },
                    {
                        name: "Triangle 4",
                        x: 10,
                        y: 10
                    }
                ]
            },
            {
                name: "Hexagons",
                shape: 'hexagon',
                color: "#ff6400",
                series: [
                    {
                        name: "Hexagon 1",
                        x: -39,
                        y: 39
                    },
                    {
                        name: "Hexagon 2",
                        x: -2,
                        y: 45
                    },
                    {
                        name: "Hexagon 3",
                        x: -15,
                        y: 30
                    },
                ]
            },
        ],
        VueUiScatter: [
            {
                name: "Cluster 1",
                values: [
                    {
                        x: 1,
                        y: 1,
                        name: "Cluster 1 point 1"
                    },
                    {
                        x: 0,
                        y: -1,
                        name: "Cluster 1 point 2"
                    },
                    {
                        x: 2,
                        y: 3,
                        name: "Cluster 1 point 3"
                    },
                ]
            },
            {
                name: "Cluster 2",
                values: [
                    {
                        x: -5,
                        y: -4,
                        name: "Cluster 2 point 1"
                    },
                    {
                        x: 13,
                        y: 8,
                        name: "Cluster 2 point 2"
                    },
                    {
                        x: -2,
                        y: -7,
                        name: "Cluster 2 point 3"
                    },
                ]
            }
        ],
        VueUiMolecule: [
            {
                name: "Root",
                details: "This is the root node",
                nodes: [
                    {
                        name: 'node1',
                        details: 'Lorem ipsum',
                        nodes: [
                            {
                                name: 'node1.1', details: 'Lorem ipsum', nodes: [
                                    { name: 'node1.1' },
                                    { name: 'node1.2' },
                                    { name: 'node1.3' },
                                ]
                            },
                            {
                                name: 'node1.2', nodes: [
                                    { name: 'node1.2.1' },
                                    { name: 'node1.2.2' },
                                    { name: 'node1.2.3' },
                                    { name: 'node1.2.4' },
                                ]
                            },
                            {
                                name: 'node1.3', nodes: [
                                    { name: 'node1.3.1' },
                                    { name: 'node1.3.2' },
                                ]
                            },
                            {
                                name: 'node1.4', nodes: [
                                    { name: 'node1.4.1' },
                                    { name: 'node1.4.2' },
                                    { name: 'node1.4.3' },
                                    { name: 'node1.4.4' },
                                    { name: 'node1.4.5' },
                                    { name: 'node1.4.6' },
                                ]
                            },
                            {
                                name: 'node1.5', nodes: [
                                    { name: 'node1.5.1' },
                                    { name: 'node1.5.2' },
                                    { name: 'node1.5.3' },
                                    { name: 'node1.5.4' },
                                    { name: 'node1.5.5' },
                                    { name: 'node1.5.6' },
                                ]
                            },
                            {
                                name: 'node1.6', nodes: [
                                    { name: 'node1.6.1' },
                                    { name: 'node1.6.2' },
                                    { name: 'node1.6.3' },
                                    { name: 'node1.6.4' },
                                    { name: 'node1.6.5' },
                                    { name: 'node1.6.6' },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'node2',
                        nodes: [
                            {
                                name: 'node2.1', nodes: [
                                    { name: 'node2.1.1' },
                                    { name: 'node2.1.2' },
                                    { name: 'node2.1.3' },
                                    { name: 'node2.1.4' },
                                    { name: 'node2.1.5' },
                                    {
                                        name: 'node2.1.6', nodes: [
                                            { name: 'node2.1.6.1' },
                                            { name: 'node2.1.6.2' },
                                            { name: 'node2.1.6.3' },
                                            { name: 'node2.1.6.4' },
                                            { name: 'node2.1.6.5' },
                                            {
                                                name: 'node2.1.6.6', nodes: [
                                                    { name: 'node2.1.6.6.1' },
                                                    { name: 'node2.1.6.6.2' },
                                                    { name: 'node2.1.6.6.3' },
                                                    { name: 'node2.1.6.6.4' },
                                                    { name: 'node2.1.6.6.5' },
                                                    {
                                                        name: 'node2.1.6.6.6', nodes: [
                                                            { name: 'node2.1.6.6.6.1' },
                                                            { name: 'node2.1.6.6.6.2' },
                                                            { name: 'node2.1.6.6.6.3' },
                                                            { name: 'node2.1.6.6.6.4' },
                                                            { name: 'node2.1.6.6.6.5' },
                                                            { name: 'node2.1.6.6.6.6' },
                                                        ]
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'node3',
                        nodes: [
                            { name: 'node3.1' },
                            { name: 'node3.2' },
                            { name: 'node3.3' },
                        ]
                    },
                    {
                        name: 'node4',
                        nodes: [
                            { name: 'node4.1' },
                            { name: 'node4.2', nodes: [
                                { name: 'node4.2.1'},
                                { name: 'node4.2.2'},
                                { name: 'node4.2.3'},
                            ] },
                            { name: 'node4.3' },
                            { name: 'node4.4', nodes: [
                                { name: 'node4.4.1'},
                                { name: 'node4.4.2'},
                                { name: 'node4.4.3'},
                                { name: 'node4.4.4'},
                                { name: 'node4.4.5'},
                            ] },
                        ]
                    },
                    {
                        name: 'node5',
                        nodes: [
                            { name: 'node4.1' },
                            { name: 'node4.2' },
                            { name: 'node4.3' },
                            { name: 'node4.4' },
                            { name: 'node4.5' },
                        ]
                    },
                    {
                        name: 'node6',
                        nodes: [
                            { name: 'node4.1' },
                            { name: 'node4.2' },
                            { name: 'node4.3' },
                            { name: 'node4.4' },
                        ]
                    },
                ]
            }
        ],
        VueUiStripPlot: [
            {
                name: "Asia",
                plots: [
                    { name: "Shanghai", value: 24.9 },
                    { name: "Beijing", value: 21.9 },
                    { name: "Delhi", value: 16.8 },
                    { name: "Guangzhou", value: 16.1 },
                    { name: "Istanbul", value: 15.6 },
                    { name: "Chengdu", value: 15.4 },
                    { name: "Mumbai", value: 15.4 },
                    { name: "Karachi", value: 14.9 },
                    { name: "Shenzen", value: 14.7 },
                    { name: "Tokyo", value: 14 },
                ]
            },
            {
                name: "Africa",
                plots: [
                    { name: "Kinshasa", value: 17.1 },
                    { name: "Lagos", value: 14.9 },
                    { name: "Cairo", value: 9.3 },
                    { name: "Johannesburg", value: 5.6 },
                    { name: "Giza", value: 5.6 },
                    { name: "Khartoum", value: 5.3 },
                    { name: "Abidjan", value: 5 },
                    { name: "Alexandria", value: 4.9 },
                    { name: "Dar es Salaam", value: 4.7 },
                    { name: "Nairobi", value: 4.4 },
                ]
            },
            {
                name: "Europe",
                plots: [
                    { name: "Moscow", value: 13 },
                    { name: "London", value: 9 },
                    { name: "Saint Petersburg", value: 5.4 },
                    { name: "Berlin", value: 3.8 },
                    { name: "Madrid", value: 3.3 },
                    { name: "Kyiv", value: 3 },
                    { name: "Rome", value: 2.7 },
                    { name: "Paris", value: 2.1 },
                    { name: "Minsk", value: 2 },
                    { name: "Vienna", value: 1.9 }
                ]
            },
            {
                name: "America",
                plots: [
                    { name: "Sao Paulo", value: 12.2 },
                    { name: "Lima", value: 9.7 },
                    { name: "Mexico City", value: 9.2 },
                    { name: "New York", value: 8.4 },
                    { name: "Bogota", value: 8 },
                    { name: "Rio de Janeiro", value: 6.7 },
                    { name: "Santiago", value: 6.2 },
                    { name: "Los Angeles", value: 4 },
                    { name: "Buenos Aires", value: 3 },
                    { name: "Brasilia", value: 2.9 }
                ]
            },
            {
                name: "Australia & Oceania",
                plots: [
                    { name: "Sydney", value: 5.4 },
                    { name: "Melbourne", value: 5.1 },
                    { name: "Brisbane", value: 2.6 },
                    { name: "Perth", value: 2.1 },
                    { name: "Auckland", value: 1.7 },
                    { name: "Adelaide", value: 1.4 },
                    { name: "Honolulu", value: 1 },
                    { name: "Gold Coast", value: 0.7 },
                    { name: "Newcastle-Maitland", value: 0.5 },
                    { name: "Canberra", value: 0.46 },
                ]
            },
        ],
        VueUiDumbbell: [
            { name: 'Sweden', start: 5000, end: 7100 },
            { name: 'Korea, Rep.', start: 4900, end: 7050 },
            { name: 'Iceland', start: 6500, end: 8000 },
            { name: 'Finland', start: 6400, end: 7600 },
            { name: 'Norway', start: 5400, end: 6050 },
            { name: 'Ireland', start: 3000, end: 2000 }
        ],
        VueUi3dBar: {
            series: [
                {
                    name:  'Serie 1',
                    value: 256,
                    breakdown: [
                        {
                            name: 'Sub serie 1',
                            value: 100
                        },
                        {
                            name: 'Sub serie 2',
                            value: 90
                        },
                        {
                            name: 'Sub serie 3',
                            value: 66
                        }
                    ]
                },
                {
                    name: 'Serie 2',
                    value: 128
                },
                {
                    name: 'Serie 3',
                    value: 64
                },
                {
                    name: 'Serie 4',
                    value: 32
                },
                {
                    name: 'Serie 5',
                    value: 16
                },
                {
                    name: 'Serie 6',
                    value: 8
                }
            ]
        },
        VueUiTableSparkline: [
            {
                name: "Serie 1",
                values: [0, 1, 2, 3, 5, 8],
                color: "#5f8bee",
            },
            {
                name: "Serie 2",
                values: [8, 12, 13, 25, 31, 42],
                color: "#42d392",
            },
            {
                name: "Serie 3",
                values: [66, 22, 33, 12, 55, 64],
                color: "#ff6400",
            },
            {
                name: "Serie 4",
                values: [54, 44, 34, 12, 32, 26],
                color: "#f7e97c"
            },
            {
                name: "Serie 5",
                values: [12, 14, 18, 25, 32, 64],
                color: "#42e9f5"
            },
        ],
        VueUiCarouselTable: {
            head: ["col1", "col2", "col3", "col4", "col5"],
            body: [
                [10000, 1000, 100, 10, 0],
                [10001, 1001, 101, 11, 1],
                [10002, 1002, 102, 12, 2],
                [10003, 1003, 103, 13, 3],
                [10004, 1004, 104, 14, 4],
                [10005, 1005, 105, 15, 5],
                [10006, 1006, 106, 16, 6],
                [10007, 1007, 107, 17, 7],
                [10008, 1008, 108, 18, 8],
                [10009, 1009, 109, 19, 9]
            ]
        },
        VueUiRating: {
            rating: {
                "1": 146,
                "2": 225,
                "3": 3920,
                "4": 1050,
                "5": 2125
            }
        },
        VueUiSmiley: {
            rating: {
                "1": 146,
                "2": 225,
                "3": 3920,
                "4": 1050,
                "5": 2125
            }
        },
        VueUiAccordion: null,
        VueUiSkeleton: null
    };
    return datasets[componentName];
};
