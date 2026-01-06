# SetOptions

`SetOptions[s, name1 -> value1, ...]` sets the specified default options for a symbol s.

## Examples

Change default options for Plot:

```wolfram
SetOptions[Plot, PlotStyle -> Red]
(* Now all Plots default to red *)
```

Set options for a stream:

```wolfram
SetOptions[$Output, PageWidth -> 80]
```

Reset to original:

```wolfram
SetOptions[Plot, PlotStyle -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetOptions.html) for more details.*