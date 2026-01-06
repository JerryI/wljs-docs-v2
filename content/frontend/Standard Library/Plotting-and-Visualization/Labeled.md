---
title: Labeled
---

`Labeled[expr, lbl]` displays expr labeled with lbl.

`Labeled[expr, lbl, pos]` places lbl at a position specified by pos.

`Labeled[expr, {lbl1, lbl2, ...}, {pos1, ...}]` places the lbl_i at positions pos_i.

## Examples

Label a graphic:

```wolfram
Labeled[Graphics[Disk[]], "Circle"]
```

Label at specific position:

```wolfram
Labeled[Plot[Sin[x], {x, 0, 2 Pi}], "Sine Wave", Top]
```

Multiple labels:

```wolfram
Labeled[Graphics[Rectangle[]], {"Bottom", "Left", "Top", "Right"}, All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Labeled.html) for more details.*