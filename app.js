$(document).ready(function() {
    hi();
    getCalories("celery");
});

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
    //alert(data);
}

//alert('hi');