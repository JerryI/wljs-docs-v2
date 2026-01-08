---
title: SetStreamPosition
---

`SetStreamPosition[stream, n]` sets the current point in an open stream.

## Examples

Set stream position to the beginning:

```wolfram
stream = OpenRead["file.txt"];
SetStreamPosition[stream, 0]
```

Move to a specific byte position:

```wolfram
SetStreamPosition[stream, 100]
```

Read from a specific position:

```wolfram
SetStreamPosition[stream, 50];
ReadLine[stream]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetStreamPosition.html) for more details.