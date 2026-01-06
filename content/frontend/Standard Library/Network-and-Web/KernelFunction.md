---
title: KernelFunction
---

`KernelFunction[f]` represents a function to be evaluated in the Wolfram Language kernel, even when called from compiled code.

## Examples

Use a kernel function in compiled code:

```wolfram
cf = Compile[{{x, _Real}}, 
  KernelFunction[Print][x]; x^2
];
cf[3.0]
(* prints 3.0, returns 9.0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KernelFunction.html) for more details.*