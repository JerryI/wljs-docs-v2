---
title: FromDigits
---

`FromDigits[list]` constructs an integer from the list of its decimal digits.

`FromDigits[list, b]` takes the digits to be given in base b.

`FromDigits["string"]` constructs an integer from a string of digits.

## Examples

Construct integer from digits:

```wolfram
FromDigits[{1, 2, 3, 4, 5}]
(* 12345 *)
```

Convert from binary:

```wolfram
FromDigits[{1, 0, 1, 0, 1, 0}, 2]
(* 42 *)
```

From a string:

```wolfram
FromDigits["9876"]
(* 9876 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromDigits.html) for more details.*