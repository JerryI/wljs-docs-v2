---
title: Expression
---

`Expression` is a symbol that represents an ordinary Wolfram Language expression in `Read` and related functions.

## Examples

Read an expression from a stream:

```wolfram
stream = StringToStream["1 + 2"];
Read[stream, Expression]
(* 1 + 2 *)
```

Read multiple expressions:

```wolfram
stream = StringToStream["a b c"];
ReadList[stream, Expression]
(* {a, b, c} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Expression.html) for more details.*