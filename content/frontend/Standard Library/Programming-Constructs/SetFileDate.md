---
title: SetFileDate
---

`SetFileDate["file"]` sets the modification and access dates for a file to be the current date.

This function updates the timestamp of a file without changing its contents.

## Examples

```wolfram
SetFileDate["myfile.txt"]
```

```wolfram
SetFileDate["/path/to/document.pdf"]
```

```wolfram
FileDate["file.txt"] // Before;
SetFileDate["file.txt"];
FileDate["file.txt"] // After
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetFileDate.html) for more details.*