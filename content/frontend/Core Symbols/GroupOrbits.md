# GroupOrbits

`GroupOrbits[group, {p1, …}]` returns the orbits of the points `pi` under the action of the elements of `group`.

- `GroupOrbits[group, {p1, …}, f]` finds the orbits under the group action given by a function `f`.

## Examples

```wolfram
GroupOrbits[SymmetricGroup[4], {1, 2, 3, 4}]
```

```wolfram
GroupOrbits[CyclicGroup[3], Range[6]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GroupOrbits.html) for more details.*