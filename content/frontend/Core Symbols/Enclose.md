# Enclose

`Enclose[expr]` evaluates expr and returns the result, but catches any errors from `Confirm` and returns a `Failure` object.

## Examples

Basic error handling:

```wolfram
Enclose[
  x = Confirm[1/0];
  x + 1
]
(* Failure[...] *)
```

Successful evaluation:

```wolfram
Enclose[
  x = Confirm[5];
  x + 1
]
(* 6 *)
```

Handle failure:

```wolfram
Enclose[computation[], "Message" &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Enclose.html) for more details.*