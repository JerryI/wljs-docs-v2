---
title: PacletSymbol
---

`PacletSymbol[paclet, "sym"]` gives the symbol named "sym" in the primary context of paclet.

- `PacletSymbol[paclet, "sym", h]` wraps the head h around the symbol before returning it.

## Examples

```wolfram
PacletSymbol["Cryptography", "Hash"]
```

```wolfram
PacletSymbol["NeuralNetworks", "NetChain", Unevaluated]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletSymbol.html) for more details.*