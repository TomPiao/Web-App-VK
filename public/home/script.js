$(document).ready(function(){
  let home_click = $(".home_click")
  let apps_click = $(".apps_click")
  let cat_table = $("#cat_table")

  if (cat_table.is(":visible")) {
     cat_table.hide();
  }

  home_click.click(function() {
    $("#cat_table").hide();
    $("#placeholder").show();
  });

  apps_click.click(function() {
    $("#placeholder").hide();
    $("#cat_table").show();
    $.ajax({
      type: 'GET',
      url: 'https://localhost:3000/appetizers',
      success:function(data) {
        $.each(data[0], function(key, value) {
  //        console.log(key);
  //        console.log(value);
  //        var row = document.createElement("tr");
  //        var cell1 = document.createElement("td");
  //        var cell2 = document.createElement("td");
  //        var cell3 = document.createElement("td");
        });
      }
    });
  });
});
