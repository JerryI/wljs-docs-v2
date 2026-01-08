---
title: DateString
---

`DateString[]` gives the current date and time as a string. `DateString[date, format]` formats a date according to specified elements.

## Examples

Format dates as strings:

```wolfram
DateString[]
(* "Wed 15 Jan 2025 14:30:00" *)

(* Custom format *)
DateString[Now, {"Year", "-", "Month", "-", "Day"}]
(* "2025-01-15" *)

(* ISO format *)
DateString[Now, "ISODate"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateString.html) for more details.