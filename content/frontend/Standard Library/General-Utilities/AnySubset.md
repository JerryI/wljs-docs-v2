---
title: AnySubset
---

`AnySubset[{c1, c2, ...}]` represents an element in an interpreter or form that accepts any subset of the choices ci.

`AnySubset[{lab1 -> c1, lab2 -> c2, ...}]` accepts any subset of the labi, yielding the corresponding ci as results.

`AnySubset[choices, max]` allows at most max choices to be selected.

## Examples

Create a form that accepts any subset of choices:

```wolfram
FormFunction[{"choices" -> AnySubset[{"A", "B", "C"}]}, #choices &]
```

Limit the number of selections:

```wolfram
AnySubset[{"Red", "Green", "Blue"}, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnySubset.html) for more details.*