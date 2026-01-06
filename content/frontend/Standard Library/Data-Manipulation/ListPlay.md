# ListPlay

`ListPlay[{a1, a2, ...}]` creates an object that plays as a sound whose amplitude is given by the sequence of levels ai.

## Examples

Play a waveform:

```wolfram
ListPlay[Table[Sin[2 Pi n/100], {n, 0, 8000}]]
```

Random noise:

```wolfram
ListPlay[RandomReal[{-1, 1}, 44100]]
```

Imported audio samples:

```wolfram
ListPlay[AudioData[ExampleData[{"Audio", "Bird"}]][[1]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListPlay.html) for more details.*