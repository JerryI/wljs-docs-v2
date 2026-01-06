# ExternalStorageObject

`ExternalStorageObject[location]` represents a file stored in an external location.

- `ExternalStorageObject[assoc]` represents a file stored in an external service specified by the components of the association assoc.
- `ExternalStorageObject[location,assoc]` represents a file stored in an external location with additional elements given by assoc.

## Examples

```wolfram
(* Create an external storage object reference *)
obj = ExternalStorageObject["cloud/mydata.csv"]

(* Create with explicit service specification *)
obj = ExternalStorageObject[<|"Service" -> "Dropbox", "Path" -> "data.csv"|>]

(* Use with ExternalStorageGet *)
data = ExternalStorageGet[obj]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalStorageObject.html) for more details.*