# EmbedCode

`EmbedCode[obj]` generates the code necessary to embed the object obj on a webpage.

`EmbedCode[obj, "dest"]` generates code for an external environment or language of type "dest".

`EmbedCode[obj, "dest", dir]` saves the generated code as files in the directory dir.

## Examples

Generate embed code for a cloud object:

Generate HTML embed code:

```wolfram
EmbedCode[Graphics[Circle[]], "HTML"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmbedCode.html) for more details.*