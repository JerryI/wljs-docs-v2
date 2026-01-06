---
title: MarkovProcessProperties
---

`MarkovProcessProperties[mproc]` gives a summary of properties for the finite state Markov process mproc.

- `MarkovProcessProperties[mproc, "property"]` gives the specified "property" for the process mproc.

This function provides analytical properties of discrete and continuous-time Markov chains.

## Examples

```wolfram
proc = DiscreteMarkovProcess[1, {{0.5, 0.5}, {0.3, 0.7}}];
MarkovProcessProperties[proc]
```

```wolfram
MarkovProcessProperties[proc, "StationaryDistribution"]
```

```wolfram
MarkovProcessProperties[proc, "CommunicatingClasses"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MarkovProcessProperties.html) for more details.*