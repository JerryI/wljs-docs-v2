---
title: ImageKeypoints
---

`ImageKeypoints[image]` finds key features in image and returns their coordinates.

`ImageKeypoints[image, prop]` gives the specified property prop for each keypoint.

`ImageKeypoints[video, ...]` finds keypoints in frames of video.

## Examples

```wolfram
ImageKeypoints[ExampleData[{"TestImage", "Lena"}]]
(* {{x1, y1}, {x2, y2}, ...} *)
```

```wolfram
ImageKeypoints[img, "Scale"]
(* Scale values for each keypoint *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageKeypoints.html) for more details.