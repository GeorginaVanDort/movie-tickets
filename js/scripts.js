
$(document).ready(function() {
  $("#radiotime2").change(function(){
    // debugger;
    $("p#prices").text("Please choose: Child $5, Adult $7.5, Senior $3");
    $("p#prices").append('<fieldset class="form-group">' +
                    '<label for="exampleSelect1">Adult(s)</label>' +
                    '<select class="form-control" id="adulttix">' +
                      '<option>0</option>' +
                      '<option>1</option>' +
                      '<option>2</option>' +
                      '<option>3</option>' +
                      '<option>4</option>' +
                      '<option>5</option>' +
                      '</select>' +
                      '</fieldset>' +
                  '<fieldset class="form-group">' +
                    '<label for="exampleSelect2">Child(ren)</label>' +
                    '<select class="form-control" id="childtix">' +
                      '<option>0</option>' +
                      '<option>1</option>' +
                      '<option>2</option>' +
                      '<option>3</option>' +
                      '<option>4</option>' +
                      '<option>5</option>' +
                      '</select>' +
                      '</fieldset>' +
                  '<fieldset class="form-group">' +
                    '<label for="exampleSelect3">Senior(s)</label>' +
                    '<select class="form-control" id="seniortix">' +
                      '<option>0</option>' +
                      '<option>1</option>' +
                      '<option>2</option>' +
                      '<option>3</option>' +
                      '<option>4</option>' +
                      '<option>5</option>' +
                      '</select>' +
                      '</fieldset>'

                    )

        //$("#add").click(function(event) {
        $("select#adulttix").change(function(){


          var adulttix = parseInt($("select#adulttix").val());
          var childtix = parseInt($("select#childtix").val());
          var seniortix = parseInt($("select#seniortix").val());
          var totaltix = (adulttix * 7.5) + (childtix * 5) + (seniortix * 3);
          var totalprice = totaltix.toFixed(2)
          $("#totalPrice").text("$" + totalprice);
        });
        });
    });
