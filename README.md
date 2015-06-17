# momentum-marknad
A polymer component for integrating Momentum Property Management system. 
Uses following techniques for cross domain communication and event bubbling
* HTML5 postMessage
* CustomEvent

## Installing
```sh
bower install momentum-marknad --save
```


## Usage
```html
<!-- Polyfill Web Components for older browsers -->
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>

<!-- Import element -->
<link rel="import" href="bower_components/momentum-marknad/elements/momentum-marknad.html">

<!-- Use element -->
<momentum-marknad id="myFrame" loginpage="/login.html" url="http://moms40.momentumsoftware.se"></momentum-marknad>
```
