---
title: Inherited
---

`Inherited` represents an option value to be inherited from an enclosing style, cell, or notebook.

This is used to specify that a property should take its value from the parent context rather than being explicitly set.

## Examples

```wolfram
Style["text", FontColor -> Inherited]
```

```wolfram
Cell["content", Background -> Inherited]
```

```wolfram
(* Use inherited option in a cell *)
Cell[BoxData["x"], CellFrame -> Inherited]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inherited.html) for more details.*