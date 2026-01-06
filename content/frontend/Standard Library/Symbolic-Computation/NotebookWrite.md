# NotebookWrite

`NotebookWrite[nb, expr]` writes expr as a cell, or group of cells to the notebook nb.

## Examples

Write a cell to the current notebook:

```wolfram
NotebookWrite[EvaluationNotebook[], Cell["Hello World", "Text"]]
```

Write a code cell:

```wolfram
NotebookWrite[EvaluationNotebook[], Cell["1 + 1", "Input"]]
```

Write multiple cells:

```wolfram
NotebookWrite[EvaluationNotebook[], 
  Cell[CellGroupData[{Cell["Title", "Title"], Cell["Content", "Text"]}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NotebookWrite.html) for more details.*