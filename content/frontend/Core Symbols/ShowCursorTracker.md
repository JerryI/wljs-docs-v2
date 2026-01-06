# ShowCursorTracker

`ShowCursorTracker` is an option for `Cell` that specifies whether an elliptical spot should appear momentarily to guide the eye if the cursor position jumps.

## Examples

Enable cursor tracker:
```wolfram
Cell["text", ShowCursorTracker -> True]
```

Disable cursor tracking:
```wolfram
SetOptions[EvaluationNotebook[], ShowCursorTracker -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShowCursorTracker.html) for more details.*