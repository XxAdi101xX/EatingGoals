$(document).ready(function() {
    localStorage.setItem("age", 19);
    localStorage.setItem("profilePicture", "http://uncyclopedia.wikia.com/wiki/File:Cute-puppy.jpg");
    localStorage.setItem("weight", 6.2);
    localStorage.setItem("gender", "Male");
    localStorage.setItem("medical_condition", "Allergic to peanuts");
    localStorage.setItem("email", "cutepuppy@gmail.com");


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


    if (localStorage.getItem("userName") !== null) {
        var userName = document.getElementById('userName').value;
        localStorage.setItem("userName", userName);
        localStorage.setItem("pastCalories", []);
    } else {
        // set the person's name to be on the landing page
    }
    $("#goTo").click(function() {
        var path = "profile.html"
        window.location = path;
    });
    //localStorage.setItem("lastname", "Smith");
    // Retrieve
    alert(localStorage.getItem("lastname"));
});

function getSearchResults(item) {
	var resultItems;
	$(".results").html("");

	$.ajax({
		type: "POST",
		async: false,
        url: "https://api.nutritionix.com/v1_1/search/",
        data: {
            "appId": "78868119",
            "appKey": "2943f3b8b40aa0712387eac891c79677",
            "fields": [
                "item_name",
                "brand_name",
                "nf_calories",
                "nf_total_fat",
                "nf_saturated_fat",
                "nf_cholesterol",
                "nf_sodium",
                "nf_total_carbohydrate",
                "nf_sugars",
                "nf_protein",
                "nf_serving_size_qty",
                "nf_serving_size_unit"
            ],
            "offset": 0,
            "limit": 20,
            "sort": {
                "field": "nf_calories",
                "order": "desc"
            },
            "min_score": 0.5,
            "query": item,
            "filters": {
                "not": {
                    "item_type": 2
                }
            }
        },
        success: function(data) {
			resultItems = data.hits;
		}	
	});

	resultItems.map(function(i) {
		var item = i.fields
		console.log(item)
		$('.results').append(
			'<div class="itemBar">'+
				'<h2>' + item.item_name + '<h2>' +
				'<h3>Calories: ' + item.nf_calories + '<h3>' +
				'<h3>Serving Size: ' + item.nf_serving_size_qty + ' ' + item.nf_serving_size_unit +'<h3>' +
				'<h3>Total Fat: ' + item.nf_total_fat + '<h3>' +
			'</div>'
		 );
	});
}

function searchItem() {
	var formVal = document.getElementById('input').value;
	document.getElementById('searchForm').reset();
	getSearchResults(formVal);
}

$("#searchForm").submit(function(e) {
    e.preventDefault();
    searchItem();
});
