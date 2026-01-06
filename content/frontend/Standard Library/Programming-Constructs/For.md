# For

`For[start, test, incr, body]` executes start, then repeatedly evaluates body and incr until test fails to give True.

## Example

C-style for loop:

```wolfram
For[i = 0, i < 5, i++, Print[i]]
(* Prints 0, 1, 2, 3, 4 *)
```

Note: In Wolfram Language, `Table` or `Do` are often preferred over `For` loops.

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/For.html) for more details.*