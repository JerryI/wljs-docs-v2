---
title: PowerSpectralDensity
---

`PowerSpectralDensity[data, ω]` estimates the power spectral density for data.

- `PowerSpectralDensity[data, ω, sspec]` estimates the power spectral density for data with smoothing specification sspec.
- `PowerSpectralDensity[tproc, ω]` represents the power spectral density of a time series process tproc.

The power spectral density describes how the power of a signal is distributed across frequencies.

## Examples

```wolfram
data = Table[Sin[2 Pi 0.1 t] + RandomReal[], {t, 100}];
PowerSpectralDensity[data, 0.1]
```

```wolfram
Periodogram[data]
```

```wolfram
PowerSpectralDensity[ARProcess[{0.5}, 1], \[Omega]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PowerSpectralDensity.html) for more details.*