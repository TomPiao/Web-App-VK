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
    if (cat_table[0].getElementsByTagName("tr").length > 0) {
      $("#cat_table tbody").remove();
      var tbody = document.createElement("tbody");
      $(tbody).appendTo(cat_table);
    }
    $.ajax({
      type: 'GET',
      url: '/appetizers',
      success:function(data) {
        $.each(data, function(record) {
          var cells = [];
          var row = document.createElement("tr");
          $.each(data[record], function(key, value) {
            cells[record] = document.createElement("td");
            var textnode = document.createTextNode(value);
            cells[record].appendChild(textnode);
            row.appendChild(cells[record]); 
          });
          $(row).appendTo($("#cat_table"));
        });
      }
    });
  });
});
