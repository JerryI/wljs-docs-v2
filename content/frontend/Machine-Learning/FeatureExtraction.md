---
title: FeatureExtraction
---

`FeatureExtraction[{example1,example2,…}]` generates a FeatureExtractorFunction[…] trained from the examples given.

- `FeatureExtraction[examples,extractor]` uses the specified feature extractor method.
- `FeatureExtraction[examples,{extractor1,extractor2,…}]` applies the extractori in sequence to generate a feature extractor.
- `FeatureExtraction[examples,spec->ext]` uses the extractor methods specified by ext on parts of examples specified by spec. 
- `FeatureExtraction[examples,{spec1->ext1,spec2->ext2,…}]` uses the extractor methods exti on parts of examples specified by the speci.
- `FeatureExtraction[examples,extractor,props]` gives the feature extraction properties specified by props.

## Examples

```wolfram
(* Train a feature extractor on data *)
extractor = FeatureExtraction[{img1, img2, img3}]

(* Apply to new data *)
extractor[newImage]

(* Use PCA with 3 components *)
FeatureExtraction[data, {"StandardizedVector", {"PCA", 3}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureExtraction.html) for more details.