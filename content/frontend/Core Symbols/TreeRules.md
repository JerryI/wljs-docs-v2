# TreeRules

`TreeRules[tree]` returns the rules associated with the Tree object tree.

## Examples

```wolfram
TreeRules[Tree[a, {Tree[b, {}], Tree[c, {}]}]]
(* {a -> {b, c}, b -> {}, c -> {}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeRules.html) for more details.*