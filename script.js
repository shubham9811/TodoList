$(function() {
  var $table, $newItemForm;
  //select  table elements
  $table = $("table");
  //select form with its id
  $newItemForm = $("#newItemForm");
  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    //fetch text
    var text = $("input:text").val();
    //add text
    if (text != "") {
      $table.append(
        '<tr">' +
          '<td style="padding: 50px; ">' +
          text +
          "</td>" +
          '<td><input type="button" value="X" class="delrow" /></td>' +
          "</tr>"
      );
      $("input:text").val("");
    } else {
      alert("To do box cant be empty");
    }

    //remove todo element
    $(".delrow").click(function() {
      $(this)
        .parent()
        .parent()
        .remove(); 
    });
  });
});
