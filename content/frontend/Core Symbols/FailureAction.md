# FailureAction

`FailureAction` is an option to Query and related functions that determines what should happen when a failure or message is generated.

## Examples

Ignore failures and continue:

```wolfram
Query[All, "key", FailureAction -> None][{<|"key" -> 1|>, <||>}]
(* {1, Missing["KeyAbsent", "key"]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FailureAction.html) for more details.*