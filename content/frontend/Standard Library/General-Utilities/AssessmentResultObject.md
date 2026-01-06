# AssessmentResultObject

`AssessmentResultObject[assoc]` represents the results of an assessment.

`AssessmentResultObject[{aro1, aro2, ...}]` represents a collection of many assessments.

## Examples

Create an assessment and get results:

```wolfram
af = AssessmentFunction[42];
result = af[42]
(* AssessmentResultObject[...] *)
```

Check the result:

```wolfram
result["Correct"]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssessmentResultObject.html) for more details.*