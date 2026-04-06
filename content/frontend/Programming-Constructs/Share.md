---
title: Share
---

`Share[expr]` changes the way expr is stored internally, to try and minimize the amount of memory used.

- `Share[]` tries to minimize the memory used to store all expressions.

## Examples

```wolfram
data = Table[{1, 2, 3}, 1000];
Share[data]
```

```wolfram
Share[]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Share.html) for more details.