var term= $(this).attr("data-term");
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&page=2&sort=oldest&api-key=b5088b114c8246f19bedeeddb89b295a";

 $.ajax({
    url: queryURL,
    method: "GET"
 }).then(function(response) {

 })