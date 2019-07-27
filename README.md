# loadJSON

A function for loading external JSON files with callback methods

## Example

```
loadJSON("./src/script/data.json", function(response) {

  var data = JSON.parse(response);

  console.log(data);

});
```