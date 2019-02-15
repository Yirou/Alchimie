$(function () {
    function loadData(organization) {
        $.ajax({
            url: '/default/get-organization-data?organization=' + organization,
            success: function (data) {
                if (data) {
                    console.log(data);
                    var config = {
                        dataSource: data,
                        cluster: true,
                        clusterColours: ["#DD79FF", "#00FF30", "#5168FF", "#f83f00", "#ff8d8f"],
                        forceLocked: false,
                        nodeCaption: "title",
                        edgeCaption: "relatedness",
                        nodeCaptionsOnByDefault: true,
                        nodeTypes: {"type": ["philosopher"]},
                        directedEdges: true,
                        nodeStyle: {
                            "philosopher": {
                                "radius": 18
                            }
                        },
                        initialScale: 0.7,
                        initialTranslate: [250, 150]
                    };

                    alchemy = new Alchemy(config);
                    console.log(alchemy)
                }

            }
        });
    }
    $('#from_date,#to_date').on('changeDate', function () {
//        var startDate = $('#from_date').val();
//        var endDate = $('#to_date').val();
//        var idServer = $('#select_server_state_visualization').val();
//        var idApplication = $('#select_application_state_visualization').val();
//        if (idApplication)
//            loadApplicationData(idApplication, startDate, endDate);
//        else if (idServer)
//            loadServerData(idServer, startDate, endDate);
    });
    $('#select_application_state_visualization').change(function () {
        var idApplication = $(this).val();
//        var startDate = $('#from_date').val();
//        var endDate = $('#to_date').val();
        if (idApplication)
            update();
//            loadApplicationData(idApplication, startDate, endDate);
    });
    $('#select_server_state_visualization').change(function () {
        var idServer = $(this).val();
//        var startDate = $('#from_date').val();
//        var endDate = $('#to_date').val();
        $('#select_application_state_visualization').empty();
        if (idServer) {
//            loadServerData(idServer, startDate, endDate);
            loadApplications(idServer);
            update();
        }
    });
    var loadApplications = function (idServer) {
        $.ajax({
            url: '/application/ajax-list?server=' + idServer,
            success: function (applications) {
                $('#select_application_state_visualization').append('<option value="">{@__ key="select.default" /}</option>');
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


    /*
     * Flot Interactive Chart
     * -----------------------
     */
    // We use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 24;

    function formatData(data) {
        console.log(data)
        var result = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].f_is_alive)
                result.push([i, randomFloat(0, 1)])
            else
                result.push([i, randomFloat(-1, 0)])
        }
        console.log(result)
        return result;
//        if (data.length > 0)
//            data = data.slice(1)
//
//        // Do a random walk
//        while (data.length < totalPoints) {
//
//            var prev = data.length > 0 ? data[data.length - 1] : 50,
//                    y = prev + Math.random() * 10 - 5
//
//            if (y < 0) {
//                y = 0
//            } else if (y > 100) {
//                y = 100
//            }
//
//            data.push(y)
//        }
//
//        // Zip the generated y values with the x values
//        var res = []
//        for (var i = 0; i < data.length; ++i) {
//            res.push([i, data[i]])
//        }
//        console.log(res)
//        return res
    }

    var randomFloat = function (min, max) {
       return (Math.random() * (max - min) + min).toFixed(2)
    }
    var interactive_plot = $.plot('#interactive', [formatData([])], {
        grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
        },
        series: {
            shadowSize: 0, // Drawing is faster without shadows
            color: '#3c8dbc'
        },
        lines: {
            fill: true, //Converts the line chart to area chart
            color: '#3c8dbc'
        },
        yaxis: {
            min: 0,
            max: 1,
            show: true
        },
        xaxis: {
            show: true
        }
    })

    var updateInterval = 500 //Fetch data ever x milliseconds
    var realtime = 'on' //If == to on then fetch data every x seconds. else stop fetching
    function update() {
        var idServer = $('#select_server_state_visualization').val();
        var idApplication = $('#select_application_state_visualization').val();
        if (idApplication)
            loadApplicationData(idApplication);
        else if (idServer)
            loadServerData(idServer);
    }

    function updatePlot(data) {
        console.log(data)
        interactive_plot.setData([formatData(data)])

        // Since the axes don't change, we don't need to call plot.setupGrid()
        interactive_plot.draw()
        if (realtime === 'on')
            setTimeout(update, updateInterval)
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === 'on') {
        update()
    }
    //REALTIME TOGGLE
    $('#realtime .btn').click(function () {
        if ($(this).data('toggle') === 'on') {
            realtime = 'on'
        } else {
            realtime = 'off'
        }
        update()
    });


});

