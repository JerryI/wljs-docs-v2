---
title: FeatureDistance
---

`FeatureDistance[example1,example2,extractor]` gives the distance between example1 and example2 in the feature space defined by extractor.

`FeatureDistance[extractor]` represents an operator form of FeatureDistance that can be applied to a pair of examples.

## Examples

```wolfram
(* Distance between two images in feature space *)
FeatureDistance[image1, image2, "Image"]

(* Distance between text *)
FeatureDistance["cat", "dog", "Word"]

(* Create a distance function *)
distFunc = FeatureDistance["Image"];
distFunc[img1, img2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureDistance.html) for more details.