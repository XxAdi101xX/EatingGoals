$(document).ready(function() {
    function test() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=153575d3&appKey=bbc19981ed92ff49f85780068c396b71", false);
    xhr.send();
    alert(xhr.responseText);
    }
});