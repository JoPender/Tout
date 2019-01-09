/*$(document).ready(function () {
  $('#executer').on('click',function(){
    $.get('src/static_html.php')
    .done(staticData)
  });
})*/
$(document).ready(function () {
  $('#executer').on('click',function(){
    $.get('src/movies.php')
    .done(staticData)
  });
})
