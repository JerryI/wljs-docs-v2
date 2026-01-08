---
title: Directory
---

`Directory[]` gives the current working directory.

## Examples

Get current directory:

```wolfram
Directory[]
(* "/Users/username/project" *)
```

Use with FileNames:

```wolfram
FileNames["*.txt", {Directory[]}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Directory.html) for more details.