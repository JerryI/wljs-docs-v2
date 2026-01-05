# StringReplace

`StringReplace["string", s -> sp]` replaces the string expression s by sp wherever it appears.

`StringReplace["string", {s1 -> sp1, s2 -> sp2, ...}]` replaces multiple patterns.

## Examples

Replace a substring:

```wolfram
StringReplace["Hello World", "World" -> "Universe"]
(* "Hello Universe" *)
```

Multiple replacements:

```wolfram
StringReplace["cat and dog", {"cat" -> "dog", "dog" -> "cat"}]
(* "dog and cat" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringReplace.html) for more details.*