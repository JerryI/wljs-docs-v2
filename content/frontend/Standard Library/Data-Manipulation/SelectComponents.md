# SelectComponents

`SelectComponents[{image, lmat}, crit]` selects components of image indicated by the label matrix lmat that satisfy crit, replacing other parts with black.

- `SelectComponents[image, crit]` selects connected components of image.
- `SelectComponents[…, "prop", n]` computes the property "prop" and selects the first n in sorted order.
- `SelectComponents[…, "prop", n, p]` sorts computed properties using the ordering function p.

## Examples

```wolfram
SelectComponents[img, #Area > 100 &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SelectComponents.html) for more details.*