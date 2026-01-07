---
title: KeypointStrength
---

`KeypointStrength` is an option for `ImageKeypoints` and related functions to specify a minimum strength of detected keypoints.

## Examples

Detect strong keypoints:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageKeypoints[img, KeypointStrength -> 0.1]
```

Lower threshold for more keypoints:

```wolfram
ImageKeypoints[img, KeypointStrength -> 0.01]
```

High threshold for fewer keypoints:

```wolfram
ImageKeypoints[img, KeypointStrength -> 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeypointStrength.html) for more details.*