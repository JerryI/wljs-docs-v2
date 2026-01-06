# KalmanFilter

`KalmanFilter[tproc, data]` filters data using the time series model given by `tproc`.

## Examples

```wolfram
KalmanFilter[ARProcess[{0.5}, 1], RandomReal[1, 100]]
```

```wolfram
KalmanFilter[StateSpaceModel[...], timeSeries]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KalmanFilter.html) for more details.*