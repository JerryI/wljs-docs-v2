# EchoTiming

`EchoTiming[expr]` evaluates expr, prints the time in seconds used and returns the result.

`EchoTiming[expr, label]` prints the timing prepending label.

## Examples

Time an expression:

```wolfram
EchoTiming[Sum[i^2, {i, 1000000}]]
(* prints timing, returns 333333833333500000 *)
```

With label:

```wolfram
EchoTiming[Sort[RandomReal[1, 100000]], "sort time: "]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EchoTiming.html) for more details.*