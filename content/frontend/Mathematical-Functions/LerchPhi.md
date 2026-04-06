---
title: LerchPhi
---

`LerchPhi[z, s, a]` gives the Lerch transcendent Φ(z, s, a).

## Examples

Evaluate the Lerch transcendent:

```wolfram
LerchPhi[0.5, 2, 1] // N
(* 1.64493 *)
```

Relation to Riemann zeta:

```wolfram
LerchPhi[1, s, 1] == Zeta[s]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LerchPhi.html) for more details.