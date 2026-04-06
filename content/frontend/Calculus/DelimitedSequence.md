---
title: DelimitedSequence
---

`DelimitedSequence[form]` represents a delimited sequence of elements of the specified form in Interpreter and related functions.

`DelimitedSequence[form,sep]` assumes a separator that matches sep.

`DelimitedSequence[form,{left,sep,right}]` assumes left and right delimiters matching left and right, respectively.

## Examples

Parse a comma-separated list of integers:

```wolfram
Interpreter[DelimitedSequence["Integer"]]["1, 2, 3, 4"]
(* {1, 2, 3, 4} *)
```

Use a custom separator:

```wolfram
Interpreter[DelimitedSequence["Word", ";"]]["apple;banana;cherry"]
(* {"apple", "banana", "cherry"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DelimitedSequence.html) for more details.