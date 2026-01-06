# Censoring

`Censoring[t,c]` represents a censored event time t with censoring c.

`Censoring[{t1,t2,…},c]` represents a vector of censored event times ti with censoring c.

`Censoring[{t1,t2,…},{c1,c2,…}]` represents a vector of event times ti with corresponding censoring ci.

## Examples

Create a right-censored event:

```wolfram
Censoring[5, "Right"]
(* Censoring[5, "Right"] *)
```

Create multiple censored events:

```wolfram
Censoring[{3, 5, 7}, {"Right", "Left", "Interval"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Censoring.html) for more details.*