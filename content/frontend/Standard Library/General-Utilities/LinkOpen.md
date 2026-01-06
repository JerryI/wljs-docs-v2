# LinkOpen

`LinkOpen["prog"]` starts the external program prog and opens a MathLink connection to it.

## Examples

```wolfram
link = LinkOpen["math -mathlink"]
```

```wolfram
LinkOpen[First[$CommandLine] <> " -mathlink"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkOpen.html) for more details.*