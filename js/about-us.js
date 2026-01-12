$(".open").click(function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
  
    answer.slideToggle(200);
  
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    } else {
      trigger.addClass("faq-o");
    }

    var id = $(this).attr("id");
  
    if (id === "open-phase-one") {
      container.toggleClass("expanded-phase-one");
  } else if (id === "open-phase-two") {
      container.toggleClass("expanded-phase-two");
  } else if (id === "open-phase-three") {
      container.toggleClass("expanded-phase-three");
  } else if (id === "open-phase-four") {
      container.toggleClass("expanded-phase-four");
  }
});