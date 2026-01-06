# ScriptMinSize

`ScriptMinSize` is an option for `Style` which specifies the minimum font size to use in rendering subscripts, etc.

## Examples

Set minimum subscript size:
```wolfram
Style[Subscript[x, 12345], ScriptMinSize -> 8]
```

Prevent subscripts from becoming too small:
```wolfram
Style[x^y^z, ScriptMinSize -> 6]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScriptMinSize.html) for more details.*