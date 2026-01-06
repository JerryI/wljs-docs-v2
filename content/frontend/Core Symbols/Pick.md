# Pick

`Pick[list, sel]` picks out those elements of *list* for which the corresponding element of *sel* is `True`.

- `Pick[list, sel, patt]` picks out those elements of *list* for which the corresponding element of *sel* matches *patt*.

## Examples

```wolfram
Pick[{a, b, c, d}, {True, False, True, False}]
(* {a, c} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pick.html) for more details.*