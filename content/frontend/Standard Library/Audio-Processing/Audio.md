# Audio

`Audio[file]` represents audio stored in the given file.

`Audio[url]` represents audio stored in the given URL.

`Audio[data]` represents audio with samples given by the array data.

## Examples

Create audio from a sine wave:

```wolfram
Audio[Table[Sin[440 * 2 Pi * t], {t, 0, 1, 1/44100}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Audio.html) for more details.*