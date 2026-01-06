# FileTemplateApply

`FileTemplateApply[template]` applies a template and writes the result to a temporary file, returning its name.

`FileTemplateApply[template, args]` applies a template using args to fill its slots.

`FileTemplateApply[template, args, output]` writes the result to the specified output file.

## Examples

Apply template to file:

```wolfram
FileTemplateApply[FileTemplate["report.txt"], <|"date" -> DateString[]|>, "output.txt"]
```

Get temporary file result:

```wolfram
result = FileTemplateApply[template, <|"x" -> 42|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileTemplateApply.html) for more details.*