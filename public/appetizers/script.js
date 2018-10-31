$(document).ready(function(){
  console.log("stuff showed");
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
    //$.ajax({
    //  type: 'GET',
    //  url: 'https://localhost:3000/appetizers',
    //  success:function(data) {
    //    console.log(data);
    //    $.each(result, function(data) {
    //      $.each(data, function(key, value) {
    //        console.log(key);
    //        console.log(value);
    //        var cell = [3:];
     //       var row = document.createElement("tr");
     //       var cell1 = document.createElement("td");
     //       var cell2 = document.createElement("td");
     //       var cell3 = document.createElement("td");
     //       var textnode1 = document.createTextNode(value[0]);
     //       var textnode2 = document.createTextNode(value[1]);
     //       var textnode3 = document.createTextNode(value[2]);
     //       cell1.appendChild(textnode1);
     //       cell2.appendChild(textnode2);
     //       cell3.appendChild(textnode3);
     //       row.appendChild(cell1);
     //       row.appendChild(cell2);
     //       row.appendChild(cell3);
     //       $(row).appendTo($("#cat_table"));
     //     });
     //   });
      //}
    //});
  });
});
