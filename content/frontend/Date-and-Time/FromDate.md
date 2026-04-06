---
title: FromDate
---

`FromDate[date]` converts a date of the form {y,m,d,h,m,s} to an absolute number of seconds since the beginning of January 1, 1900.

## Examples

```wolfram
FromDate[{2000, 1, 1, 0, 0, 0}]
(* 3155673600 *)
```

```wolfram
FromDate[{1900, 1, 1}]
(* 0 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromDate.html) for more details.