$(function () {
    function loadData(organization) {
        $.ajax({
            url: '/default/get-organization-data?organization='+organization,
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
    $('#select_organization_visualization').change(function () {
        loadData($(this).val());
    });
    
});

