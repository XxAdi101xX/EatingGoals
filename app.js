/*$(document).ready(function() {
    hi();
    getCalories("celery");
});
*/
function hi() {
    alert ('hello yall');
}

//new
function getCalories(foodItem) {
    var rawData = new XMLHttpRequest();
    rawData.open("GET", "https://api.nutritionix.com/v1_1/search/" + foodItem + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=153575d3&appKey=bbc19981ed92ff49f85780068c396b71", false);
    rawData.send();
    //alert(data.responseText);
    var data = JSON.parse(rawData.responseText);
    alert(data);
}
//----------------------------------------------
function getSearchResults(item) {
	var resultItems;
	$(".results").html("");

	$.ajax({
		type: 'GET',
		async: false,
		url: 'https://api.nutritionix.com/v1_1/search/'+item+'?fields=item_name' +
		'%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=91d21742&appKey=6aac931ef97304cd15f6de495dd94d9a',
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

/*
function getData() {
    $.ajax({
        type: "GET",
        url: "https://api.nutritionix.com/v1_1/search/",
        data: {
            "appId":"YOUR_APP_ID",
            "appKey":"YOU_APP_KEY",  
            "fields":["item_name","brand_name","upc"],
            "sort":{
                "field":"_score",
                "order":"desc"
            },
            "filters":{
                "item_type":2
            }
        },
        success: function(results) {
            console.log(results.hits);
        }
    });
}
*/
//alert('hi');