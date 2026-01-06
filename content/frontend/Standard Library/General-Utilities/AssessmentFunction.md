# AssessmentFunction

`AssessmentFunction[key]` represents a tool for assessing whether answers are correct according to the key.

`AssessmentFunction[key, method]` uses the specified answer comparison method.

`AssessmentFunction[key, f]` uses the function f to compare answers with the key.

## Examples

Create a simple assessment:

```wolfram
af = AssessmentFunction[42];
af[42]
(* AssessmentResultObject[<|..., "Correct" -> True, ...|>] *)
```

Assessment with comparison function:

```wolfram
af = AssessmentFunction["hello", StringMatchQ];
af["HELLO"]["Correct"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssessmentFunction.html) for more details.*