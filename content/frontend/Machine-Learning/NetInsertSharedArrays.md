---
title: NetInsertSharedArrays
---

`NetInsertSharedArrays[net]` converts all ordinary arrays in net into `NetSharedArray` objects.

- `NetInsertSharedArrays[net, "prefix"]` uses a prefix for the names of all newly shared arrays.

## Examples

```wolfram
net = NetChain[{LinearLayer[10], LinearLayer[5]}];
NetInsertSharedArrays[net]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetInsertSharedArrays.html) for more details.