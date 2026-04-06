---
title: SARMAProcess
---

`SARMAProcess[{a1,…,ap},{b1,…,bq},{s,{α1,…,αm},{β1,…,βr}},v]` represents a weakly stationary seasonal autoregressive moving-average process with ARMA coefficients ai and bj, seasonal order s, seasonal ARMA coefficients αi and βj, and normal white noise with variance v.

`SARMAProcess[{a1,…,ap},{b1,…,bq},{s,{α1,…,αm},{β1,…,βr}},Σ]` represents a weakly stationary vector SARMA process driven by normal white noise, with covariance matrix Σ.

`SARMAProcess[{a1,…,ap},{b1,…,bq},{{s1,…},{α1,…,αm},{β1,…,βr}},Σ]` represents a weakly stationary vector SARMA process with multiple seasonal orders si.

`SARMAProcess[{a1,…,ap},{b1,…,bq},{s,{α1,…,αm},{β1,…,βr}},v,init]` represents a SARMA process with initial data init.

`SARMAProcess[c,…]` represents a SARMA process with a constant c.

## Examples

Create a simple SARMA process:

```wolfram
proc = SARMAProcess[{0.5}, {}, {12, {0.3}, {}}, 1]
```

Simulate from a SARMA process:

```wolfram
RandomFunction[SARMAProcess[{0.5}, {}, {12, {0.3}, {}}, 1], {0, 100}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SARMAProcess.html) for more details.