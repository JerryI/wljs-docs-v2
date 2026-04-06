---
title: EndOfFile
---

`EndOfFile` is a symbol returned by `Read` when it reaches the end of a file.

## Examples

Read until end of file:

```wolfram
While[(line = Read[stream, String]) =!= EndOfFile, 
  Print[line]]
```

Check for end of file:

```wolfram
Read[stream] === EndOfFile
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EndOfFile.html) for more details.