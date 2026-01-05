# MovingMap

`MovingMap[f,data,w]` applies f to size w windows in the specified data.

`MovingMap[f,data,wspec]` uses windows specified by wspec.

`MovingMap[f,data,wspec,padding]` pads data using padding.

## Examples

Compute a moving average:

```wolfram
MovingMap[Mean, {1, 2, 3, 4, 5, 6}, 3]
(* {2, 3, 4, 5} *)
```

Apply a function to sliding windows:

```wolfram
MovingMap[Total, Range[10], 4]
(* {10, 14, 18, 22, 26, 30, 34} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MovingMap.html) for more details.*