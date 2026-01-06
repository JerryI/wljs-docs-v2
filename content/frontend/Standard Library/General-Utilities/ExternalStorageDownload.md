---
title: ExternalStorageDownload
---

`ExternalStorageDownload[location]` downloads content from the specified location.

- `ExternalStorageDownload[location,dest]` downloads content from the specified location to a local destination file or directory dest.
- `ExternalStorageDownload[location->dest]` downloads content from the specified locations to a local destination file or directory dest.
- `ExternalStorageDownload[{location1,location2,…},dest]` downloads content from the specified locations to local destination dest.
- `ExternalStorageDownload[{location1,location2,…}->dest]` downloads content from the specified locations to local destination dest.
- `ExternalStorageDownload[{location1->dest1,location2->dest2,…}]` downloads content from the specified locations to local destinations.

## Examples

```wolfram
(* Download a file from external storage *)
ExternalStorageDownload["folder/data.csv"]

(* Download to a specific local path *)
ExternalStorageDownload["folder/data.csv", "/tmp/local_data.csv"]

(* Download multiple files *)
ExternalStorageDownload[{"file1.txt", "file2.txt"}, "/tmp/downloads/"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalStorageDownload.html) for more details.*