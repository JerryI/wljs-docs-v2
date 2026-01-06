# Lookup

`Lookup[assoc, key]` looks up the value associated with `key` in the association. `Lookup[assoc, key, default]` returns `default` if the key is missing.

## Examples

Look up values in an association:

```wolfram
assoc = <|"a" -> 1, "b" -> 2, "c" -> 3|>

Lookup[assoc, "b"]
(* 2 *)

(* With default value *)
Lookup[assoc, "missing", 0]
(* 0 *)

(* Multiple keys *)
Lookup[assoc, {"a", "c"}]
(* {1, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Lookup.html) for more details.*