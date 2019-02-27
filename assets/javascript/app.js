// GifTastic javascript starts now
var topics = ["Lamborghini", "Ferrari", "Porsche", "Mercedes Benz", "BMW", "Pagani", "Bugatti", "Mclaren"];

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

//Function to display giphers
function displayGiphy() {

  var automobile = $(topics).attr("#data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + automobile + "&api_key=wMugU26h5tWAOA89ljDxznaOctDgfETt&limit=3";

  // Ajax call to giphy API
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function (response) {

      // $(".giphy-view").empty();
      // var results = response.data[i];
      // console.log(response.data);
      for (var i = 0; i < response.length; i++) {
        console.log(i);
        // var autoDiv = $("<div>");
        //   var rating = response.rating;
        //   var propOne = $("<p>").text("Rating: " + rating);
        //   autoDiv.append(propOne);
        //   console.log(propOne)
        //   var giphyImg = $("<img>");
        //   giphyImg.attr("src", results[i].images.fixed_height_small_still.url);
        //   giphyImg.attr("data-still", results[i].images.fixed_height_small_still.url);
        //   giphyImg.attr("data-animate", results[i].images.fixed_height_small_still.url);
        //   giphyImg.attr("data-state", "still");
        //   giphyImg.addClass("image");
        //   autoDiv.append(giphyImg);

      }

    })
}
// Click handlers start now
$(document).on("click", ".auto-btn", function (event) {
  event.preventDefault();
  // alert("HELLO");
  displayGiphy();
})

//Click event to add a button based on input value
$("#add-giphy").on("click", function (event) {
  event.preventDefault();
  var lookup = $("#lookup-value").val().trim();
  topics.push(lookup);
  renderButtons();

})

// displayGiphy();
renderButtons();