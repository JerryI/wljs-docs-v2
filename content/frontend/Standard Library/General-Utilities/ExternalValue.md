# ExternalValue

`ExternalValue[sys,"sym"]` gives the value of "sym" in external evaluator sys. 

`ExternalValue[session,"sym"]` gives the value of "sym" in the specified external session.

## Examples

```wolfram
(* Get a Python variable value *)
session = StartExternalSession["Python"];
ExternalEvaluate[session, "x = 42"];
ExternalValue[session, "x"]

(* Get system-level values *)
ExternalValue["Python", "sys.version"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalValue.html) for more details.*