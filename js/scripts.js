$(document).ready(function() {
  $("#java").click(function() {
    $("#p0").slideDown();
    $("#java").slideUp();
    });

    $("#p0").click(function() {
      $("#p0").slideUp();
      $("#java").slideDown();
      });

  $("#operator").click(function() {
    $("#p1").slideDown();
    $("#operator").slideUp();
    });

    $("#p1").click(function() {
      $("#p1").slideUp();
      $("#operator").slideDown();
      });

  $("#variable").click(function() {
    $("#p2").slideDown();
    $("#variable").slideUp();
    });

    $("#p2").click(function() {
      $("#p2").slideUp();
      $("#variable").slideDown();
      });
    });
