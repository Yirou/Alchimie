$(function () {
    var serverOffset = 0;
    var applicationOffset = 0;
    var chartData = [], chartLabels = [], chart;
    var firstLaunch = true;
    var updateInterval = 500; //Fetch data ever x milliseconds
    var realtime = 'on'; //If == to on then fetch data every x seconds. else stop fetching

    $('#from_date,#to_date').on('changeDate', function () {
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        var idServer = $('#select_server_status_visualization').val();
        var idApplication = $('#select_application_status_visualization').val();
        resetData();
        if (idApplication && idApplication !== '')
            loadApplicationData(idApplication, startDate, endDate);
        else if (idServer)
            loadServerData(idServer, startDate, endDate);
    });
    $('#select_application_status_visualization').change(function () {
        var idApplication = $(this).val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        var idServer = $('#select_server_status_visualization').val();
        resetData();
        if (idApplication && idApplication !== '') {
            loadApplicationData(idApplication, startDate, endDate);
        } else if (idServer) {
            loadServerData(idServer, startDate, endDate);
        }
    });
    $('#select_server_status_visualization').change(function () {
        var idServer = $(this).val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        $('#select_application_status_visualization').empty();
        resetData();
        if (idServer) {
            loadApplications(idServer);
            loadServerData(idServer, startDate, endDate);
        }
    });

    function resetData() {
        firstLaunch = true;
        applicationOffset = 0;
        serverOffset = 0;
        chartData = [];
        chartLabels = [];
        if ($('#interactive').length) {
            initChart();
        }
    }
    var loadApplications = function (idServer) {
        $.ajax({
            url: '/application/ajax-list?server=' + idServer,
            success: function (applications) {
                $('#select_application_status_visualization').append('<option value="">Select an application</option>');
                applications.forEach(function (application) {
                    $('#select_application_status_visualization').append('<option value=' + application.id + '>' + application.f_name + '</option>');
                });
            }
        });
    };

    var loadApplicationData = function (idApplication, startDate, endDate) {
        $.ajax({
            url: '/application/status-data?app=' + idApplication,
            data: {
                startDate: startDate,
                endDate: endDate,
                offset: applicationOffset
            },
            success: function (data) {
                applicationOffset += data.rows.length;
                if (endDate) {
                    var today = moment();
                    var _endDate = moment(endDate, 'DD/MM/YYYY');
                    if (today.diff(_endDate.startOf('day'), 'days') === 0) {
                        /*if today enable realtime*/
                        realtime = 'on';
                    } else {
                        realtime = 'off';
                        console.log("disable realtime");
                    }
                }
                updatePlot(data);
            }
        });
    };

    var loadServerData = function (idServer, startDate, endDate, direction) {
        if (idServer)
            $.ajax({
                url: '/server/status-data?server=' + idServer,
                data: {
                    startDate: startDate,
                    endDate: endDate,
                    offset: serverOffset
                },
                success: function (data) {
                    serverOffset += data.rows.length;
                    if (endDate) {
                        var today = moment();
                        var _endDate = moment(endDate, 'DD/MM/YYYY');
                        if (today.diff(_endDate.startOf('day'), 'days') === 0) {
                            /*if it's today enable realtim*/
                            realtime = 'on';
                        } else {
                            realtime = 'off';
                            console.log("disable realtime");
                        }
                    }
                    updatePlot(data, direction);
                }
            });
    };

    function updatePlot(data, direction) {
        addDataOnChart(data.rows, direction);
        // Since the axes don't change, we don't need to call plot.setupGrid()

        if (realtime === 'on')
            setTimeout(update, updateInterval);
    }

    function update() {
        var idServer = $('#select_server_status_visualization').val();
        var idApplication = $('#select_application_status_visualization').val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();

        if (idApplication && idApplication !== '') {
            loadApplicationData(idApplication, startDate, endDate);
        } else if (idServer) {
            loadServerData(idServer, startDate, endDate);
        }
    }

    $('#chart-prev-data').click(function () {
        var idServer = $('#select_server_status_visualization').val();
        var idApplication = $('#select_application_status_visualization').val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();

        if (idApplication && idApplication !== '') {
            applicationOffset -= 100;
            if (applicationOffset < 0)
                applicationOffset = 0;
            loadApplicationData(idApplication, startDate, endDate, 'previous');
        } else {
            serverOffset -= 100;
            if (serverOffset < 0)
                serverOffset = 0;
            loadServerData(idServer, startDate, endDate, 'previous');
        }
    });
    $('#chart-next-data').click(function () {
        var idServer = $('#select_server_status_visualization').val();
        var idApplication = $('#select_application_status_visualization').val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();

        if (idApplication && idApplication !== '') {
            applicationOffset += 100;
            loadApplicationData(idApplication, startDate, endDate, 'next');
        } else {
            serverOffset += 100;
            loadServerData(idServer, startDate, endDate, 'next');
        }
    });

    function initChart() {
        if (chart) {
            chart.clear();
            chart.destroy();
        }
        var ctx = $("#interactive");
        var color = Chart.helpers.color;
        var cfg = {
            type: 'line',
            scaleOverride: true,
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Server name',
                        backgroundColor: 'green',
                        borderColor: 'green',
                        data: chartData,
                        type: 'line',
                        pointRadius: 0,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                animation: {
//                    duration: 200 * 1.5,
                    easing: 'linear'
                },
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            distribution: 'series',
                            display: true,
                            ticks: {
                                source: 'labels'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: 'Ping status'
                            },
                            ticks: {
                                min: -0.2
                            }
                        }
                    ]
                }
            }
        };
        chart = new Chart(ctx, cfg);
    }


    function addDataOnChart(history_status, direction) {
        var labels_hours = [];
        var labels_month = [];
        var labels_year = [];
        for (var i = 0; i < history_status.length; i++) {
            var createdAt = moment(new Date(history_status[i].createdAt));

            if (labels_hours.indexOf(createdAt.format('HH')) < 0)
                labels_hours.push(createdAt.format('HH'));

            if (labels_month.indexOf(createdAt.format('MMMM')) < 0)
                labels_month.push(createdAt.format('MMMM'));

            if (labels_year.indexOf(createdAt.format('MMMM YYYY')) < 0)
                labels_year.push(createdAt.format('MMMM YYYY'));


            chart.data.datasets.forEach((dataset) => {
                if (!firstLaunch) {
                    chart.data.labels.shift();
                    chart.data.datasets.forEach((dataset) => {
                        dataset.data.shift();
                    });
                }
                chart.data.labels.push(createdAt.valueOf());
                if (history_status[i].f_is_alive)
                    dataset.data.push({t: createdAt.valueOf(), y: history_status[i].f_time || 1});
                else {
                    dataset.data.push({t: createdAt.valueOf(), y: randomFloat(-0.1, 0)});
                }
            });
            chart.update();
        }

        if (labels_year.length > 1) {
            chartLabels = labels_year;
            return;
        } else if (labels_month.length > 1) {
            chartLabels = labels_month;
            return;
        } else {
            chartLabels = labels_hours;
        }
        firstLaunch = false;
    }

    var randomFloat = function (min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    //INITIALIZE REALTIME DATA FETCHING
//    if (realtime === 'on') {
//        update();
//    }
    //REALTIME TOGGLE
    $('#realtime .btn').click(function () {
        if ($(this).data('toggle') === 'on') {
            realtime = 'on';
        } else {
            realtime = 'off';
        }
        update();
    });


});

