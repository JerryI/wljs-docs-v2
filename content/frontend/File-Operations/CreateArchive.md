---
title: CreateArchive
---

`CreateArchive[source]` creates a compressed archive in the current directory from source.

`CreateArchive[source, path]` creates a compressed archive in the directory or file specified by path.

## Examples

Create a zip archive:

```wolfram
CreateArchive["myFolder"]
(* "myFolder.zip" *)
```

Specify output location:

```wolfram
CreateArchive["data", "~/Archives/data.zip"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateArchive.html) for more details.