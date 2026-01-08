---
title: Block
---

`Block[{x, y, ...}, expr]` specifies that expr is to be evaluated with local values for the symbols x, y, ....

`Block[{x = x0, ...}, expr]` defines initial local values for x, ....

## Example

Temporarily change a global variable:

```wolfram
x = 10;
Block[{x = 5}, x^2]
(* 25 *)
x
(* 10 - unchanged outside Block *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Block.html) for more details.