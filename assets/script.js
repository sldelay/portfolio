
$(document).ready(function () {
  $('.sidenav').sidenav();

  $(document).on("click", ".dropLink", function () {
    $('.sidenav').sidenav();
  })
});