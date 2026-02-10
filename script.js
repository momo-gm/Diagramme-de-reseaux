
anychart.onDocumentReady(function () {
chart.layout().iterationCount(1000);
chart.layout().springLength(120);


    // create data
    var data = {
      nodes: [
        {id: "Autobiographies"},
        {id: "Correspondances"},
        {id: "Périodiques"},
        {id: "Jean-Guy Labrosse"},
        {id: "Raymond Perrault"},
        {id: "Guilda"},
        {id: "Michel Girouard"},
        {id: "Brigitte Martel"},
        {id: "Reina Ha-Milton"},
        {id: "Pierre Bourgault"},
        {id: "Colette Trudel"},
        {id: "Claude Charron"},
        {id: "André Montmorency"},
        {id: "Pascal Lennad"},
        {id: "Nicole Brossard"},
        {id: "Roland Lorrain"},
        {id: "Jocelyn Parady"},
        {id: "Muriel Fortier"},
        {id: "Jeanine Maes"},
        {id: "Samuel Champagne"},
        {id: "Manon Massé"},
        {id: "Benoît Jodoin"}
      ],
      edges: [
        {from: "Autobiographies", to: "Jean-Guy Labrosse"},
        {from: "Autobiographies", to: "Raymond Perreault"},
        {from: "Autobiographies",   to: "Guilda"},
        {from: "Autobiographies",   to: "Michel Girouard"},
        {from: "Autobiographies",    to: "Brigitte Martel"},
        {from: "Autobiographies",    to: "Reina Ha-Milton"},
        {from: "Autobiographies",    to: "Pierre Bourgault"},
        {from: "Autobiographies",   to: "Colette Trudel"},
        {from: "Autobiographies", to: "Claude Charron"},
        {from: "Autobiographies",   to: "André Montmorency"},
        {from: "Autobiographies",   to: "Pascal Lennad"},
        {from: "Autobiographies",    to: "Nicole Brossard"},
        {from: "Autobiographies",    to: "Roland Lorrain"},
        {from: "Autobiographies",    to: "Jocelyn Parady"},
        {from: "Autobiographies",   to: "Muriel Fortier"},
        {from: "Autobiographies",   to: "Jeanine Maes"},
        {from: "Autobiographies",   to: "Samuel Champagne"},
        {from: "Autobiographies",    to: "Manon Massé"},
        {from: "Autobiographies",    to: "Benoît Jodoin"},
        {from: "Correspondances",    to: "Guilda"},
        {from: "Correspondances",   to: "André Montmorency"},
        {from: "Périodiques",   to: "Nicole Brossard"},
      ]
    };

    // create a chart and set the data
    var chart = anychart.graph(data);

    // set the chart title
    chart.title("Network Graph: Basic Sample");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});
