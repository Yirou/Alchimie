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
        if (idApplication)
            loadApplicationData(idApplication, startDate, endDate);
        else if (idServer)
            loadServerData(idServer, startDate, endDate);
    });
    $('#select_application_status_visualization').change(function () {
        var idApplication = $(this).val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        if (idApplication)
            loadApplicationData(idApplication, startDate, endDate);
    });
    $('#select_server_status_visualization').change(function () {
        var idServer = $(this).val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        $('#select_application_status_visualization').empty();
        if (idServer) {
            loadServerData(idServer, startDate, endDate);
            loadApplications(idServer);
        }
    });
    var loadApplications = function (idServer) {
        $.ajax({
            url: '/application/ajax-list?server=' + idServer,
            success: function (applications) {
                $('#select_application_status_visualization').append('<option value="">Select an application</option>');
                applications.forEach(function (application) {
                    $('#select_application_status_visualization').append('<option value=' + application.id + '>' + application.f_name + '</option>');
                });
            }
        })
    }

    var loadApplicationData = function (idApplication, startDate, endDate) {
        $.ajax({
            url: '/application/status-data?app=' + idApplication,
            data: {
                startDate: startDate,
                endDate: endDate
            },
            success: function (data) {
                updatePlot(data);
            }
        });
    };

    var loadServerData = function (idServer, startDate, endDate) {
        if (idServer)
            $.ajax({
                url: '/server/status-data?server=' + idServer,
                data: {
                    startDate: startDate,
                    endDate: endDate,
                    offset: serverOffset
                },
                success: function (data) {
                    serverOffset += data.length;
                    updatePlot(data);
                }
            });
    };



    function initChart() {
        if (chart)
            chart.destroy();
        var ctx = $("#interactive");
        var color = Chart.helpers.color;
        var cfg = {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Server name',
                        backgroundColor: 'red',
                        borderColor: 'red',
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
                    duration: 200 * 1.5,
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
                            }
                        }
                    ]
                }
            }
        };
        chart = new Chart(ctx, cfg);
    }

    if ($('#interactive').length) {
        initChart();
    }
    function addDataOnChart(history_status) {
        var labels_hours = [];
        var labels_month = [];
        var labels_year = [];
        var data = [];
        for (var i = 0; i < history_status.length; i++) {

            var createdAt = moment(new Date(history_status[i].createdAt));

            if (labels_hours.indexOf(createdAt.format('HH')) < 0)
                labels_hours.push(createdAt.format('HH'));

            if (labels_month.indexOf(createdAt.format('MMMM')) < 0)
                labels_month.push(createdAt.format('MMMM'));

            if (labels_year.indexOf(createdAt.format('MMMM YYYY')) < 0)
                labels_year.push(createdAt.format('MMMM YYYY'));

            if (!firstLaunch)
                data.shift();
            if (history_status[i].f_is_alive)
                data.push({t: createdAt.valueOf(), y: history_status[i].f_time || 5});
            else
                data.push({t: createdAt.valueOf(), y: -(history_status[i].f_time || 5)});
            console.log({t: createdAt.valueOf(), y: history_status[i].f_time || 5})
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push({t: createdAt.valueOf(), y: history_status[i].f_time || 5});
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

    function update() {
        var idServer = $('#select_server_status_visualization').val();
        var idApplication = $('#select_application_status_visualization').val();

        if (idApplication && idApplication !== '')
            loadApplicationData(idApplication);
        else if (idServer)
            loadServerData(idServer);
    }

    function updatePlot(data) {
        addDataOnChart(data);
        // Since the axes don't change, we don't need to call plot.setupGrid()
        if (realtime === 'on')
            setTimeout(update, updateInterval);
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
        update()
    });


});

