---
title: SpeechCases
---

`SpeechCases[audio, form]` gives a list of cases of text identified as being of type form that appear in the transcription of audio.

- `SpeechCases[audio, {form1, form2, ...}]` gives an association of results for all the types.
- `SpeechCases[audio, formspec -> prop]` gives the specified property for each result found.
- `SpeechCases[audio, formspec -> {prop1, prop2, ...}]` gives a list of properties for each result found.
- `SpeechCases[audio, spec, n]` gives the first n cases found.

## Examples

Find numbers mentioned in speech:

```wolfram
SpeechCases[audio, "Number"]
```

Find dates and times:

```wolfram
SpeechCases[audio, {"Date", "Time"}]
```

Get positions of entities in transcription:

```wolfram
SpeechCases[audio, "Person" -> "Position"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpeechCases.html) for more details.*