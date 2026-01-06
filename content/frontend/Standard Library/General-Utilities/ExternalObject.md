---
title: ExternalObject
---

`ExternalObject[…]` represents an external object bound to an ExternalSessionObject.

## Examples

```wolfram
(* Create an external object from Python *)
session = StartExternalSession["Python"];
obj = ExternalEvaluate[session, "[1, 2, 3]"]

(* Access methods on the external object *)
ExternalFunction[obj, "append"][4]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalObject.html) for more details.*