# TestID

`TestID` is an option to `TestCreate`, `VerificationTest` and `IntermediateTest` that specifies a string used as an identifier for the test.

## Examples

```wolfram
VerificationTest[1 + 1, 2, TestID -> "BasicAddition"]
```

```wolfram
TestCreate[True, TestID -> "MyTest"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TestID.html) for more details.*