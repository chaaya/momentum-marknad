# momentum-marknad
A polymer component for integrating Momentum Property Management system.
Uses following techniques for cross domain communication and event bubbling
* [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
* [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

## Installing
```sh
bower install momentum-marknad --save
```


## Usage
```html
<!-- Polyfill Web Components for older browsers -->
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>

<!-- Import element -->
<link rel="import" href="bower_components/momentum-marknad/components/momentum-marknad.html">

<!-- Use element -->
<momentum-marknad id="myFrame" url="http://moms40.momentumsoftware.se"></momentum-marknad>
```

### Attributes
#### Required
+ url (string)

#### Optional
+ noscroll (boolean, default false)
  - scroll to the top of the page when changing url inside of the iframe
+ hidemenu (boolean, default false)
+ loginpage (string, default no behaviour)
  - the url wich contains your own login implementation using our API. when specified the component redirects to this url when login credentials are required inside of the iframe.

### Events
```javascript
myFrame.addEventListener("login", function(event) {
    //login required inside of iframe.
});

myFrame.addEventListener("page-visit", function(event) {
   //new page loaded inside of the iframe
});

myFrame.addEventListener("client-logged-in", function(event) {
   // client logged in via an alternative method inside of the iframe.
   // the alternativ method doesnt trigger the login event.
});

myFrame.addEventListener("client-registered", function(event) {
  ///a new client has been registered and logged in by the system
});
```

## Test
Test implemented using web-component-tester. First install web-component-tester using this command:
```sh
npm install -g web-component-tester
```
To run the test:
```sh
wct
```
