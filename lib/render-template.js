var pug = require('pug'),
    templatePath = require('./template-path'),
    templateWrapper = require('./template-wrapper');

pug.filters.style = function (str) { return '<style>' + str.replace(/\s/g, "")  + '</style>'; };


var renderTemplate = function(path, templateOptions) {
  var template = pug.renderFile(templatePath(path), templateOptions);
  return templateWrapper(template);
};

module.exports = renderTemplate;
