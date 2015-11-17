var jade = require('jade');
jade.filters.style = function (str) { return '<style>' + str.replace(/\s/g, "")  + '</style>'; };

var templatePath = require('./template-path');

var renderTemplate = function(path, templateOptions) {
  return jade.renderFile(templatePath(path), templateOptions);
};

module.exports = renderTemplate;
