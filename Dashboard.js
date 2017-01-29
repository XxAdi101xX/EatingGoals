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
});