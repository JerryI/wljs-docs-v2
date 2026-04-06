---
title: Word
---

`Word` represents a word in `Read`, `Find`, and related functions.

## Examples

Read words from a file:
```wolfram
stream = StringToStream["Hello World Test"];
Read[stream, Word]
```

Read multiple words:
```wolfram
stream = StringToStream["one two three"];
ReadList[stream, Word]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Word.html) for more details.