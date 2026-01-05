# FindRepeat

`FindRepeat[list]` finds the minimal sublist or subarray that repeats to give list.

`FindRepeat[list,n]` requires that the sublist be repeated at least n times in list.

`FindRepeat[list,{n1,n2,…}]` requires ni to repeat at level i in list.

`FindRepeat["string"]` finds the minimal substring that repeats to give string.

`FindRepeat["string",n]` requires that the substring be repeated at least n times.

## Examples

Find the repeating pattern in a list:

```wolfram
FindRepeat[{a, b, a, b, a, b}]
(* {a, b} *)
```

Find the repeating substring:

```wolfram
FindRepeat["abcabcabc"]
(* "abc" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindRepeat.html) for more details.*