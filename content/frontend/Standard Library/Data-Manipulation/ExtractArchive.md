---
title: ExtractArchive
---

`ExtractArchive[source]` expands an archive file, saving its content into the current directory.

- `ExtractArchive[source,dir]` saves the content of an archive file into directory dir.
- `ExtractArchive[source,dir,pattern]` extracts only files whose names match pattern.

## Examples

```wolfram
(* Extract a ZIP archive to current directory *)
ExtractArchive["data.zip"]

(* Extract to specific directory *)
ExtractArchive["archive.tar.gz", "/tmp/extracted"]

(* Extract only certain files *)
ExtractArchive["package.zip", "/tmp", "*.txt"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtractArchive.html) for more details.*