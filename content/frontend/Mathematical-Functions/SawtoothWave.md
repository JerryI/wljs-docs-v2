---
title: SawtoothWave
---

`SawtoothWave[x]` gives a sawtooth wave that varies from 0 to 1 with unit period.

`SawtoothWave[{min, max}, x]` gives a sawtooth wave that varies from min to max with unit period.

## Examples

Plot a basic sawtooth wave:

```wolfram
Plot[SawtoothWave[x], {x, 0, 3}]
```

Sawtooth wave with custom range:

```wolfram
Plot[SawtoothWave[{-1, 1}, x], {x, 0, 3}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SawtoothWave.html) for more details.