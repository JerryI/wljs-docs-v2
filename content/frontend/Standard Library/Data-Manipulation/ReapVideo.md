# ReapVideo

`ReapVideo[expr]` gives a video whose frames are the expressions to which `SowVideo` has been applied during its evaluation.

## Examples

```wolfram
ReapVideo[Do[SowVideo[Graphics[Disk[{i, i}]]], {i, 10}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReapVideo.html) for more details.*