---
title: SequenceReplace
---

`SequenceReplace[list, rules]` replaces sequences in list according to the specified rule or list of rules.

`SequenceReplace[list, rules, n]` does only the first n replacements.

`SequenceReplace[rules]` represents an operator form that can be applied to an expression.

## Examples

Replace a sequence:

```wolfram
SequenceReplace[{a, b, c, d}, {a, b} -> x]
(* {x, c, d} *)
```

Replace all consecutive pairs:

```wolfram
SequenceReplace[{1, 2, 3, 4}, {x_, y_} -> x + y]
(* {3, 7} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceReplace.html) for more details.