# ImageSizeAction

`ImageSizeAction` is an option for `Pane` and related constructs that specifies what to do if the specified ImageSize setting does not match the size of the contents.

## Examples

```wolfram
Pane["Hello", ImageSize -> {50, 50}, ImageSizeAction -> "Clip"]
```

```wolfram
Pane[Graphics[Disk[]], ImageSize -> 100, ImageSizeAction -> "ShrinkToFit"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageSizeAction.html) for more details.*