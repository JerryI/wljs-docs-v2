# AudioQ

`AudioQ[audio]` yields True if audio has the form of a valid Audio object, and False otherwise.

## Examples

Test for valid audio:

```wolfram
AudioQ[ExampleData[{"Audio", "Bird"}]]
(* True *)
```

```wolfram
AudioQ["not audio"]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioQ.html) for more details.*