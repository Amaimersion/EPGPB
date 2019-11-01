import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./elements/canvas";
import Chart from "chart.js";


interface Props {}

interface State {}


class App extends React.Component<Props, State> {
    public elements: {
        c2: React.RefObject<HTMLCanvasElement>;
        c3: React.RefObject<HTMLCanvasElement>;
        c4: React.RefObject<HTMLCanvasElement>;
        c5: React.RefObject<HTMLCanvasElement>;
        c6: React.RefObject<HTMLCanvasElement>;
        c7: React.RefObject<HTMLCanvasElement>;
        c8: React.RefObject<HTMLCanvasElement>;
        c9: React.RefObject<HTMLCanvasElement>;
        c10: React.RefObject<HTMLCanvasElement>;
        c11: React.RefObject<HTMLCanvasElement>;
        c12: React.RefObject<HTMLCanvasElement>;
        c13: React.RefObject<HTMLCanvasElement>;
        c14: React.RefObject<HTMLCanvasElement>;
        c15: React.RefObject<HTMLCanvasElement>;
        c16: React.RefObject<HTMLCanvasElement>;
    };

    constructor(props: Readonly<Props>) {
        super(props);

        this.elements = {
            c2: React.createRef<HTMLCanvasElement>(),
            c3: React.createRef(),
            c4: React.createRef(),
            c5: React.createRef(),
            c6: React.createRef(),
            c7: React.createRef(),
            c8: React.createRef(),
            c9: React.createRef(),
            c10: React.createRef(),
            c11: React.createRef(),
            c12: React.createRef(),
            c13: React.createRef(),
            c14: React.createRef(),
            c15: React.createRef(),
            c16: React.createRef()
        };

        this.create2 = this.create2.bind(this);
        this.create3 = this.create3.bind(this);
        this.create4 = this.create4.bind(this);
        this.create5 = this.create5.bind(this);

        this.create6 = this.create6.bind(this);
        this.create7 = this.create7.bind(this);
        this.create8 = this.create8.bind(this);
        this.create9 = this.create9.bind(this);

        this.create10 = this.create10.bind(this);
        this.create11 = this.create11.bind(this);
        this.create12 = this.create12.bind(this);
        this.create13 = this.create13.bind(this);

        this.create14 = this.create14.bind(this);
        this.create15 = this.create15.bind(this);
        this.create16 = this.create16.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div
                className={""}
            >
                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c2}
                        create={this.create2}
                    />
                    <Canvas
                        reff={this.elements.c3}
                        create={this.create3}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c4}
                        create={this.create4}
                    />
                    <Canvas
                        reff={this.elements.c5}
                        create={this.create5}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c6}
                        create={this.create6}
                    />
                    <Canvas
                        reff={this.elements.c7}
                        create={this.create7}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c8}
                        create={this.create8}
                    />
                    <Canvas
                        reff={this.elements.c9}
                        create={this.create9}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c10}
                        create={this.create10}
                    />
                    <Canvas
                        reff={this.elements.c11}
                        create={this.create11}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c12}
                        create={this.create12}
                    />
                    <Canvas
                        reff={this.elements.c13}
                        create={this.create13}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c14}
                        create={this.create14}
                    />
                    <Canvas
                        reff={this.elements.c15}
                        create={this.create15}
                    />
                </div>

                <div
                    style={{display: "flex", justifyContent: "space-around", alignItems: "center", alignContent: "center", marginTop: "2rem"}}
                >
                    <Canvas
                        reff={this.elements.c16}
                        create={this.create16}
                    />
                </div>
            </div>
        );
    }

    protected async getData(id: number) {
        const response = await fetch(`https://kvmru01-17637.fornex.org:5000/api/myChart${id}`);

        if (!response.ok) {
            throw new Error("not ok");
        }

        const content = await response.json();

        content.data = content.data.substr(1);
        content.data = content.data.slice(0, -1);
        content.data = content.data.split(',').map((value) => {
            return parseFloat(value);
        });

        content.labels = content.labels.substr(1);
        content.labels = content.labels.slice(0, -1);
        content.labels = content.labels.split(',').map((value) => {
            return value.trim();
        });

        return content;
    }

    protected async create2(): Promise<void> {
        if (!this.elements.c2.current) {
            return;
        }

        const data = await this.getData(2);
        const context = this.elements.c2.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Средний срок выхода на проектную мощность',
                    data: data.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'лет'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    protected async create3(): Promise<void> {
        if (!this.elements.c3.current) {
            return;
        }

        const data = await this.getData(3);
        const context = this.elements.c3.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Количество посетителей',
                    data: data.data,
                    borderColor: [
                        'rgba(55, 199, 132, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create4(): Promise<void> {
        if (!this.elements.c4.current) {
            return;
        }

        const data = await this.getData(4);
        const context = this.elements.c4.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Количество чек-листов',
                    data: data.data,
                    borderColor: [
                        'rgba(255, 66, 32, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create5(): Promise<void> {
        if (!this.elements.c5.current) {
            return;
        }

        const data = await this.getData(5);
        const context = this.elements.c5.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Cредняя сумма инвестиций',
                    data: data.data,
                    borderColor: [
                        'rgba(255, 38, 78, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млрд. руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create6(): Promise<void> {
        if (!this.elements.c6.current) {
            return;
        }

        const data = await this.getData(6);
        const context = this.elements.c6.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Cредняя сумма инвестиций',
                    data: data.data,
                    borderColor: [
                        'rgba(255, 38, 78, 1)',
                        'rgba(105, 15, 97, 1)',
                        'rgba(55, 105, 79, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 38, 78, 0.3)',
                        'rgba(105, 15, 97, 0.3)',
                        'rgba(55, 105, 79, 0.3)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млрд. руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create7(): Promise<void> {
        if (!this.elements.c7.current) {
            return;
        }

        const data = await this.getData(7);
        const context = this.elements.c7.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Cредняя сумма инвестиций',
                    data: data.data,
                    borderColor: [
                        'rgba(255, 98, 78, 1)',
                        'rgba(95, 158, 8, 1)',
                        'rgba(115, 17, 79, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 98, 78, 0.4)',
                        'rgba(95, 158, 8, 0.4)',
                        'rgba(115, 17, 79, 0.4)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млрд. руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create8(): Promise<void> {
        if (!this.elements.c8.current) {
            return;
        }

        const data = await this.getData(8);
        const context = this.elements.c8.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Соотношение принятых чек-листов к отклонённым',
                    data: data.data,
                    backgroundColor: [
                        'rgba(169, 62, 18, 0.3)',
                        'rgba(255, 15, 26, 0.3)'
                    ]
                }]
            },
            options: {
                    title: {
                    display: true,
                    text: 'Соотношение принятых чек-листов к отклонённым'
                }
            }
        })
    }

    protected async create9(): Promise<void> {
        if (!this.elements.c9.current) {
            return;
        }

        const data = await this.getData(9);
        const context = this.elements.c9.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Процент одобрения запросов у банка кредита с гарантией',
                    data: data.data,
                    backgroundColor: [
                        'rgba(123, 56, 59, 1)',
                        'rgba(239, 62, 18, 1)'
                    ]
                }]
            },
            options: {
                    title: {
                    display: true,
                    text: 'Процент одобрения запросов у банка кредита с гарантией'
                }
            }
        })
    }

    protected async create10(): Promise<void> {
        if (!this.elements.c10.current) {
            return;
        }

        const data = await this.getData(10);
        const context = this.elements.c10.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Процент одобрения заявок МСП',
                    data: data.data,

                    backgroundColor: [
                        'rgba(123, 126, 39, 1)',
                        'rgba(239, 122, 98, 1)'
                    ]
                }]
            },
            options: {
                    title: {
                    display: true,
                    text: 'Процент одобрения заявок МСП'
                }
            }
        })
    }

    protected async create11(): Promise<void> {
        if (!this.elements.c11.current) {
            return;
        }

        const data = await this.getData(11);
        const context = this.elements.c11.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Процент одобрения Кредитного Комитета',
                    data: data.data,

                    backgroundColor: [
                        'rgba(13, 226, 79, 1)',
                        'rgba(209, 192, 118, 1)'
                    ]
                }]
            },
            options: {
                    title: {
                    display: true,
                    text: 'Процент одобрения Кредитного Комитета'
                }
            }
        })
    }

    protected async create12(): Promise<void> {
        if (!this.elements.c12.current) {
            return;
        }

        const data = await this.getData(12);
        const context = this.elements.c12.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Средняя сумма выданных средств',
                    data: data.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млрд руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create13(): Promise<void> {
        if (!this.elements.c13.current) {
            return;
        }

        const data = await this.getData(13);
        const context = this.elements.c13.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: ['Химическая промышленность', 'Машиностроение','Сельское хозяйство'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    borderColor: [
                        'rgba(255, 98, 78, 1)',
                        'rgba(255, 98, 78, 1)',
                        'rgba(255, 98, 78, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 98, 78, 0.4)',
                        'rgba(255, 98, 78, 0.4)',
                        'rgba(255, 98, 78, 0.4)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млрд. руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create14(): Promise<void> {
        if (!this.elements.c14.current) {
            return;
        }

        const data = await this.getData(14);
        const context = this.elements.c14.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Сумма нецелевых раходов',
                    data: data.data,
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млн руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create15(): Promise<void> {
        if (!this.elements.c15.current) {
            return;
        }

        const data = await this.getData(15);
        const context = this.elements.c15.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Сумма нецелевых раходов',
                    data: data.data,
                    borderColor: [
                        'rgba(55, 199, 132, 1)'
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0)'
                    ],
                    borderWidth: 2
                }]
            },
             options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млн руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    protected async create16(): Promise<void> {
        if (!this.elements.c16.current) {
            return;
        }

        const data = await this.getData(16);
        const context = this.elements.c16.current.getContext("2d");

        if (!(context && data.labels && data.data)) {
            return;
        }

        new Chart(context, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Сумма нецелевых раходов',
                    data: data.data,
                    backgroundColor: [
                        'rgba(33, 242, 29, 0.2)',
                        'rgba(33, 242, 29, 0.2)',
                        'rgba(33, 242, 29, 0.2)'
                    ],
                    borderColor: [
                        'rgba(33, 242, 29, 1)',
                        'rgba(33, 242, 29, 1)',
                        'rgba(33, 242, 29, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                            display: true,
                        scaleLabel: {
                                display: true,
                            labelString: 'млн руб.'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);
