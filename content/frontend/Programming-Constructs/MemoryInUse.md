---
title: MemoryInUse
---

`MemoryInUse[]` gives the number of bytes currently being used to store all data in the current Wolfram Language kernel session.

## Examples

Check current memory usage:

```wolfram
MemoryInUse[]
(* 45678912 *)
```

Monitor memory before and after:

```wolfram
before = MemoryInUse[];
data = Range[10^6];
after = MemoryInUse[];
after - before
(* Bytes used by data *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MemoryInUse.html) for more details.