# NullRecords

`NullRecords` is an option for `Read` and related functions which specifies whether null records should be taken to exist between repeated record separators.

## Examples

```wolfram
Read[stream, Record, NullRecords -> True]
```

```wolfram
ReadList["file.txt", String, NullRecords -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NullRecords.html) for more details.*