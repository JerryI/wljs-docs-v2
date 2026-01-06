# ARCHProcess

`ARCHProcess[κ, {α1, ..., αq}]` represents an autoregressive conditionally heteroscedastic process of order q, driven by a standard white noise.

`ARCHProcess[κ, {α1, ..., αq}, init]` represents an ARCH process with initial data init.

## Examples

Create an ARCH(1) process:

```wolfram
proc = ARCHProcess[0.1, {0.5}]
```

Simulate the process:

```wolfram
RandomFunction[ARCHProcess[0.1, {0.3}], {0, 100}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ARCHProcess.html) for more details.*