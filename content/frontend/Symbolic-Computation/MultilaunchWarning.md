---
title: MultilaunchWarning
---

`MultilaunchWarning` is a global option that specifies whether a warning is given when you try to modify user preferences while running two copies of the Wolfram System simultaneously.

## Examples

Disable the multilaunch warning:
```wolfram
SetOptions[$FrontEnd, MultilaunchWarning -> False]
```

Check the current setting:
```wolfram
CurrentValue[$FrontEnd, MultilaunchWarning]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultilaunchWarning.html) for more details.