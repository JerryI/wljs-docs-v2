---
title: StringExtract
---

`StringExtract["string", n]` extracts the nth block of characters in string, where blocks of characters are defined as delimited by whitespace.

- `StringExtract["string", {pos1, pos2, ...}]` extracts blocks at several positions in string.
- `StringExtract["string", sep -> pos]` takes blocks to be delimited by separators that match sep.
- `StringExtract["string", pos1, pos2, ...]` extracts blocks at positions posi, delimiting with whitespace for the lowest level, newlines for the next level.
- `StringExtract["string", sep1 -> pos1, sep2 -> pos2, ...]` gives a nested list of blocks, with the sepi used as separators for successive levels.

## Examples

```wolfram
StringExtract["one two three", 2]
```

```wolfram
StringExtract["a,b,c", "," -> 2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringExtract.html) for more details.