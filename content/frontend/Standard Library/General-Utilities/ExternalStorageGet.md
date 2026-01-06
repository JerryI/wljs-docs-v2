# ExternalStorageGet

`ExternalStorageGet[ExternalStorageObject[…]]` reads in an expression stored at an external storage specified by the ExternalStorageObject.

`ExternalStorageGet[location]` reads in an expression stored at location in an external storage specified by $ExternalStorageBase.

## Examples

```wolfram
(* Get an expression from external storage *)
ExternalStorageGet["mydata/expression.mx"]

(* Get from an ExternalStorageObject *)
obj = ExternalStorageObject["path/to/data"];
ExternalStorageGet[obj]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalStorageGet.html) for more details.*