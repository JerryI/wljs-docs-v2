# SpeechRecognize

`SpeechRecognize[audio]` recognizes speech in audio and returns it as a string.

- `SpeechRecognize[audio, level]` returns a list of strings at the specified structural level.
- `SpeechRecognize[audio, level, prop]` returns prop for text at the given level.

## Examples

```wolfram
SpeechRecognize[audioObj]
```

```wolfram
SpeechRecognize[Audio["speech.wav"], "Word"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpeechRecognize.html) for more details.*