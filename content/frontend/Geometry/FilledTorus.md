---
title: FilledTorus
---

`FilledTorus[{x,y,z},{rinner,router}]` represents a filled torus centered at {x,y,z} with inner radius rinner and outer radius router.

## Examples

```wolfram
(* Create a filled torus at origin *)
Graphics3D[FilledTorus[{0, 0, 0}, {0.3, 1}]]

(* Create a torus at a specific location *)
Graphics3D[{Red, FilledTorus[{1, 2, 0}, {0.2, 0.8}]}]

(* Multiple tori *)
Graphics3D[{
  Blue, FilledTorus[{0, 0, 0}, {0.5, 1.5}],
  Orange, FilledTorus[{3, 0, 0}, {0.3, 1}]
}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FilledTorus.html) for more details.