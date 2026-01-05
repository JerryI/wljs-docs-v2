# IntegerDigits

`IntegerDigits[n]` gives a list of the decimal digits in the integer n.

`IntegerDigits[n, b]` gives the digits in base b.

`IntegerDigits[n, b, len]` pads the list on the left with zeros to give a list of length len.

## Examples

Get decimal digits:

```wolfram
IntegerDigits[12345]
(* {1, 2, 3, 4, 5} *)
```

Binary representation:

```wolfram
IntegerDigits[42, 2]
(* {1, 0, 1, 0, 1, 0} *)
```

Pad to fixed length:

```wolfram
IntegerDigits[42, 2, 8]
(* {0, 0, 1, 0, 1, 0, 1, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntegerDigits.html) for more details.*