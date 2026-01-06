# Direction

`Direction` is an option for `Limit` and related functions that specifies the direction in which the limit is taken.

## Examples

Limit from the right:

```wolfram
Limit[1/x, x -> 0, Direction -> "FromAbove"]
(* Infinity *)
```

Limit from the left:

```wolfram
Limit[1/x, x -> 0, Direction -> "FromBelow"]
(* -Infinity *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Direction.html) for more details.*