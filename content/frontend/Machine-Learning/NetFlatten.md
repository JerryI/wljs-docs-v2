---
title: NetFlatten
---

`NetFlatten[net]` collapses nested NetChain and NetGraph objects within net.

- `NetFlatten[net, n]` collapses up to nesting level n.

## Examples

Flatten a nested network:
```wolfram
NetFlatten[NetChain[{NetChain[{LinearLayer[], Ramp}], LinearLayer[]}]]
```

Flatten to specific level:
```wolfram
NetFlatten[net, 1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetFlatten.html) for more details.