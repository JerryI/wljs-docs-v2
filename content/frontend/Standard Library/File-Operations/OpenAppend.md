# OpenAppend

`OpenAppend["file"]` opens a file to append output to it, and returns an OutputStream object.

## Examples

Open a file for appending:

```wolfram
stream = OpenAppend["myfile.txt"]
```

Write and close:

```wolfram
WriteString[stream, "New line\n"];
Close[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OpenAppend.html) for more details.*