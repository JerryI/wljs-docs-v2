# RandomTime

`RandomTime[]` gives a pseudorandom time of day.

- `RandomTime[{timemin, timemax}]` gives a pseudorandom time between the times timemin and timemax.
- `RandomTime[time]` gives a pseudorandom time between the start and end of the time period time.
- `RandomTime[quantity]` gives a pseudorandom time between now and the time quantity duration from now.
- `RandomTime[range, n]` gives a list of n pseudorandom times.

## Examples

```wolfram
RandomTime[]
```

```wolfram
RandomTime[{TimeObject[{9, 0}], TimeObject[{17, 0}]}, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomTime.html) for more details.*