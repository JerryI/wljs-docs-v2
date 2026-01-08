---
title: LaplacianGaussianFilter
---

`LaplacianGaussianFilter[data, r]` convolves data with a Laplacian of Gaussian kernel of pixel radius r.

- `LaplacianGaussianFilter[data, {r, σ}]` convolves data with a Laplacian of Gaussian kernel of radius r and standard deviation σ.

## Examples

Apply Laplacian of Gaussian filter to an image:

```wolfram
LaplacianGaussianFilter[ExampleData[{"TestImage", "Lena"}], 2]
```

Edge detection with custom radius:

```wolfram
LaplacianGaussianFilter[ExampleData[{"TestImage", "Mandrill"}], 5]
```

Specify radius and standard deviation:

```wolfram
LaplacianGaussianFilter[ExampleData[{"TestImage", "Peppers"}], {3, 1.5}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LaplacianGaussianFilter.html) for more details.