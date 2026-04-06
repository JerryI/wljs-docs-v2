---
title: ReadList
---

`ReadList["file"]` reads all expressions in a file and returns a list.

`ReadList["file", type]` reads objects of the specified type.

`ReadList["file", types, n]` reads only the first n objects.

## Examples

Read all expressions:

```wolfram
ReadList["data.txt"]
(* {expr1, expr2, ...} *)
```

Read numbers:

```wolfram
ReadList["numbers.txt", Number]
(* {1, 2, 3, 4, 5} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReadList.html) for more details.