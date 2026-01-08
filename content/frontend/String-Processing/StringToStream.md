---
title: StringToStream
---

`StringToStream["string"]` opens an input stream for reading from a string.

## Examples

Create a stream from a string:

```wolfram
stream = StringToStream["Hello\nWorld"];
ReadLine[stream]
(* "Hello" *)
Close[stream]
```

Read all data:

```wolfram
stream = StringToStream["1 2 3"];
ReadList[stream, Number]
(* {1, 2, 3} *)
Close[stream]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringToStream.html) for more details.