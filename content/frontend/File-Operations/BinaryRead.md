---
title: BinaryRead
---

`BinaryRead[stream]` reads one byte of raw binary data from an input stream, and returns an integer from 0 to 255.

`BinaryRead[stream, type]` reads an object of the specified type.

`BinaryRead[stream, {type1, type2, ...}]` reads a sequence of objects of the specified types.

## Examples

Read bytes from a stream:

```wolfram
stream = OpenRead["file.bin", BinaryFormat -> True];
BinaryRead[stream, "Integer32"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinaryRead.html) for more details.