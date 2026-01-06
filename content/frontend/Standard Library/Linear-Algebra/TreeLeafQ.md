# TreeLeafQ

`TreeLeafQ[tree]` gives True if tree is a Tree object with no children, and gives False otherwise.

## Examples

Check if a tree node is a leaf:

```wolfram
TreeLeafQ[Tree[1, {}]]
(* True *)

TreeLeafQ[Tree[1, {Tree[2, {}]}]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeLeafQ.html) for more details.*