SnapComplete service integration.
=====

## Add data attributes

* data-sc-name: cardholder's name
  ```
    <input name="cc-number" type="text" data-sc-name>
  ```
* data-sc-cc-number: credit card number field
  ```
    <input name="cc-number" type="text" data-sc-cc-number>
  ```
* data-sc-cc-exp: credit card expiration (MM/YY)
  ```
    <input name="cc-exp" type="text" data-sc-cc-exp>
  ```
* data-sc-billing-address1: street address first line
  ```
    <input name="street" type="text" data-sc-billing-address1>
  ```
* data-sc-billing-address2: street address second line
  ```
    <input name="street" type="text" data-sc-billing-address2>
  ```
* data-sc-billing-city: city field
  ```
    <input name="city" type="text" data-sc-billing-city>
  ```
* data-sc-billing-state: state field
  ```
    <input name="state" type="text" data-sc-billing-state>
  ```
* data-sc-billing-zip: zip code field
  ```
    <input name="zipcode" type="text" data-sc-billing-zip>
  ```

## Insert script tag
```
  <script src="https://www.snapcomplete.com/js/plugin/embed.js"></script>
```

## Initialize
```
  SC.init({
    showImmediately: true,
    autoFill: true
  }, function(data) {
    // callback
  });
```

## Options

### showImmediately
* value: [true/false]
* description: display dialog immediately. If set to false, calling SC.show()
  will display the dialog.

### autoFill
* value: [true/false]
* description: auto fill form inputs with corresponding attributes

## Demo App
* [Here](http://demo.snapcomplete.com)
