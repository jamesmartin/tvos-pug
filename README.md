# tvos-jade

Write TVML templates in Jade and wrap them in Javascript functions for use in a TVOS application

Entirely motivated by ground-breaking experiments on [jade-tvml](https://github.com/2metres/jade-tvml) by [@2metres](https://github.com/2metres).

One man's hatred of XML *can* make a difference.

## Install

`npm install tvos-jade`

## Use

```javascript
// Assume a directory structure like this:
// .
// this_file.js
// templates/
//  Index.xml.js.jade
//  Other.xml.js.jade


var tvOsJade = require('tvos-jade');

var tvml = tvOsJade.renderTemplate('Index.xml.js', {"some": "locals"})
```
