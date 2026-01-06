# AudioInstanceQ

`AudioInstanceQ[audio, obj]` gives True if audio sounds to be an instance of the object obj, and gives False otherwise.

`AudioInstanceQ[audio, obj, cat]` assumes that audio is the sound of something in the category cat.

## Examples

Check if audio matches an entity:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioInstanceQ[audio, Entity["Species", "Alauda arvensis"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioInstanceQ.html) for more details.*