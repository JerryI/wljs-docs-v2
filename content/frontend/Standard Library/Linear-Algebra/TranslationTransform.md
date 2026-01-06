---
title: TranslationTransform
---

`TranslationTransform[v]` gives a TransformationFunction that represents translation of points by a vector v.

## Examples

Translate a point:

```wolfram
tf = TranslationTransform[{3, 2}];
tf[{0, 0}]
(* {3, 2} *)
```

Apply to a list of points:

```wolfram
TranslationTransform[{1, 1}] /@ {{0, 0}, {1, 0}, {0, 1}}
(* {{1, 1}, {2, 1}, {1, 2}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TranslationTransform.html) for more details.*