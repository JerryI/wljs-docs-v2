---
title: NetRename
---

`NetRename[net, "old" -> "new"]` gives a net in which the name old for a layer is replaced with new.

- `NetRename[net, NetPort["old"] -> NetPort["new"]]` gives a net in which the name old for an input or output port is replaced with new.
- `NetRename[net, {rule1, rule2, ...}]` performs all renamings specified by the rulei.
- `NetRename[net, f]` uses a function f to map existing layer names to new names.
- `NetRename[net, rules, levelspec]` renames layers and ports nested at level levelspec.

## Examples

```wolfram
net = NetChain[{LinearLayer[10], Ramp}, "layer1", "layer2"];
NetRename[net, "layer1" -> "input_layer"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetRename.html) for more details.