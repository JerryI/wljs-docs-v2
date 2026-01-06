# SamplerModel

`SamplerModel[]` represents the single-input, single-output model of a sampler.

- `SamplerModel[specs]` represents a sampler with specification specs.

## Examples

```wolfram
SamplerModel[]
```

```wolfram
SamplerModel[Quantity[0.1, "Seconds"]]
```

```wolfram
SystemsModelMerge[continuousSystem, SamplerModel[dt]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SamplerModel.html) for more details.*