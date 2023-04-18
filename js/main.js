// get logo asterisk to spin - convert this to jquery
var asterisk = document.getElementById("asterisk");
(function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("scroll", "optimizedScroll");
})();
window.addEventListener("optimizedScroll", function () {
  asterisk.style.transform = "rotate(-" + window.pageYOffset + "deg)";
});

$(document).ready(function () {
  function outputProjects(projects) {
    projects.forEach(function (i) {
      var col = $("<div>").addClass("col col-12 col-sm-6 col-lg-4");
      var a = $("<a>").attr("target", "_blank").attr("href", i.url);

      var card = $("<div>").addClass("project-card");
      card.attr("style", 'background-image: url("' + i.covers.original + '");');

      var cover = $("<div>").addClass("cover d-flex").attr("data-aos", "fade");
      var info = $("<div>").addClass("info align-self-end");

      var fields = $("<p>")
        .addClass("fields")
        .attr("data-aos", "fade-down")
        .attr("data-aos-duration", "300");
      var title = $("<p>")
        .addClass("title")
        .attr("data-aos", "fade-down")
        .attr("data-aos-duration", "250");
      var button = $("<div>")
        .addClass("btn-outline")
        .attr("data-aos", "fade")
        .attr("data-aos-duration", "250");
      button.attr("style", "padding: 10px 24px;");

      info.append(fields, title, button);
      cover.append(info);

      card.append(cover);

      a.append(card);
      col.append(a);
      $("section.projects .row").append(col);

      card.on("mouseover", function (e) {
        e.preventDefault();
        cover
          .attr(
            "style",
            "background: linear-gradient(0deg, " +
              "#186577 32%" +
              ", transparent);"
          )
          .attr("data-aos", "");
        fields.text("// " + i.fields.join(", ")).attr("data-aos", "");
        title.text(i.name).attr("data-aos", "");
        button
          .addClass("btn-outline")
          .html("View Project")
          .attr("data-aos", "");
        button.attr("style", "padding: 10px 24px;");
      });
      card.on("mouseout", function () {
        cover
          .attr("style", "background: transparent;")
          .attr("data-aos", "fade");
        fields
          .text("")
          .attr("data-aos", "fade-down")
          .attr("data-aos-duration", "300");
        title
          .text("")
          .attr("data-aos", "fade-down")
          .attr("data-aos-duration", "250");
        button
          .removeClass("btn-outline")
          .html("")
          .attr("data-aos", "fade")
          .attr("data-aos-duration", "250");
        button.attr("style", "padding: 10px 24px;");
      });
    });
  }

  var projects = [];

  var userID = "pranjalshikhar";
  var apiKey = "v8SNqxsyD70hgx1EXIQPjmjiQVe9K7HQ";
  var queryURL =
    "https://api.behance.net/v2/users/" +
    userID +
    "/projects?api_key=" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp",
  })
    .then(function (response) {
      // limit number of projects being pulled
      for (var i = 0; i < 18; i++) {
        projects.push(response.projects[i]);
      }

      outputProjects(projects);
    })
    .catch(function (error) {
      var message404 = $("<div>").addClass("container m-auto");
      $(".projects .row").append(message404);
      // message404.html('<div class="row"><div class="col"><h3>Oops, Behance API isn\'t loading.</h3><p class="lead">Have no fear! You can still view my Portfolio <a href="https://www.behance.net/pranjalshikhar" target="_blank">here</a>.</p></div></div>');
      // $('.projects').addClass('error');
    });

  $(".menu-toggle").on("click", function (event) {
    event.preventDefault();

    if ($(this).hasClass("closed")) {
      $(this).removeClass("closed");
      $(this).addClass("open");
      $("header")
        .attr("style", "background: rgba(255,255,255,0.9); z-index: 1;")
        .attr("data-aos", "")
        .attr("data-aos-duration", "50");
      $("ul.nav")
        .attr("style", "opacity: 1;")
        .attr("data-aos", "")
        .attr("data-aos-duration", "1000");
    } else {
      $(this).removeClass("open");
      $(this).addClass("closed");
      $("header")
        .attr("style", "background: rgba(255,255,255,0); z-index: -1;")
        .attr("data-aos", "fade");
      $("ul.nav")
        .attr("style", "opacity: 0;")
        .attr("data-aos", "fade")
        .attr("data-aos-duration", "50");
    }
  });

  AOS.init();
});
