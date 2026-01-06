---
title: PrintingPageRange
---

`PrintingPageRange` is an option for notebooks that specifies the range of pages of a notebook to be printed.

## Examples

```wolfram
SetOptions[notebook, PrintingPageRange -> {1, 5}]
```

```wolfram
Notebook[cells, PrintingPageRange -> All]
```

```wolfram
Options[EvaluationNotebook[], PrintingPageRange]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrintingPageRange.html) for more details.*