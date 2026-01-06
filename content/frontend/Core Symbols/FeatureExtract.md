# FeatureExtract

`FeatureExtract[{example1,example2,…}]` extracts features for each of the examplei using a feature extractor trained on all the examplei.

- `FeatureExtract[examples,extractor]` extracts features using the specified feature extractor method.
- `FeatureExtract[examples,{extractor1,extractor2,…}]` extracts features by applying the extractori in sequence.
- `FeatureExtract[examples,spec->ext]` uses the extractor methods specified by ext on parts of examples specified by spec. 
- `FeatureExtract[examples,{spec1->ext1,spec2->ext2,…}]` uses the extractor methods exti on parts of examples specified by the speci.

## Examples

```wolfram
(* Extract features from images *)
FeatureExtract[{img1, img2, img3}]

(* Use PCA for dimensionality reduction *)
FeatureExtract[data, {"StandardizedVector", "PCA"}]

(* Extract features from text *)
FeatureExtract[{"hello", "world", "test"}, "TFIDF"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureExtract.html) for more details.*