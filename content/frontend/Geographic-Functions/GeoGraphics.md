---
title: GeoGraphics
---

`GeoGraphics[primitives, options]` represents a two-dimensional geographical image.

<Callout type="warning">
Blocking function. Avoid using it in timers like `SetTimeout`, external event handlers such as `InputButton` or `Button`, or within `AsyncFunction`.
</Callout>

## Examples

```wolfram
GeoGraphics[]
```

```wolfram
GeoGraphics[{Red, GeoDisk[Entity["City", {"Paris", "IleDeFrance", "France"}], Quantity[100, "Kilometers"]]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoGraphics.html) for more details.