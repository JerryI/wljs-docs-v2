# NetEncoder

`NetEncoder["name"]` represents an encoder that takes a given form of input and encodes it as an array for use in a net.

- `NetEncoder[{"name", ...}]` represents an encoder with additional parameters specified.

## Examples

```wolfram
NetEncoder["Image"]
```

```wolfram
NetEncoder[{"Image", 224}]
```

```wolfram
NetEncoder[{"Class", {"cat", "dog", "bird"}}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetEncoder.html) for more details.*