---
title: RandomInstance
---

`RandomInstance[expr]` finds a random instance of an expression such as a geometric scene or biomolecular sequence.

- `RandomInstance[expr, n]` finds n instances.

## Examples

Generate a random instance of a geometric scene:

```wolfram
RandomInstance[GeometricScene[{a, b, c}, {Triangle[{a, b, c}]}]]
```

Get multiple random instances:

```wolfram
RandomInstance[GeometricScene[{a, b, c}, {Triangle[{a, b, c}]}], 3]
```

Random DNA sequence matching a pattern:

```wolfram
RandomInstance[BioSequence["DNA", "ATCG" ~~ ___ ~~ "GCTA"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomInstance.html) for more details.*