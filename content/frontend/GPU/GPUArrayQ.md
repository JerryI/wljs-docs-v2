---
title: GPUArrayQ
---

`GPUArrayQ[g]` returns `True` if `g` is a valid [GPUArray](./GPUArray) object and `False` otherwise.

## Examples

### Basic check

```wolfram
g = GPUArray[{1.0, 2.0, 3.0}];
GPUArrayQ[g]
```

An ordinary list is not a `GPUArray`:

```wolfram
GPUArrayQ[{1.0, 2.0, 3.0}]
```

### After computation

Results of GPU operations are still `GPUArray` objects:

```wolfram
g = GPUArray[Range[1.0, 5.0]];
GPUArrayQ[Sin[g]]
```

After converting back with `Normal`, the result is no longer a `GPUArray`:

```wolfram
GPUArrayQ[Normal[g]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GPUArrayQ.html) for more details.
