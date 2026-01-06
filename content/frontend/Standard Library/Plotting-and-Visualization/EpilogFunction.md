# EpilogFunction

`EpilogFunction` is an option for `DocumentGenerator` allowing arbitrary code to be executed after a document is generated.

## Examples

Run code after document generation:

```wolfram
DocumentGenerator[template, "Weekly", EpilogFunction -> (Print["Done!"] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EpilogFunction.html) for more details.*