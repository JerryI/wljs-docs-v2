# NearestTo

`NearestTo[x]` is an operator form that yields Nearest[elems,x] when applied to a list elems.

`NearestTo[x,n]` is an operator form that yields Nearest[elems,x,n] when applied to a list elems.

`NearestTo[x,{n,r}]` is an operator form that yields Nearest[elems,x,{n,r}] when applied to a list elems.

## Examples

Find the nearest element:

```wolfram
NearestTo[2.5][{1, 2, 3, 4, 5}]
(* {3} *)
```

Find the 3 nearest elements:

```wolfram
NearestTo[2.5, 3][{1, 2, 3, 4, 5}]
(* {3, 2, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NearestTo.html) for more details.*