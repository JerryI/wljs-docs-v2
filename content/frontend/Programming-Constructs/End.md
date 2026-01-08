---
title: End
---

`End[]` returns the present context, and reverts to the previous one.

## Examples

End a private context:

```wolfram
Begin["MyPackage`Private`"];
(* define private functions *)
End[]
(* "MyPackage`Private`" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/End.html) for more details.