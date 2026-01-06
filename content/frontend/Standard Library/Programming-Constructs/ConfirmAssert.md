---
title: ConfirmAssert
---

`ConfirmAssert[test]` confirms that test is True, otherwise throwing an error to the nearest surrounding Enclose.

`ConfirmAssert[test, info]` evaluates info and includes its value in the thrown error if test is not True.

`ConfirmAssert[test, info, tag]` uses the specified tag for any thrown errors.

## Examples

```wolfram
Enclose[ConfirmAssert[2 + 2 == 4]; "passed"]
(* "passed" *)
```

```wolfram
Enclose[ConfirmAssert[1 > 2, "check failed"]]
(* Failure[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConfirmAssert.html) for more details.*