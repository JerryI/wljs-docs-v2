# ActiveClassificationObject

`ActiveClassificationObject[...]` represents the result of an `ActiveClassification` process.

## Examples

Create an active classification object and query its properties:

```wolfram
obj = ActiveClassification[If[# > 0.5, "A", "B"] &, {0.1, 0.9}];
obj["TrainingExamples"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ActiveClassificationObject.html) for more details.*