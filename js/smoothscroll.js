/* Smooth Scrolling*/
$("#sec-1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top - 100,
    },
    1000
  );
  return false;
});

$("#sec-2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - 200,
    },
    1000
  );
  return false;
});

$("#sec-3").click(function () {
  $(" html,body").animate(
    {
      scrollTop: $("#service").offset().top - 220,
    },
    1000
  );
  return false;
});

$("#sec-4").click(function () {
  $(this).addClass("active");
  $("html,body ").animate(
    {
      scrollTop: $("#unit").offset().top - 250,
    },
    1000
  );
  return false;
});

$("#about").waypoint(
  function () {
    $(".container ul li").children().removeClass("active");
    $("#sec-2").addClass("active");
  },
  { offset: 101 }
);

$("#service").waypoint(
  function () {
    $(".container ul li").children().removeClass("active");
    $("#sec-3").addClass("active");
  },
  { offset: 101 }
);

$("#unit").waypoint(
  function () {
    $(".container ul li").children().removeClass("active");
    $("#sec-4").addClass("active");
  },
  { offset: 101 }
);

$("#home").waypoint(
  function () {
    $(".container ul li").children().removeClass("active");
    $("#sec-1").addClass("active");
  },
  { offset: 0 }
);
