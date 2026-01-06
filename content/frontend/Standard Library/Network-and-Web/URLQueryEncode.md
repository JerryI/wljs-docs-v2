# URLQueryEncode

`URLQueryEncode[<|key1 -> val1, key2 -> val2, ...|>]` creates a URL-style query string from an association of keys and values.

- `URLQueryEncode[{param1 -> val1, param2 -> val1, ...}]` creates a query string from a list of rules.

## Examples

```wolfram
URLQueryEncode[<|"name" -> "John", "age" -> "30"|>]
(* "name=John&age=30" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLQueryEncode.html) for more details.*