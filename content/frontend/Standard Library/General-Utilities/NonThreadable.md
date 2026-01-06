# NonThreadable

`NonThreadable` is an attribute that can be assigned to a symbol f to indicate that `f` and `f[arg1, arg2, ...]` should not combine with other list arguments in arithmetic and many other functions that work with lists.

## Examples

```wolfram
SetAttributes[foo, NonThreadable]
```

```wolfram
foo + {1, 2, 3}
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NonThreadable.html) for more details.*