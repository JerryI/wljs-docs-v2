# ImportString

`ImportString["data", "format"]` imports data in the specified format from a string.

`ImportString["data"]` attempts to determine the format automatically.

## Examples

Import JSON:

```wolfram
ImportString["[1, 2, 3]", "JSON"]
(* {1, 2, 3} *)
```

Import CSV:

```wolfram
ImportString["1,2\n3,4", "CSV"]
(* {{"1", "2"}, {"3", "4"}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImportString.html) for more details.*