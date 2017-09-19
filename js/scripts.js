$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
      event.preventDefault();
    $('#transportation_survey').hide();

    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");


    });

      $('#recreational_survey').show();

  });

    $("form#recreational_survey").submit(function(event) {
        event.preventDefault();
      $('#recreational_survey').hide();

    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
      $("#work-responses").show();
      $("#fun-responses").show();
});


});
