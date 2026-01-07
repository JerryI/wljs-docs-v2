---
title: PartLayer
---

`PartLayer[i]` represents a net layer that gives the ith part of the input.

`PartLayer[i;;j]` gives parts i through j.

`PartLayer[i;;j;;k]` gives parts i through j in steps of k.

`PartLayer[{spec1,spec2,…}]` takes part speci at level i in the input.

## Examples

Extract the second element from input:

```wolfram
PartLayer[2]
```

Extract elements 2 through 4:

```wolfram
PartLayer[2;;4]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PartLayer.html) for more details.*