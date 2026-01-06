---
title: LocalObject
---

`LocalObject[]` represents a new anonymous local object.

- `LocalObject["file:///..."]` represents a local object with a given file path.
- `LocalObject["relpath"]` represents a local object with the given relative path.
- `LocalObject["relpath", "lbase"]` represents a local object relative to the base lbase.

## Examples

Create anonymous object:

```wolfram
obj = LocalObject[]
```

Store data:

```wolfram
Put[{1, 2, 3}, obj]
```

Retrieve data:

```wolfram
Get[obj]
```

With file path:

```wolfram
LocalObject["file:///tmp/mydata"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalObject.html) for more details.*