# FunctionSpace

`FunctionSpace` is an option for FindSequenceFunction and related functions that specifies the space of functions to consider for representations.

## Examples

Find a sequence function using rational functions:

```wolfram
FindSequenceFunction[{1, 1/2, 1/3, 1/4}, FunctionSpace -> "Rational"]
```

Use polynomial function space:

```wolfram
FindSequenceFunction[{1, 4, 9, 16}, FunctionSpace -> "Polynomial"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionSpace.html) for more details.*