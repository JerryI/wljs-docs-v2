---
title: FromDateString
---

`FromDateString["string"]` gives a date object corresponding to the date represented by "string".

- `FromDateString["string", {e1, e2, ...}]` gives the date object obtained by extracting elements "ei" from "string".
- `FromDateString["string", fmt]` gives the date object obtained using the date format fmt.

## Examples

Parse a date string:

```wolfram
FromDateString["January 1, 2024"]
```

Parse with a specific format:

```wolfram
FromDateString["2024-01-15", {"Year", "-", "Month", "-", "Day"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromDateString.html) for more details.*