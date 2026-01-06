# ExternalStorageBase

`ExternalStorageBase` is an option for various external storage functions that specifies which external storage service to use.

## Examples

```wolfram
(* Check the current external storage base *)
$ExternalStorageBase

(* Use a specific storage service *)
ExternalStorageDownload["path/to/file", 
  ExternalStorageBase -> "Dropbox"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalStorageBase.html) for more details.*