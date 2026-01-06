# FileTemplate

`FileTemplate["file"]` yields a TemplateObject expression representing a file template to be applied using functions like `TemplateApply`.

## Examples

Create a file template:

```wolfram
template = FileTemplate["letter.txt"]
```

Apply a template:

```wolfram
TemplateApply[FileTemplate["greeting.txt"], <|"name" -> "Alice"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileTemplate.html) for more details.*