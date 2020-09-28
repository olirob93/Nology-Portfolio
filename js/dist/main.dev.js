"use strict";

var _projects = _interopRequireDefault(require("../data/projects.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

AOS.init();

var createProjectHtml = function createProjectHtml(projectobj) {
  return "\n    <div class=\"card\" data-aos=\"flip-right\">\n      <img class=\"card-img\" src=\"".concat(projectobj.image, "\" alt=\"").concat(projectobj.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(projectobj.name, "</h5>\n        <p class=\"card-text\">").concat(projectobj.cardText, "</p>\n      <div class=\"card-links\">\n        <a href=\"").concat(projectobj.liveSiteUrl, "\" target=\"_blank\"><i class=\"fab fa-chrome\"></i></a>\n        <a href=\"").concat(projectobj.gitUrl, "\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n      </div>\n      </div>\n    </div>");
};

var insertProjects = function insertProjects() {
  var cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';

  _projects["default"].forEach(function (project) {
    var projectHtml = createProjectHtml(project);
    cardContainer.innerHTML += projectHtml;
  });
};

insertProjects();