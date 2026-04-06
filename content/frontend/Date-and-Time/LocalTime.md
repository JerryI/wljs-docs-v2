---
title: LocalTime
---

`LocalTime[]` gives a DateObject corresponding to the current local time at the current geo location.

- `LocalTime[loc]` gives the current local time at the geo location specified by loc.
- `LocalTime[loc, time]` gives the local time corresponding to the date object time at the geo location loc.
- `LocalTime[loc, time, func]` uses func to determine what to return for extended geographic regions.

## Examples

Get the current local time:

```wolfram
LocalTime[]
```

Get the current time in New York:

```wolfram
LocalTime[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
```

Convert a time to a different location:

```wolfram
LocalTime[Entity["City", {"Tokyo", "Tokyo", "Japan"}], Now]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalTime.html) for more details.