---
title: SatisfiabilityInstances
---

`SatisfiabilityInstances[bf]` attempts to find a choice of variables that makes the Boolean function bf yield True.

`SatisfiabilityInstances[expr,{a1,a2,…}]` attempts to find a choice of the ai that makes the Boolean expression expr be True.

`SatisfiabilityInstances[…,…,m]` attempts to find m choices of variables that yield True.

## Examples

Find a satisfying assignment for a Boolean expression:

```wolfram
SatisfiabilityInstances[a && (b || !c), {a, b, c}]
(* {{True, True, True}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SatisfiabilityInstances.html) for more details.