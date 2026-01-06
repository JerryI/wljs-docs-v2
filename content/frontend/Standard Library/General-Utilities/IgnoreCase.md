# IgnoreCase

`IgnoreCase` is an option for string manipulation and searching functions that specifies whether lowercase and uppercase letters should be treated as equivalent.

## Examples

Case-insensitive string matching:

```wolfram
StringMatchQ["Hello", "hello", IgnoreCase -> True]
(* True *)
```

Case-sensitive (default):

```wolfram
StringMatchQ["Hello", "hello", IgnoreCase -> False]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IgnoreCase.html) for more details.*