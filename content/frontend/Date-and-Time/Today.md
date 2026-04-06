---
title: Today
---

`Today` gives a `DateObject` representing the current day (without time).

## Examples

Get today's date:

```wolfram
Today
(* DateObject[{2025, 1, 15}, "Day", ...] *)

(* Days until a date *)
DateDifference[Today, {2025, 12, 31}]

(* Date arithmetic *)
Today + Quantity[7, "Days"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Today.html) for more details.