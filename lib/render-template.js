var jade = require('jade'),
    templatePath = require('./template-path'),
    templateWrapper = require('./template-wrapper');

jade.filters.style = function (str) { return '<style>' + str.replace(/\s/g, "")  + '</style>'; };


var renderTemplate = function(path, templateOptions) {
  var template = jade.renderFile(templatePath(path), templateOptions);
  return templateWrapper(template);
};

module.exports = renderTemplate;
