$(function () {
  var from_$input = $("#inputDate").pickadate(),
    from_picker = from_$input.pickadate("picker");

  if (from_picker.get("value")) {
    to_picker.set("min", from_picker.get("select"));
  }

  from_picker.on("set", function (event) {
    if (event.select) {
      to_picker.set("min", from_picker.get("select"));
    } else if ("clear" in event) {
      to_picker.set("min", false);
    }
  });
});
