---
title: ClassifierInformation
---

`ClassifierInformation[classifier]` generates a report giving information on the classifier function.

`ClassifierInformation[classifier, prop]` gives information associated with property prop.

## Examples

Get information about a classifier:

```wolfram
cf = Classify[{1 -> "a", 2 -> "b", 3 -> "a"}];
ClassifierInformation[cf]
```

Get specific properties:

```wolfram
ClassifierInformation[cf, "Classes"]
(* {"a", "b"} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClassifierInformation.html) for more details.