---
title: TestResultObject
---

`TestResultObject[...]` gives an object that represents the results of a `VerificationTest`.

## Examples

Run a verification test and get the result object:
```wolfram
result = VerificationTest[1 + 1 == 2];
result["Outcome"]
```

Check test properties:
```wolfram
result["ExpectedOutput"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TestResultObject.html) for more details.*