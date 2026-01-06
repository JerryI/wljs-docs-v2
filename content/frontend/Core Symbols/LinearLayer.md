# LinearLayer

`LinearLayer[n]` represents a trainable, fully connected net layer that computes w.x+b with output vector of size n.

- `LinearLayer[{n1, n2, ...}]` represents a layer that outputs an array of dimensions n1×n2×....
- `LinearLayer[]` leaves the dimensions of the output array to be inferred from context.
- `LinearLayer[n, opts]` includes options for initial weights and other parameters.

## Examples

Create a linear layer with 10 outputs:
```wolfram
LinearLayer[10]
```

Multi-dimensional output:
```wolfram
LinearLayer[{5, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearLayer.html) for more details.*