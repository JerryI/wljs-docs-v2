# ResponseForm

`ResponseForm[expr,"fmt"]` represents a response record to be given in a specified format when requested during the execution of a function specified by `APIFunction`, `FormFunction`, etc.

`ResponseForm[expr,"fmt",{elem1,elem2,…}]` includes only the response record elements elemi.

## Examples

Return JSON response from an API:

```wolfram
APIFunction[{}, ResponseForm[{"result" -> 42}, "JSON"] &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResponseForm.html) for more details.*