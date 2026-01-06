# AudioInsert

`AudioInsert[audio, t -> new]` inserts the audio signal new at time t.

`AudioInsert[audio, {t1, t2, ...} -> new]` inserts the same audio at multiple positions.

`AudioInsert[audio, {t1 -> new1, ...}]` inserts multiple audio signals at different positions.

## Examples

Insert audio at a specific time:

```wolfram
audio = AudioGenerator["Sin", 2];
insert = AudioGenerator["WhiteNoise", 0.5];
AudioInsert[audio, 1 -> insert]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioInsert.html) for more details.*