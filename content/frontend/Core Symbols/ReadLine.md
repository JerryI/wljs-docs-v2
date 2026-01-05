# ReadLine

`ReadLine[stream]` reads a line of text from a stream and returns it as a string.

`ReadLine[proc]` reads a line from an external process.

## Examples

Read a line from a file:

```wolfram
stream = OpenRead["file.txt"];
ReadLine[stream]
(* "first line of file" *)
```

Close the stream when done:

```wolfram
Close[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReadLine.html) for more details.*