SnapComplete service integration.
=====

## Add data attributes to your input fields.
* data-snapcomplete-cc: credit card number field
  ```
    <input name="cc-number" type="text" data-snapcomplete-cc>
  ```
* data-snapcomplete-address: street name field
  ```
    <input name="street" type="text" data-snapcomplete-address>
  ```
* data-snapcomplete-city: city field
  ```
    <input name="city" type="text" data-snapcomplete-city>
  ```
* data-snapcomplete-state: state field
  ```
    <input name="state" type="text" data-snapcomplete-state>
  ```
* data-snapcomplete-zip: zip code field
  ```
    <input name="zipcode" type="text" data-snapcomplete-zip>
  ```

## Insert the following script tag into your page.
```
  <script type='text/javascript' src='//www.snapcomplete.com/embed.js'></script>
```

## Result
* A SnapComplete icon will be added to credit card number field.
  Clicking on the icon will start the process.
  ![Camera Icon](http://snapcomplete.s3.amazonaws.com/documentup/CC-input.png)
* HTML5 geolocation will be used if the address, city, state or zipcode
  fields are detected. This will request the user for geolocation permission.
* Once the processing is completed, all fields mentioned above will be
  populated.

