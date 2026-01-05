# ReadString

`ReadString["file"]` reads the complete contents of a file as a string.

`ReadString[stream]` reads everything from a stream.

`ReadString[src, term]` reads until the terminator is encountered.

## Examples

Read entire file:

```wolfram
ReadString["myfile.txt"]
(* "contents of file..." *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReadString.html) for more details.*