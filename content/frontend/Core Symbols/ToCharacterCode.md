# ToCharacterCode

`ToCharacterCode["string"]` gives a list of the integer codes corresponding to the characters in a string.

`ToCharacterCode["string", "encoding"]` gives integer codes according to the specified encoding.

## Examples

Get character codes:

```wolfram
ToCharacterCode["Hello"]
(* {72, 101, 108, 108, 111} *)
```

Single character:

```wolfram
ToCharacterCode["A"]
(* {65} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToCharacterCode.html) for more details.*