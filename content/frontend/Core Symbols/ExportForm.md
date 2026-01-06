# ExportForm

`ExportForm[expr, "fmt"]` specifies that expr should be exported in the specified format in functions like `CloudDeploy` and in external results from `APIFunction` and `FormFunction`.

`ExportForm[expr, {"fmt", "type"}]` specifies that when expr is exported, it should be tagged as having the specified MIME type.

## Examples

Specify export format:

```wolfram
ExportForm[Graphics[Circle[]], "PNG"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExportForm.html) for more details.*