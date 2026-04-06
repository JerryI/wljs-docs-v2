---
title: Now
---

`Now` gives a `DateObject` representing the current moment in time, including date and time.

## Examples

Get the current time:

```wolfram
Now
(* DateObject[{2025, 1, 15, 14, 30, 45.123}, "Instant", ...] *)

(* Extract components *)
DateValue[Now, "Hour"]

(* Time arithmetic *)
Now + Quantity[1, "Hours"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Now.html) for more details.