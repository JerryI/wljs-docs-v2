# ArgumentsOptions

`ArgumentsOptions[f[args], n]` tries to separate args into a list of n positional arguments followed by a list of valid options for f.

`ArgumentsOptions[f[args], {min, max}]` requires the number of positional arguments to be between min and max.

## Examples

Parse arguments and options:

```wolfram
f[a, b, Method -> "Fast"] // ArgumentsOptions[#, 2] &
(* {{a, b}, {Method -> "Fast"}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArgumentsOptions.html) for more details.*