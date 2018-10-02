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
  });
});
