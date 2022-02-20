$(function(){
  $(".slider> div").click(function(){
    $(".modal").fadeIn();/*서서히나타남*/
  });
  $(".modal .popup .close").click(function(){
    $(".modal").fadeOut();/*서서히사라짐 */
  });
});