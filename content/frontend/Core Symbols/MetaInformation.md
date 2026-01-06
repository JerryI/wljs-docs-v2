# MetaInformation

`MetaInformation` is an option giving metainformation for `Image`, `CloudObject`, and other objects.

## Examples

```wolfram
img = Image[RandomReal[1, {100, 100}], MetaInformation -> <|"Author" -> "John"|>];
Options[img, MetaInformation]
```

```wolfram
CloudObject["file.txt", MetaInformation -> <|"Description" -> "Test file"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MetaInformation.html) for more details.*