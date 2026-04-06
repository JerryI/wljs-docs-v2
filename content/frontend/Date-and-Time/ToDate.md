---
title: ToDate
---

`ToDate[time]` converts an absolute time in seconds since the beginning of January 1, 1900 to a date of the form {y, m, d, h, m, s}.

## Examples

```wolfram
ToDate[0]
(* {1900, 1, 1, 0, 0, 0} *)
```

```wolfram
ToDate[AbsoluteTime[]]
(* current date and time *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToDate.html) for more details.