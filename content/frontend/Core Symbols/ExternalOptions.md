# ExternalOptions

`ExternalOptions` is an option for EmbedCode and related functions that gives options specific to the external environment or language used.

## Examples

Use ExternalOptions with EmbedCode:

```wolfram
EmbedCode[CloudDeploy[1 + 1], "HTML", ExternalOptions -> {"Width" -> 400}]
(* EmbeddedHTML[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalOptions.html) for more details.*