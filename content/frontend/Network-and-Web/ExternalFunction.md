---
title: ExternalFunction
---

`ExternalFunction[sys,"f"]` represents an external function named "f" defined in the external evaluator sys.

- `ExternalFunction[session,"f"]` represents an external function "f" in the specified ExternalSessionObject.
- `ExternalFunction[sys,"code"]` represents an external function defined by the code fragment "code".
- `ExternalFunction[obj,"method"]` represents a method bound to the ExternalObject.

## Examples

```wolfram
(* Create an external function from Python code *)
pyAdd = ExternalFunction["Python", "lambda x, y: x + y"];
pyAdd[3, 5]

(* Use a named Python function *)
pyLen = ExternalFunction["Python", "len"];
pyLen["hello"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalFunction.html) for more details.