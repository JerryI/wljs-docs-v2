# OpenRead

`OpenRead["file"]` opens a file for reading and returns an `InputStream` object.

## Examples

Open a file for reading:

```wolfram
stream = OpenRead["data.txt"]
(* InputStream[...] *)
```

Read and close:

```wolfram
stream = OpenRead["data.txt"];
data = ReadList[stream];
Close[stream];
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OpenRead.html) for more details.*