---
title: ComponentMeasurements
---

`ComponentMeasurements[{image,lmat},"prop"]` computes the property "prop" for components of image indicated by the label matrix lmat.

`ComponentMeasurements[image,"prop"]` computes the property "prop" for connected components of image.

`ComponentMeasurements[…,"prop",crit]` only returns measurements for components that satisfy the criterion crit.

`ComponentMeasurements[…,"prop",crit,format]` formats the result according to the output specification format.

## Examples

```wolfram
ComponentMeasurements[Binarize[img], "Area"]
(* {1 -> 245, 2 -> 132, ...} *)
```

```wolfram
ComponentMeasurements[img, {"Centroid", "BoundingBox"}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComponentMeasurements.html) for more details.