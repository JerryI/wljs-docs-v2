---
title: Restricted
---

`Restricted[form,cond,…]` represents a form for `Interpreter` and related functions restricted according to the conditions cond.

## Examples

Create a restricted integer interpreter:

```wolfram
Interpreter[Restricted["Integer", {1, 100}]]["50"]
(* 50 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Restricted.html) for more details.*