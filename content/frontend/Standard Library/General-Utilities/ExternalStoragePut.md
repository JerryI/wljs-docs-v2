---
title: ExternalStoragePut
---

`ExternalStoragePut[expr]` writes expr to an external storage specified by $ExternalStorageBase.

- `ExternalStoragePut[expr,path]` writes expr to a specific path in an external storage specified by $ExternalStorageBase.
- `ExternalStoragePut[expr,ExternalStorageObject[...]]` writes expr to the service and path represented by an ExternalStorageObject. 

## Examples

```wolfram
(* Store data to external storage *)
ExternalStoragePut[{1, 2, 3}, "mydata/list.mx"]

(* Store to a specific storage object *)
obj = ExternalStorageObject["cloud/expression.mx"];
ExternalStoragePut[<|"a" -> 1, "b" -> 2|>, obj]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalStoragePut.html) for more details.*