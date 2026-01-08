---
title: BinaryReadList
---

`BinaryReadList["file"]` reads all remaining bytes from a file, and returns them as a list of integers from 0 to 255.

`BinaryReadList["file", type]` reads objects of the specified type from a file until the end is reached.

`BinaryReadList["file", {type1, type2, ...}]` reads objects with a sequence of types until the end of the file.

`BinaryReadList["file", types, n]` reads only the first n objects of the specified types.

## Examples

Read all bytes from a file:

```wolfram
BinaryReadList["data.bin"]
```

Read integers:

```wolfram
BinaryReadList["data.bin", "Integer32"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinaryReadList.html) for more details.