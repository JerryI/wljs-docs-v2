# OptionsPattern

`OptionsPattern[]` is a pattern object that represents a collection of options given as rules, where the values of the options can be accessed using `OptionValue`.

- `OptionsPattern[f]` takes default option values from `Options[f]`.
- `OptionsPattern[{opt1 -> val1, opt2 -> val2, ...}]` uses an explicit list of default option values.

## Examples

```wolfram
f[x_, opts : OptionsPattern[{a -> 1}]] := {x, OptionValue[a]}
f[5, a -> 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OptionsPattern.html) for more details.*