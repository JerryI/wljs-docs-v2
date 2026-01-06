# RandomPoint

`RandomPoint[reg]` gives a pseudorandom point uniformly distributed in the region reg.

- `RandomPoint[reg, n]` gives a list of n pseudorandom points uniformly distributed in the region reg.
- `RandomPoint[reg, {n1, n2, ...}]` gives an n1 × n2 × ... array of pseudorandom points.
- `RandomPoint[reg, ..., {{xmin, xmax}, ...}]` restricts to the bounds [xmin, xmax] × ....

## Examples

Random point in disk:

```wolfram
RandomPoint[Disk[]]
```

Multiple points:

```wolfram
RandomPoint[Disk[], 10]
```

In 3D region:

```wolfram
RandomPoint[Ball[], 100]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomPoint.html) for more details.*