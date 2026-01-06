# MinIntervalSize

`MinIntervalSize` is an option for `IntervalSlider` that specifies the minimum size of the interval during interactive editing.

## Examples

Create an interval slider with minimum interval size:
```wolfram
IntervalSlider[{0.3, 0.7}, MinIntervalSize -> 0.2]
```

Prevent the interval from becoming too small:
```wolfram
IntervalSlider[Dynamic[interval], MinIntervalSize -> 0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinIntervalSize.html) for more details.*