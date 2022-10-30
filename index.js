$("button").click(function() {
  $(".notification").removeClass("unread");
  $(".notification-unread").css("visibility", "hidden");
  $(".header-heading p").text("0");
})
