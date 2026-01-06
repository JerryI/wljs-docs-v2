# ArrayRules

`ArrayRules[SparseArray[...]]` gives the rules {pos1 -> val1, pos2 -> val2, ...} specifying elements in a sparse array.

`ArrayRules[list]` gives rules for `SparseArray[list]`.

## Examples

Get rules from a sparse array:

```wolfram
sa = SparseArray[{{1, 2} -> 1, {2, 1} -> 2}];
ArrayRules[sa]
(* {{1, 2} -> 1, {2, 1} -> 2, {_, _} -> 0} *)
```

Convert a list to sparse array rules:

```wolfram
ArrayRules[{{1, 0}, {0, 2}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayRules.html) for more details.*