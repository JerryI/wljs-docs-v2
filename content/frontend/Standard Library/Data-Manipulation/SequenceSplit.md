---
title: SequenceSplit
---

`SequenceSplit[list, patt]` splits list into sublists separated by sequences that match the sequence pattern patt.

- `SequenceSplit[list, patt -> rhs]` inserts rhs at the position of each matched sequence.
- `SequenceSplit[list, {patt1 -> rhs1, ...}]` inserts rhsi at the position of each patti.
- `SequenceSplit[list, patt, n]` splits into at most n sublists.

## Examples

```wolfram
SequenceSplit[{a, b, 0, c, d, 0, e}, {0}]
```

```wolfram
SequenceSplit[{1, 2, 3, 4, 5}, {x_, y_} /; x + y > 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceSplit.html) for more details.*