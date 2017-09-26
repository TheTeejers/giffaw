$(document).ready(function(){

  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending',
    type: 'GET /v1/gifs/trending',
    dataType: 'json',
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });


$(".form-inline").submit(function(event) {
  event.preventDefault();
  $(".gif-gallery").html('')
  console.log('hello?')

  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search?',
    type: 'GET /v1/gifs/trending',
    dataType: 'json',
    data: $("form").serialize(),
    success: onSuccess,
    error: onError

  })

});

  function onSuccess(responseData) {
  $.each(responseData.data, function(i){
  // console.log(responseData.data[0].images.fixed_height.url);
  var imgData = responseData.data[i].images.fixed_height.url;
  $(".gif-gallery").append('<img src=' + imgData + '>');
});
}
  function onError(responseData){
  console.log("error");
}

  /* Act on the event */




});
