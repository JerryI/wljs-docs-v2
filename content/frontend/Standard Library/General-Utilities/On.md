# On

`On[symbol::tag]` switches on a message so that it can be printed (reverses `Off`).

## Examples

Re-enable a message:

```wolfram
Off[General::spell1]
(* ... later ... *)
On[General::spell1]
```

Enable tracing:

```wolfram
On[f]
(* Trace evaluations of f *)
```

Enable multiple messages:

```wolfram
On[Power::infy, General::argx]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/On.html) for more details.*