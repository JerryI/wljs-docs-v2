---
title: DatePlus
---

`DatePlus[date, n]` gives the date `n` days after `date`. `DatePlus[date, {n, "unit"}]` uses specified time units.

## Examples

Add time to dates:

```wolfram
(* 10 days from now *)
DatePlus[Now, 10]

(* 3 months later *)
DatePlus[DateObject[{2024, 1, 15}], {3, "Month"}]

(* 1 year and 6 months *)
DatePlus[Today, {{1, "Year"}, {6, "Month"}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DatePlus.html) for more details.*