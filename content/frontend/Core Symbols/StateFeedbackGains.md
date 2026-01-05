# StateFeedbackGains

`StateFeedbackGains[sspec,{p1,…,pn}]` gives the state feedback gains for the system specification sspec to place its closed-loop poles at pi.

`StateFeedbackGains[…,"prop"]` gives the value of the property "prop".

## Examples

Compute state feedback gains for pole placement:

```wolfram
sys = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, IdentityMatrix[2], {{0}, {0}}];
StateFeedbackGains[sys, {-1, -2}]
(* {{-1, 0}} *)
```

Get the closed-loop system:

```wolfram
StateFeedbackGains[sys, {-1, -2}, "ClosedLoopSystem"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateFeedbackGains.html) for more details.*