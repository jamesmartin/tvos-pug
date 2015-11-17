# tvos-jade
Write TVML templates in Jade and wrap them in Javascript functions for use in a TVOS application

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
