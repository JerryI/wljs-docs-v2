# GroupStabilizer

`GroupStabilizer[group, {p1, …, pn}]` returns the subgroup of elements of `group` that move none of the points `p1, …, pn`.

- `GroupStabilizer[group, {p1, …, pn}, f]` returns the stabilizer subgroup under the action given by the function `f`.

## Examples

```wolfram
GroupStabilizer[SymmetricGroup[4], {1}]
```

```wolfram
GroupStabilizer[AlternatingGroup[5], {1, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GroupStabilizer.html) for more details.*