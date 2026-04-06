---
title: RandomDate
---

`RandomDate[]` gives a pseudorandom date in the current calendar year.

- `RandomDate[{datemin, datemax}]` gives a pseudorandom date between the dates datemin and datemax.
- `RandomDate[date]` gives a pseudorandom date between the start and end of the calendar period date.
- `RandomDate[quantity]` gives a pseudorandom date between now and the time quantity duration from now.
- `RandomDate[range, n]` gives a list of n pseudorandom dates.

## Examples

```wolfram
RandomDate[]
```

```wolfram
RandomDate[{DateObject[{2020, 1, 1}], DateObject[{2023, 12, 31}]}, 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomDate.html) for more details.