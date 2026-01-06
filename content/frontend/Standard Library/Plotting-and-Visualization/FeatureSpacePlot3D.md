---
title: FeatureSpacePlot3D
---

`FeatureSpacePlot3D[{example1,example2,…}]` plots features extracted from the examplei as a scatter 3D plot.

## Examples

```wolfram
(* Plot images in 3D feature space *)
FeatureSpacePlot3D[{img1, img2, img3, img4, img5}]

(* Plot with labels *)
FeatureSpacePlot3D[{img1 -> "A", img2 -> "B", img3 -> "A", img4 -> "B", img5 -> "A"}]

(* Plot text in 3D feature space *)
FeatureSpacePlot3D[WordList["CommonWords", 50]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureSpacePlot3D.html) for more details.*