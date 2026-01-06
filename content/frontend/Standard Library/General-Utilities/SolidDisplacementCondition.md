---
title: SolidDisplacementCondition
---

`SolidDisplacementCondition[pred,vars,pars]` represents a prescribed displacement on a solid boundary for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`SolidDisplacementCondition[pred,vars,pars,lkeys]` represents a prescribed displacement with local parameters specified in pars[lkey].

## Examples

Define a solid displacement boundary condition:

```wolfram
SolidDisplacementCondition[x == 0, {u, v}, <|"displacement" -> {0, 0}|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidDisplacementCondition.html) for more details.*