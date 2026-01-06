# WebItem

`WebItem[expr]` represents an HTML element containing expr.

- `WebItem[expr, options]` represents an HTML element formatted using the specified option settings.
- `WebItem[XMLElement[expr, ...], options]` represents an XMLElement formatted using options.

## Examples

Create a simple web item:

```wolfram
WebItem["Hello World"]
```

With styling options:

```wolfram
WebItem["Styled text", "Style" -> "color: blue; font-size: 20px;"]
```

Use in web generation:

```wolfram
ExportString[WebItem[{"Item 1", "Item 2"}], "HTML"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WebItem.html) for more details.*