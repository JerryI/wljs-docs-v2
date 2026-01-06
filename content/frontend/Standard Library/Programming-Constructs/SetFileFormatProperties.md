# SetFileFormatProperties

`SetFileFormatProperties["fmt", "prop" -> val]` sets the value of a property "prop" for the specified format "fmt".

- `SetFileFormatProperties["fmt", {prop1 -> val1, prop2 -> val2, ...}]` sets the value of multiple properties.

## Examples

Set a property for a format:
```wolfram
SetFileFormatProperties["CSV", "FieldSeparators" -> ";"]
```

Set multiple properties at once:
```wolfram
SetFileFormatProperties["JSON", {"Compact" -> True, "Indentation" -> 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetFileFormatProperties.html) for more details.*