---
title: GPUArray
---

`GPUArray[array]` yields an array stored in GPU memory, making it available for GPU-accelerated computation.

The input `array` can be:
- a packed list of real or complex numbers
- a `NumericArray`
- a `SparseArray`

Data is automatically transferred to the GPU. Use `Normal` to copy it back to the CPU.

## Examples

### Basic usage

Create a `GPUArray` from a vector and compute element-wise cosine:

```wolfram
g = GPUArray[Range[1.0, 5.0]];
Cos[g]
```

Retrieve the result as an ordinary list:

```wolfram
Normal[Cos[g]]
```

### Matrix operations

Perform a matrix–vector dot product on the GPU:

```wolfram
mat = GPUArray[RandomReal[1, {500, 500}]];
vec = GPUArray[RandomReal[1, 500]];
Normal[mat . vec]
```

### Fourier transform on the GPU

```wolfram
data = GPUArray[RandomReal[1, 2^16]];
Normal[Fourier[data]]
```

### Random number generation on GPU

```wolfram
g = GPUArray[RandomReal[{0, 1}, 10^6, Method -> "GPU"]];
Mean[g]
```

### Linear algebra

Solve a linear system entirely on the GPU:

```wolfram
a = GPUArray[RandomReal[1, {200, 200}]];
b = GPUArray[RandomReal[1, 200]];
Normal[LinearSolve[a, b]]
```

### Arithmetic

Standard arithmetic operations are dispatched to the GPU automatically:

```wolfram
x = GPUArray[Range[1.0, 1000.0]];
Normal[x^2 + Sin[x]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GPUArray.html) for more details.
