---
title: AbsoluteDashing
---

`AbsoluteDashing[{d1, d2, ...}]` is a graphics directive which specifies that lines which follow are to be drawn dashed, with successive segments having absolute lengths d1, d2, ... (repeated cyclically).

`AbsoluteDashing[d]` is equivalent to `AbsoluteDashing[{d, d}]`.

`AbsoluteDashing[{d1, d2, ...}, offset]` offsets the dashes by offset.

`AbsoluteDashing[{d1, d2, ...}, offset, capform]` sets the `CapForm` for individual dashes to capform.

## Examples

```wolfram
Graphics[{AbsoluteDashing[{10, 5}], Line[{{0, 0}, {2, 1}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsoluteDashing.html) for more details.*