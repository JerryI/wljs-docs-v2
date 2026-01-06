# ObservableModelQ

`ObservableModelQ[sys]` gives `True` if the system *sys* is observable, and `False` otherwise.

- `ObservableModelQ[{sys, sub}]` gives `True` if the subsystem *sub* is observable.

## Examples

```wolfram
ObservableModelQ[StateSpaceModel[{{0, 1}, {-1, 0}}, {{0}, {1}}, {{1, 0}}, {{0}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ObservableModelQ.html) for more details.*