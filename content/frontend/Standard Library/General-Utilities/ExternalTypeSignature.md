# ExternalTypeSignature

`ExternalTypeSignature` is an option for EmbedCode that gives rules specifying the mapping to external types in an embedded code.

## Examples

```wolfram
(* Specify type mappings for embedding code *)
EmbedCode[Compile[{{x, _Real}}, x^2], 
  "C", 
  ExternalTypeSignature -> {"Real" -> "double"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalTypeSignature.html) for more details.*