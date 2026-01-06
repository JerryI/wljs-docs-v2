# FindExternalEvaluators

`FindExternalEvaluators[]` finds installed external evaluators that can be used with ExternalEvaluate, returning a dataset of the results found.

`FindExternalEvaluators["sys"]` finds only external evaluators for language or system sys.

## Examples

```wolfram
(* Find all available external evaluators *)
FindExternalEvaluators[]

(* Find Python evaluators *)
FindExternalEvaluators["Python"]

(* Find R evaluators *)
FindExternalEvaluators["R"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindExternalEvaluators.html) for more details.*