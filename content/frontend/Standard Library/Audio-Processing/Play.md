---
title: Play
---

`Play[f, {t, tmin, tmax}]` creates an object that plays as a sound whose amplitude is given by f as a function of time t in seconds between tmin and tmax.

## Examples

Play a sine wave:

```wolfram
Play[Sin[440 * 2 Pi * t], {t, 0, 1}]
```

Frequency sweep:

```wolfram
Play[Sin[2 Pi * t * (200 + 200 t)], {t, 0, 2}]
```

Amplitude modulation:

```wolfram
Play[Sin[2 Pi * 440 * t] * Exp[-t], {t, 0, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Play.html) for more details.*