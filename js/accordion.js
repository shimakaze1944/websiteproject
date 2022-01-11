function toggleChevron(e) {
  var theAccordion = $("#accordion");
  $(e.target)
    .prev(".panel-heading")
    .find("i.indicator")
    .toggleClass("glyphicon-minus glyphicon-plus");
  //$('#accordion .panel-heading').css('background-color', 'green');
  theAccordion.find(".panel-heading").removeClass("highlight");
  $(e.target).prev(".panel-heading").addClass("highlight");
}
$("#accordion").on("hidden.bs.collapse", toggleChevron);
$("#accordion").on("shown.bs.collapse", toggleChevron);
$("#accordion").on("show.bs.collapse", function () {
  $("#accordion .in").collapse("hide");
});
