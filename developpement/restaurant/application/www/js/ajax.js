$(document).ready(function () {

  $.getJSON('application/controllers/HomeController.class.php', function(data) {
  //  $('#displayCat').html('<table>');
  //  for (let i = 0; i < data['posts'].length; i++) {
  //    $(`<option>`).val(i).html(JSON.parse(data['posts'][i])['titre']).appendTo('select[name="billet"]');
  //  }
  console.log(data);
});

})
