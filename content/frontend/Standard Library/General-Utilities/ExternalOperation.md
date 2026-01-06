---
title: ExternalOperation
---

`ExternalOperation["Eval","code"]` represents an external evaluation of "code".

- `ExternalOperation["Eval","code",assoc]` represents an external evaluation of "code" with parameters given by assoc.
- `ExternalOperation["Call",func,arg1,arg2,…]` calls the function func with the given arguments arg1, arg2, ….
- `ExternalOperation["GetAttribute",obj,"attr"]` gets the attribute "attr" of obj.
- `ExternalOperation["SetAttribute",obj,"attr",val]` sets the attribute "attr" of obj to the given value val.
- `ExternalOperation["Cast",obj,"type"]` casts obj to the given "type".
- `ExternalOperation["op", arg1,arg2,…]` represents the external operation named "op" using arguments arg1, arg2, ….

## Examples

```wolfram
(* Create an evaluation operation *)
op = ExternalOperation["Eval", "x + y", <|"x" -> 1, "y" -> 2|>];
ExternalEvaluate["Python", op]

(* Call an external function *)
ExternalEvaluate["Python", ExternalOperation["Call", "max", 3, 7, 2]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalOperation.html) for more details.*