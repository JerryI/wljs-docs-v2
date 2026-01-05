# FilterRules

`FilterRules[rules, pattern]` selects rules whose left-hand sides match the pattern. Useful for passing options to functions.

## Examples

Filter option rules:

```wolfram
opts = {PlotRange -> All, Frame -> True, Color -> Red}

(* Get only Plot options *)
FilterRules[opts, Options[Plot]]
(* {PlotRange -> All, Frame -> True} *)

(* Filter by specific names *)
FilterRules[opts, Frame]
(* {Frame -> True} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FilterRules.html) for more details.*