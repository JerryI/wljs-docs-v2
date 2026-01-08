---
title: FacialFeatures
---

`FacialFeatures[image]` returns a minimal summary of facial features for all detected faces in image.

- `FacialFeatures[image,features]` returns the specified facial features.
- `FacialFeatures[video,…]` finds faces in frames of video.

## Examples

```wolfram
(* Get basic facial features *)
FacialFeatures[photo]

(* Get specific features like landmarks *)
FacialFeatures[photo, "Landmarks"]

(* Get all available features *)
FacialFeatures[photo, All]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FacialFeatures.html) for more details.