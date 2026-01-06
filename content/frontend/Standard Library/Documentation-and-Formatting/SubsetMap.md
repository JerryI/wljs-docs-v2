# SubsetMap

`SubsetMap[f,{e1,e2,…},{i,j,…}]` yields an expression in which the elements ei, ej, … in the list {e1,e2,…} are replaced with the corresponding elements of the list obtained by evaluating f[{ei,ej,…}].

`SubsetMap[f,expr,{pos1,pos2,…}]` replaces elements of expr at positions pos1, pos2, ….

`SubsetMap[f,{pos1,pos2,…}]` represents an operator form of SubsetMap that can be applied to an expression.

## Examples

Apply a function to selected elements:

```wolfram
SubsetMap[Reverse, {a, b, c, d, e}, {2, 4}]
(* {a, d, c, b, e} *)
```

Double selected elements:

```wolfram
SubsetMap[2 # &, {1, 2, 3, 4}, {1, 3}]
(* {2, 2, 6, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubsetMap.html) for more details.*