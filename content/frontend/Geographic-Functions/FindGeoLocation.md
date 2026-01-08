---
title: FindGeoLocation
---

`FindGeoLocation[]` attempts to find the current geo location of your computer.

- `FindGeoLocation["ip"]` gives an estimate of the geo location associated with the IP address given.
- `FindGeoLocation["address"]` attempts to find the geo location associated with the street address given.
- `FindGeoLocation[entity]` gives the geo location associated with the specified entity.

## Examples

```wolfram
(* Get current location *)
FindGeoLocation[]

(* Find location from address *)
FindGeoLocation["1600 Pennsylvania Ave, Washington DC"]

(* Find location from IP *)
FindGeoLocation["8.8.8.8"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGeoLocation.html) for more details.