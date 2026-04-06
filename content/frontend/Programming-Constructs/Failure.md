---
title: Failure
---

`Failure["tag", assoc]` represents a failure of a type indicated by tag, with details in the association.

## Examples

Create a failure object:

```wolfram
Failure["MyError", <|"MessageTemplate" -> "Something went wrong"|>]
(* Failure["MyError", <|"MessageTemplate" -> "Something went wrong"|>] *)
```

Test for failure:

```wolfram
FailureQ[Failure["Error", <||>]]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Failure.html) for more details.