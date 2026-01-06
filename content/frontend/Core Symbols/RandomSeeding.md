# RandomSeeding

`RandomSeeding` is an option that specifies what seeding of pseudorandom generators should be done inside the operation of a function.

## Examples

```wolfram
Classify[data, Method -> {"NeuralNetwork", RandomSeeding -> 123}]
```

```wolfram
BlockRandom[RandomReal[], RandomSeeding -> 42]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomSeeding.html) for more details.*