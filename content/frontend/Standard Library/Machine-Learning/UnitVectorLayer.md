# UnitVectorLayer

`UnitVectorLayer[n]` represents a net layer that transforms integers between 1 and n into n-dimensional unit vectors.

`UnitVectorLayer[]` leaves the n to be inferred from context.

## Examples

Create a unit vector layer:

```wolfram
UnitVectorLayer[5]
```

Apply to an input:

```wolfram
UnitVectorLayer[5][3]
(* {0., 0., 1., 0., 0.} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitVectorLayer.html) for more details.*