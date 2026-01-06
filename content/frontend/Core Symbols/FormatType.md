# FormatType

`FormatType` is an option for output streams, graphics, and functions such as Text that specifies the default format type to use when outputting expressions.

## Examples

Open a file with StandardForm output:

```wolfram
stream = OpenWrite["output.txt", FormatType -> StandardForm]
```

Use in Text with specified formatting:

```wolfram
Graphics[Text[Style["Hello", Bold], {0, 0}, FormatType -> TraditionalForm]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormatType.html) for more details.*