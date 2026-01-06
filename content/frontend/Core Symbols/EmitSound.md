# EmitSound

`EmitSound[snd]` emits the sound snd when evaluated.

`EmitSound[{snd1, snd2, ...}]` emits each of the sounds sndi in sequence.

## Examples

Play a beep:

```wolfram
EmitSound[Sound[SoundNote["C"]]]
```

Play a sequence of notes:

```wolfram
EmitSound[Sound[{SoundNote["C"], SoundNote["E"], SoundNote["G"]}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmitSound.html) for more details.*