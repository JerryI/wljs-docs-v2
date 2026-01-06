# Split

`Split[list]` splits list into sublists consisting of runs of identical elements.

`Split[list, test]` treats adjacent elements as identical when test yields `True`.

## Examples

Split into runs:

```wolfram
Split[{1, 1, 2, 3, 3, 3, 1}]
(* {{1, 1}, {2}, {3, 3, 3}, {1}} *)
```

With custom test:

```wolfram
Split[{1, 2, 3, 5, 6, 8}, #2 == #1 + 1 &]
(* {{1, 2, 3}, {5, 6}, {8}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Split.html) for more details.*