---
title: AutocompletionFunction
---

`AutocompletionFunction[...]` represents a function to be applied to a string to generate possible completions.

## Examples

Create an autocompletion function:

```wolfram
acf = Autocomplete[{"hello", "help", "world"}];
acf["hel"]
(* {"hello", "help"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AutocompletionFunction.html) for more details.