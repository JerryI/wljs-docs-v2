---
title: NetReplace
---

`NetReplace[net, patt -> layer]` gives a net in which all layers matching patt are replaced with layer.

- `NetReplace[net, {rule1, rule2, …}]` performs all replacements specified by the rulei.

## Examples

```wolfram
net = NetChain[{LinearLayer[10], Tanh, LinearLayer[5]}];
NetReplace[net, Tanh -> Ramp]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetReplace.html) for more details.