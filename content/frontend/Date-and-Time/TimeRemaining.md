---
title: TimeRemaining
---

`TimeRemaining[]` gives the number of seconds remaining until the earliest enclosing `TimeConstrained` will request the current computation to stop.

## Examples

```wolfram
TimeConstrained[While[True, If[TimeRemaining[] < 0.5, Break[]]]; "done", 2]
```

```wolfram
TimeConstrained[TimeRemaining[], 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeRemaining.html) for more details.