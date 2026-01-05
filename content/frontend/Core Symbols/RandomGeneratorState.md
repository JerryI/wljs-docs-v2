# RandomGeneratorState

`RandomGeneratorState[...]` gives a representation of the internal state of a pseudorandom generator.

## Examples

Get the current random generator state:

```wolfram
state = $RandomGeneratorState
```

Restore a previous state:

```wolfram
SeedRandom[state]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomGeneratorState.html) for more details.*