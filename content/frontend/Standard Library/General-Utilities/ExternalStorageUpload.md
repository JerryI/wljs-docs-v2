---
title: ExternalStorageUpload
---

`ExternalStorageUpload[file]` uploads file to an external storage specified by $ExternalStorageBase.

`ExternalStorageUpload[file,dest]` uploads file to a specific destination dest for external storage services that support it.

`ExternalStorageUpload[file->dest]` uploads file to a specific destination dest for external storage services that support it.

`ExternalStorageUpload[{file1,file2,…},dest]` uploads a list of files to a specific destination dest for external storage services that support it.

`ExternalStorageUpload[{file1,file2,…}->dest]` uploads a list of files to a specific destination dest for external storage services that support it.

`ExternalStorageUpload[{file1->dest1,file2->dest2,…}]` uploads a list of files to specific destinations for external storage services that support it.

## Examples

```wolfram
ExternalStorageUpload["myfile.txt"]
(* Uploads to the default external storage *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalStorageUpload.html) for more details.*