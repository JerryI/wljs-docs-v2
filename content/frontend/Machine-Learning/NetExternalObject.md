---
title: NetExternalObject
---

`NetExternalObject[...]` represents a net model in an external framework format.

This is used for importing and exporting neural network models from frameworks like ONNX.

## Examples

```wolfram
NetExternalObject["model.onnx"]
```

```wolfram
Import["model.onnx", "NetExternalObject"]
```

```wolfram
NetImport["external_model.onnx"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetExternalObject.html) for more details.