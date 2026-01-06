---
title: Out
---

`%n` or `Out[n]` is a global object that is assigned to be the value produced on the nth output line.

`%` gives the last result generated. `%%` gives the result before last.

## Examples

Reference previous output:

```wolfram
1 + 2
(* 3 *)

% * 2
(* 6 *)
```

Specific output line:

```wolfram
Out[1]
(* value from first output line *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Out.html) for more details.*