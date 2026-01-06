---
title: NetStateObject
---

`NetStateObject[net]` creates an object derived from net that represents a neural net with additional stored state information that is updated when the net is applied to data.

- `NetStateObject[net, seed]` initializes stored state using seed.

## Examples

```wolfram
NetStateObject[recurrentNet]
```

```wolfram
stateObj = NetStateObject[net, 1234];
stateObj[input]
```

```wolfram
NetStateObject[LongShortTermMemoryLayer[10]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetStateObject.html) for more details.*