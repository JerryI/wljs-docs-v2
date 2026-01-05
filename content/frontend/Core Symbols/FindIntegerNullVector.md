# FindIntegerNullVector

`FindIntegerNullVector[{x1,x2,…,xn}]` finds a list of integers ai such that a1 x1+a2 x2+⋯+an xn≈0.

`FindIntegerNullVector[{x1,x2,…,xn},d]` finds a list of integers ai with ‖{a1,…,an}‖≤d such that a1 x1+a2 x2+⋯+an xn≈0.

## Examples

Find an integer relation:

```wolfram
FindIntegerNullVector[{1, Sqrt[2], Sqrt[3]}]
```

Find relation with Pi:

```wolfram
FindIntegerNullVector[{Pi, E, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindIntegerNullVector.html) for more details.*