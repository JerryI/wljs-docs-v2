---
title: FeatureSpacePlot
---

`FeatureSpacePlot[{example1,example2,…}]` plots features extracted from the examplei as a scatter plot.

## Examples

```wolfram
(* Plot images in feature space *)
FeatureSpacePlot[{img1, img2, img3, img4}]

(* Plot with labels *)
FeatureSpacePlot[{img1 -> "cat", img2 -> "dog", img3 -> "cat", img4 -> "dog"}]

(* Plot text data *)
FeatureSpacePlot[{"hello", "world", "hi", "earth"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureSpacePlot.html) for more details.*