# ImageRecolor

`ImageRecolor[image, region -> color]` recolors pixels in image specified by region using the specified color.

- `ImageRecolor[image, {region1 -> color1, ...}]` recolors multiple regions.
- `ImageRecolor[video, ...]` recolors frames of a video.

This function changes the color of selected regions in images or videos.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageRecolor[img, Rectangle[{0, 0}, {100, 100}] -> Red]
```

```wolfram
ImageRecolor[img, Disk[{128, 128}, 50] -> Blue]
```

```wolfram
ImageRecolor[img, {Disk[{50, 50}, 30] -> Green, Disk[{200, 200}, 30] -> Yellow}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageRecolor.html) for more details.*