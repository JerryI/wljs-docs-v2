# Slot

`#` (or `#1`) represents the first argument in a pure function. `#n` represents the nth argument. `#name` accesses keys in associations.

## Examples

Use slots in pure functions:

```wolfram
(* First argument *)
(#^2 &)[5]
(* 25 *)

(* Multiple arguments *)
(#1 + #2 &)[3, 4]
(* 7 *)

(* Named slots with associations *)
(#name &)[<|"name" -> "Alice", "age" -> 30|>]
(* "Alice" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Slot.html) for more details.*