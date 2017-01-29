$(document).ready(function() {
    $("#addMore").click(function() {
        window.location = "index.html";
    });

     $(".link").click(function() {
        window.location = "profile.html";
    });
    if (localStorage.getItem("recentlyUpdated") == true) {
        alert("hiiiii");
    }
    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Item 1', 'Item 2', 'Item 3'],
        datasets: [
            {
                type: 'bar',
                label: 'Bar Component',
                data: [10, 20, 30],
            },
            {
                type: 'line',
                label: 'Line Component',
                data: [30, 20, 10],
            }
        ]
    },
    options: {
        responsive: false
    }
});
});