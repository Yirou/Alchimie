$(function () {
//    function loadData(organization) {
//        if (organization)
//            $.ajax({
//                url: '/default/get-organization-data?organization=' + organization,
//                success: function (data) {
//                    if (data) {
//                        console.log(data);
//                        var config = {
//                            dataSource: data,
//                            cluster: true,
//                            clusterColours: ["#DD79FF", "#00FF30", "#5168FF", "#f83f00", "#ff8d8f"],
//                            forceLocked: false,
//                            nodeCaption: "title",
//                            edgeCaption: "relatedness",
//                            nodeCaptionsOnByDefault: true,
//                            nodeTypes: {"type": ["philosopher"]},
//                            directedEdges: true,
//                            nodeStyle: {
//                                "philosopher": {
//                                    "radius": 18
//                                }
//                            },
//                            initialScale: 0.7,
//                            initialTranslate: [250, 150]
//                        };
//
//                        alchemy = new Alchemy(config);
//                        console.log(alchemy)
//                    }
//
//                }
//            });
//    }
    $('#from_date,#to_date').on('changeDate', function () {
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        var idServer = $('#select_server_state_visualization').val();
        var idApplication = $('#select_application_state_visualization').val();
        if (idApplication)
            loadApplicationData(idApplication, startDate, endDate);
        else if (idServer)
            loadServerData(idServer, startDate, endDate);
    });
    $('#select_application_state_visualization').change(function () {
        var idApplication = $(this).val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        if (idApplication)
            loadApplicationData(idApplication, startDate, endDate);
    });
    $('#select_server_state_visualization').change(function () {
        var idServer = $(this).val();
        var startDate = $('#from_date').val();
        var endDate = $('#to_date').val();
        $('#select_application_state_visualization').empty();
        if (idServer) {
            loadServerData(idServer, startDate, endDate);
            loadApplications(idServer);
        }
    });
    var loadApplications = function (idServer) {
        $.ajax({
            url: '/application/ajax-list?server=' + idServer,
            success: function (applications) {
                $('#select_application_state_visualization').append('<option value="">Select an application</option>');
                applications.forEach(function (application) {
                    $('#select_application_state_visualization').append('<option value=' + application.id + '>' + application.f_name + '</option>');
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
                    endDate: endDate
                },
                success: function (data) {
                    updatePlot(data);
                }
            });
    };


    var data = [], labels = [], chart;
    var lastServerHistoryID, lastApplicationHistoryID;

    function initChart(data, labels) {
        var ctx = $("#interactive");

        var color = Chart.helpers.color;
        var cfg = {
            type: 'bar',
            responsive: true,
            data: {
                labels: labels,
                datasets: [{
                        label: 'Server name',
                        backgroundColor: 'red',
                        borderColor: 'red',
                        data: data,
                        type: 'line',
                        pointRadius: 0,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2
                    }]
            },
            options: {
                scales: {
                    xAxes: [{
                            type: 'time',
                            distribution: 'series',
                            ticks: {
                                source: 'labels'
                            }
                        }],
                    yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Ping status'
                            }
                        }]
                }
            }
        };
        chart = new Chart(ctx, cfg);
    }
    if ($('#interactive').length) {
        initChart([], []);
//        formatData([]);
    }
    function formatData(history_status) {
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

            if (history_status[i].f_is_alive)
                data.push({t: createdAt.valueOf(), y: randomFloat(0, 50)});
            else
                data.push({t: createdAt.valueOf(), y: randomFloat(-50, 0)});
        }

        if (labels_year.length > 1) {
            labels = labels_year;
            return;
        } else if (labels_month.length > 1) {
            labels = labels_month;
            return;
        } else {
            labels = labels_hours;
        }
        initChart(data, labels);
    }

    var randomFloat = function (min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }


    var updateInterval = 500; //Fetch data ever x milliseconds
    var realtime = 'on'; //If == to on then fetch data every x seconds. else stop fetching

    function update() {
        var idServer = $('#select_server_state_visualization').val();
        var idApplication = $('#select_application_state_visualization').val();
        if (idApplication)
            loadApplicationData(idApplication);
        else if (idServer)
            loadServerData(idServer);
    }

    function updatePlot(data) {
        chart.destroy();
        formatData(data);
        // Since the axes don't change, we don't need to call plot.setupGrid()
        if (realtime === 'on')
            setTimeout(update, updateInterval);
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === 'on') {
        update();
    }
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

