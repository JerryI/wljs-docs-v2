---
title: FromUnixTime
---

`FromUnixTime[time]` gives a DateObject corresponding to a Unix time specification (seconds since January 1, 1970).

## Examples

Convert a Unix timestamp to a date:

```wolfram
FromUnixTime[0]
(* DateObject[{1970, 1, 1, 0, 0, 0}, ...] *)
```

Convert a specific timestamp:

```wolfram
FromUnixTime[1704067200]
(* DateObject[{2024, 1, 1, 0, 0, 0}, ...] *)
```

Get the current time via round-trip:

```wolfram
FromUnixTime[UnixTime[]]
(* DateObject[...] - current date/time *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromUnixTime.html) for more details.