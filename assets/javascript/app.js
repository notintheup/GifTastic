// GifTastic javascript starts now
var topics = ["Lamborghini", "Ferrari", "Porsche", "Mercedes Benz", "BMW", "Pagani", "Bugatti", "Mclaren"];

//Function to create buttons
function renderButtons() {
  $(".button-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("auto-btn");
    a.attr("dumb-name", topics[i]);
    a.text(topics[i]);
    $(".button-view").append(a);
    $("#lookup-value").empty();
  }
}

//Function to display giphers
function displayGiphy() {

  var automobile = $(this).attr("dumb-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + automobile + "&api_key=wMugU26h5tWAOA89ljDxznaOctDgfETt&limit=8";
  console.log(queryURL)

  // Ajax call to giphy API
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function (response) {
      // $("#giphy-view").empty();

      for (var i = 0; i < response.data.length; i++) {
        // console.log(response.data[i])

        var autoDiv = $("<p>");
        var giphyURL = response.data[i].images.fixed_height_small_still.url;
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        newImg.attr("data-still", response.data[i].images.fixed_height_small_still.url);
        newImg.attr("data-animate", response.data[i].images.fixed_height_small.url);
        newImg.attr("data-state", "still");
        newImg.addClass("image");
        autoDiv.append(newImg);
        $("#giphy-view").append(newImg);
      }
      // var autoDiv = $("<divCar>");
      // var ratings = $("<p>").text("ratings: " + results[i].rating);
      // autoDiv.append("#giphy-view");

    })
}
// Click handlers start now
$(document).on("click", ".auto-btn", displayGiphy);

//Click event to add a button based on input value
$("#add-giphy").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics.push(lookup);
  renderButtons();

})

// displayGiphy();
renderButtons();