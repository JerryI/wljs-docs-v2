---
title: InsertLinebreaks
---

`InsertLinebreaks["string"]` inserts newline characters into string to make a string in which no line is longer than 78 characters.

- `InsertLinebreaks["string", n]` inserts newline characters to make no line longer than n characters.

## Examples

Break a long string at 78 characters:

```wolfram
InsertLinebreaks["This is a very long string that will be broken into multiple lines."]
```

Specify a custom line length:

```wolfram
InsertLinebreaks["Short lines are easier to read.", 20]
```

Format code for display:

```wolfram
InsertLinebreaks[StringRepeat["word ", 30], 40]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InsertLinebreaks.html) for more details.