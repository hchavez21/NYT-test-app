var term= $(this).attr("data-term");
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&page=2&sort=oldest&api-key=b5088b114c8246f19bedeeddb89b295a";

<<<<<<< HEAD
  'api-key': "b5088b114c8246f19bedeeddb89b295a",
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
=======
 $.ajax({
    url: queryURL,
    method: "GET"
 }).then(function(response) {

 })
>>>>>>> 210d7d169e0bfb467fa866b510e58dbc01b2dfdb
