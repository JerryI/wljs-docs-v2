# TourVideo

`TourVideo[input,{step1,step2,…}]` generates a video by taking a tour at steps stepi around graphics.

`TourVideo[input,{{t1,step1},{t2,step2},…}]` takes a tour with steps stepi at times ti around graphics.

`TourVideo[input,func]` samples the function func to generate step specifications for each frame.

## Examples

Create a tour video around 3D graphics:

```wolfram
TourVideo[Graphics3D[Sphere[]], {"FrontToBack", "LeftToRight"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TourVideo.html) for more details.*