---
title: VerificationTest
---

`VerificationTest[input]` runs a verification test to determine whether input evaluates to True.

`VerificationTest[input, expected]` tests whether input evaluates to expected, without issuing messages.

`VerificationTest[input, expected, messages]` tests whether input evaluates to expected, generating the list of message names messages.

## Examples

Simple test:

```wolfram
VerificationTest[2 + 2 == 4]
(* TestResultObject[...Success...] *)
```

Test expected value:

```wolfram
VerificationTest[Length[{1, 2, 3}], 3]
(* TestResultObject[...Success...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerificationTest.html) for more details.*