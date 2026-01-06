# Masking

`Masking` is an option for various image and signal processing functions that specifies on which regions they should operate.

## Examples

Apply filter only to masked region:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
GaussianFilter[img, 10, Masking -> Disk[]]
```

Binary mask:

```wolfram
ImageAdjust[img, Masking -> DiskMatrix[50]]
```

Process only non-zero pixels:

```wolfram
ImageFilter[Mean, img, 5, Masking -> Full]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Masking.html) for more details.*