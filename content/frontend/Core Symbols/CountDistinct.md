# CountDistinct

`CountDistinct[list]` gives the number of distinct elements that appear in list.

`CountDistinct[list, test]` applies test to pairs of elements to determine whether they should be considered equivalent.

## Examples

Count distinct elements:

```wolfram
CountDistinct[{a, b, a, c, a, b}]
(* 3 *)
```

With duplicates:

```wolfram
CountDistinct[{1, 1, 1, 2, 2, 3}]
(* 3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CountDistinct.html) for more details.*