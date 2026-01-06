# LocalizeVariables

`LocalizeVariables` is an option to `Manipulate` that determines whether the values of variables associated with controls should be localized.

## Examples

Localized variables (default):

```wolfram
Manipulate[x^2, {x, 1, 10}, LocalizeVariables -> True]
```

Global variables:

```wolfram
Manipulate[x^2, {x, 1, 10}, LocalizeVariables -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalizeVariables.html) for more details.*