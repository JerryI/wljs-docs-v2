# ClickPane

`ClickPane[image,func]` represents a clickable pane that displays as image and applies func to the x,y coordinates of each click within the pane.

`ClickPane[image,{{xmin,ymin},{xmax,ymax}},func]` specifies the range of coordinates to use.

## Examples

Create a clickable pane that prints coordinates:

```wolfram
ClickPane[Graphics[{Blue, Disk[]}], Print]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClickPane.html) for more details.*