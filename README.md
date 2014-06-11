SnapComplete service integration.
=====

## Add data attributes to your input fields.

* data-sc-name: cardholder's name
  ```
    <input name="cc-number" type="text" data-sc-name>
  ```
* data-sc-cc-number: credit card number field
  ```
    <input name="cc-number" type="text" data-sc-cc-number>
  ```
* data-sc-billing-address1: street address first line 
  ```
    <input name="street" type="text" data-sc-address1>
  ```
* data-sc-billing-address2: street address second line
  ```
    <input name="street" type="text" data-sc-address2>
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
* data-sc-shipping-address1: street address first line 
  ```
    <input name="street" type="text" data-sc-address1>
  ```
* data-sc-shipping-address2: street address second line
  ```
    <input name="street" type="text" data-sc-address2>
  ```
* data-sc-shipping-city: city field
  ```
    <input name="city" type="text" data-sc-shipping-city>
  ```
* data-sc-shipping-state: state field
  ```
    <input name="state" type="text" data-sc-shipping-state>
  ```
* data-sc-shipping-zip: zip code field
  ```
    <input name="zipcode" type="text" data-sc-shipping-zip>
  ```

## Insert the following script tag into your page.
```
  <script type='text/javascript' src='//www.snapcomplete.com/js/plugin/embed.js'></script>
```

## Initialize
```
  SC.init({
    showImmediately: true,
    autoFill: true
  }, function(data) {
    ...
  });
```

## Options

### showImmediately: 
* value: [true/false] 
* description: display dialog immediately. If set to false, calling SC.show()
  will display the dialog.

### autoFill:
* value: [true/false]
* description: auto fill form inputs with corresponding attributes

## callback: function(data)

## Example
* [Demo App](http://snapcomplete.github.io/embed)
