# AmbiguityList

`AmbiguityList[{expr1,expr2,…}]` represents possible results derived from an ambiguous semantic interpretation.

`AmbiguityList[{expr1,expr2,…},"string"]` represents possible results from semantic interpretation of an input string.

`AmbiguityList[{expr1,expr2,…},"string",{assoc1,assoc2,…}]` includes a sequence of associations giving details of the interpretations used to obtain the expri.

## Examples

Interpret an ambiguous input:

```wolfram
SemanticInterpretation["March"]
(* AmbiguityList[{Entity["Person", ...], DateObject[...], ...}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AmbiguityList.html) for more details.*