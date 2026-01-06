---
title: PreviousDate
---

`PreviousDate[gran]` gives the previously occurring date of the specified granularity type gran.

`PreviousDate[daytype]` gives the previous day corresponding to the specified daytype.

`PreviousDate[date,gran]` gives the previous date of the given granularity relative to the specified date.

## Examples

```wolfram
PreviousDate["Month"]
(* DateObject[...] *)
```

```wolfram
PreviousDate[Friday]
(* DateObject for the previous Friday *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PreviousDate.html) for more details.*