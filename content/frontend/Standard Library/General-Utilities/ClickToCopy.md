---
title: ClickToCopy
---

`ClickToCopy[expr]` represents a button that copies expr whenever it is clicked.

`ClickToCopy[label,expr]` displays with label on the button.

## Examples

Create a button that copies text to clipboard:

```wolfram
ClickToCopy["Hello, World!"]
```

With a custom label:

```wolfram
ClickToCopy["Copy this code", "Print[\"Hello\"]"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClickToCopy.html) for more details.*