---
title: Tally
---

`Tally[list]` tallies the elements in list, listing all distinct elements together with their multiplicities.

## Examples

Count element occurrences:

```wolfram
Tally[{a, b, a, c, b, a}]
(* {{a, 3}, {b, 2}, {c, 1}} *)
```

Count characters:

```wolfram
Tally[Characters["mississippi"]]
(* {{"m", 1}, {"i", 4}, {"s", 4}, {"p", 2}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Tally.html) for more details.