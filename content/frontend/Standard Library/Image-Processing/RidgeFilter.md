# RidgeFilter

`RidgeFilter[data]` computes a measure for the presence of a ridge at every position of data.

- `RidgeFilter[data, σ]` uses the specified ridge scale σ.

## Examples

Apply ridge detection to an image:
```wolfram
RidgeFilter[ExampleData[{"TestImage", "Mandrill"}]]
```

Use a specific ridge scale:
```wolfram
RidgeFilter[ExampleData[{"TestImage", "Fingerprint"}], 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RidgeFilter.html) for more details.*