---
title: PrintingOptions
---

`PrintingOptions` is an option that specifies settings for printing.

## Examples

Get printing options for a notebook:

```wolfram
Options[EvaluationNotebook[], PrintingOptions]
```

Set page margins for printing:

```wolfram
SetOptions[EvaluationNotebook[], 
  PrintingOptions -> {"PageSize" -> {612, 792}}]
```

Specify paper orientation:

```wolfram
PrintingOptions -> {"PrintingOrientation" -> "Landscape"}
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrintingOptions.html) for more details.*