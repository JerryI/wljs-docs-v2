---
title: AudioIdentify
---

`AudioIdentify[audio]` yields the result of attempting to identify what audio is a recording of.

`AudioIdentify[audio, category]` restricts the identification to the specified category.

`AudioIdentify[audio, category, n]` gives a list of up to n possible identifications.

## Examples

Identify an audio sample:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioIdentify[audio]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioIdentify.html) for more details.