---
title: FindLinearRecurrence
---

`FindLinearRecurrence[list]` finds if possible the minimal linear recurrence that generates list.

`FindLinearRecurrence[list,d]` finds if possible the linear recurrence of maximum order d that generates list.

## Examples

```wolfram
(* Find recurrence for Fibonacci sequence *)
FindLinearRecurrence[{1, 1, 2, 3, 5, 8, 13, 21}]
(* {1, 1} *)

(* Find recurrence with maximum order *)
FindLinearRecurrence[{1, 2, 4, 8, 16, 32}, 1]

(* Verify the recurrence *)
LinearRecurrence[{1, 1}, {1, 1}, 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindLinearRecurrence.html) for more details.*