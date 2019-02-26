// GifTastic javascript starts now
var topics = ["Lamborghini", "Ferrari", "Porsche", "Mercedes Benz", "BMW", "Pagani", "Bugatti", "Mclaren"];

//Function Up
function displayGiphy() {

  var automobile = $(topics).attr("#data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + automobile + "&api_key=wMugU26h5tWAOA89ljDxznaOctDgfETt&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function (response) {

      $(".giphy-view").empty();
      // console.log(queryURL)
      var results = response.data;
      for (var i = 0; i < response.length; i++) {
        var autoDiv = $("<div class='bigTasty'>");
        var rating = response.data[i].rating;
        var propOne = $("<p>").text("Rating: " + rating);
        autoDiv.append(propOne);
        console.log(response.data[i])
        var giphyImg = $("<img>");
          giphyImg.attr("src", results[i].images.fixed_height_small_still.url);
          giphyImg.attr("data-still", results[i].images.fixed_height_small_still.url);
          giphyImg.attr("data-animate", results[i].images.fixed_height_small_still.url);
          giphyImg.attr("data-state", "still");
          giphyImg.addClass("image");
          autoDiv.append(giphyImg);

      }

    })
}
//Function to create buttons
function renderButtons() {
  $(".button-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("auto-btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $(".button-view").append(a);


  }
}
displayGiphy();

//Click event to add a button based on input value
$("#add-giphy").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics.push(lookup);
  renderButtons();

})
$(document).on("click", ".auto-btn", displayGiphy);
renderButtons();