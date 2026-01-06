# Find

`Find[stream,"text"]` finds the first line in an input stream that contains the specified string. 

`Find[stream,{"text1","text2",…}]` finds the first line that contains any of the specified strings. 

## Examples

```wolfram
(* Open a file and find a line *)
stream = OpenRead["data.txt"];
Find[stream, "error"]
Close[stream]

(* Find line containing any of several strings *)
stream = OpenRead["log.txt"];
Find[stream, {"warning", "error", "critical"}]
Close[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Find.html) for more details.*