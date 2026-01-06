# DatabinUpload

`DatabinUpload[bin, {entry1, entry2, ...}]` bulk uploads all the entries entryi to a databin.

`DatabinUpload[bin, EventSeries[...]]` bulk uploads all entries in an event series to a databin.

## Examples

Upload multiple entries:

```wolfram
DatabinUpload[bin, {{"a" -> 1}, {"a" -> 2}, {"a" -> 3}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DatabinUpload.html) for more details.*