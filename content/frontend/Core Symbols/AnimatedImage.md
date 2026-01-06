# AnimatedImage

`AnimatedImage[{image1, image2, ...}]` generates an animation whose frames are the successive imagei.

`AnimatedImage[file]` represents an animated image from file.

## Examples

Create an animated image from a list of frames:

```wolfram
frames = Table[Rasterize[Graphics[Disk[{Sin[t], Cos[t]}]]], {t, 0, 2 Pi, Pi/10}];
AnimatedImage[frames]
```

Load an animated GIF:

```wolfram
AnimatedImage["animation.gif"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnimatedImage.html) for more details.*