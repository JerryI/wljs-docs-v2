# ExpirationDate

`ExpirationDate` is an option for various functions that specifies when a persistent value should be treated as expired.

## Examples

Set an expiration date for a persistent value:

```wolfram
PersistentValue["myKey", ExpirationDate -> DateObject[{2025, 12, 31}]] = "data"
(* "data" *)
```

Use with CloudObject:

```wolfram
CloudPut["data", "file.txt", ExpirationDate -> Now + Quantity[7, "Days"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExpirationDate.html) for more details.*