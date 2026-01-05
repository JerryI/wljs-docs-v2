# ExportString

`ExportString[expr, "format"]` generates a string of expr in the specified format.

## Examples

Export to JSON string:

```wolfram
ExportString[{1, 2, 3}, "JSON"]
(* "[1, 2, 3]" *)
```

Export to CSV:

```wolfram
ExportString[{{1, 2}, {3, 4}}, "CSV"]
(* "1,2\n3,4" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExportString.html) for more details.*