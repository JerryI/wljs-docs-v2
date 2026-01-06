# IntegerString

`IntegerString[n]` gives a string consisting of the decimal digits in integer n.

`IntegerString[n, b]` gives a string in base b.

`IntegerString[n, b, len]` pads with zeros to length len.

## Examples

Decimal string:

```wolfram
IntegerString[255]
(* "255" *)
```

Hexadecimal string:

```wolfram
IntegerString[255, 16]
(* "ff" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntegerString.html) for more details.*