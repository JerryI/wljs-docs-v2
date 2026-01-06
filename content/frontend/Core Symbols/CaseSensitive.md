# CaseSensitive

`CaseSensitive[patt]` represents a string pattern that requires matching typographical case, even with the overall option setting IgnoreCase->True.

## Examples

Match case-sensitively even when IgnoreCase is True:

```wolfram
StringMatchQ["Hello", CaseSensitive["Hello"], IgnoreCase -> True]
(* True *)

StringMatchQ["hello", CaseSensitive["Hello"], IgnoreCase -> True]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CaseSensitive.html) for more details.*