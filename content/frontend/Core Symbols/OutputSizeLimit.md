# OutputSizeLimit

`OutputSizeLimit` is an option for notebooks that specifies the maximum size in bytes of expressions that will automatically be output in their entirety.

## Examples

Set output size limit:
```wolfram
SetOptions[$FrontEnd, OutputSizeLimit -> 100000]
```

Check current limit:
```wolfram
CurrentValue[$FrontEndSession, OutputSizeLimit]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OutputSizeLimit.html) for more details.*