# tvos-pug

Write TVML templates in Pug (formerly know as Jade) and wrap them in Javascript functions for use in a TVOS application

Entirely motivated by ground-breaking experiments on TVML by [@2metres](https://github.com/2metres).

One man's hatred of XML *can* make a difference.

## Install

`npm install tvos-pug`

## Use

```javascript
// Assume a directory structure like this:
// .
// this_file.js
// templates/
//  ⌞ Index.xml.js.pug
//  ⌞ Other.xml.js.pug


var tvOSPug = require('tvos-pug');

var tvml = tvOSPug.renderTemplate('Index.xml.js', {"some": "locals"})
```
