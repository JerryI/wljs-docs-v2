# GARCHProcess

`GARCHProcess[κ,{α1,…,αq},{β1,…,βp}]` represents a generalized autoregressive conditionally heteroscedastic process of orders p and q, driven by a standard white noise.

`GARCHProcess[κ,{α1,…,αq},{β1,…,βp},init]` represents a GARCH process with initial data init.

## Examples

Create a GARCH(1,1) process:

```wolfram
proc = GARCHProcess[0.1, {0.2}, {0.7}]
```

Simulate the process:

```wolfram
RandomFunction[GARCHProcess[0.1, {0.2}, {0.7}], {0, 100}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GARCHProcess.html) for more details.*