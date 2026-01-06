# FillingTransform

`FillingTransform[image]` gives a version of image with all extended minima filled.

- `FillingTransform[image,marker]` fills extended minima in regions where at least one corresponding element of marker is nonzero.
- `FillingTransform[image,h]` fills only extended minima of depth h or less.

## Examples

```wolfram
(* Fill minima in an image *)
FillingTransform[image]

(* Fill only shallow minima *)
FillingTransform[image, 0.2]

(* Use a marker image *)
FillingTransform[image, markerImage]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FillingTransform.html) for more details.*