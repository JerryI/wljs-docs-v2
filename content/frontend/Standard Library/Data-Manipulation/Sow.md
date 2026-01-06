# Sow

`Sow[e]` specifies that e should be collected by the nearest enclosing Reap.

`Sow[e, tag]` specifies that e should be collected by the nearest enclosing Reap whose pattern matches tag.

`Sow[e, {tag1, tag2, ...}]` specifies that e should be collected once for each pattern that matches a tagi.

## Examples

Collect values with Reap and Sow:

```wolfram
Reap[Do[Sow[i^2], {i, 5}]]
(* {Null, {{1, 4, 9, 16, 25}}} *)
```

Use tags to separate values:

```wolfram
Reap[Do[Sow[i, If[EvenQ[i], "even", "odd"]], {i, 6}], {"even", "odd"}]
(* {Null, {{{2, 4, 6}}, {{1, 3, 5}}}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sow.html) for more details.*