---
title: SingularValueList
---

`SingularValueList[m]` gives a list of the nonzero singular values of a matrix m.

## Examples

Singular values:

```wolfram
SingularValueList[{{1, 2}, {3, 4}}]
(* {5.465, 0.366} *)
```

Get k largest:

```wolfram
SingularValueList[{{1, 2, 3}, {4, 5, 6}}, 1]
(* {9.508} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SingularValueList.html) for more details.*