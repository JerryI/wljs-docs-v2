# Write

`Write[channel, expr1, expr2, ...]` writes the expressions expri in sequence, followed by a newline, to the specified output channel.

## Examples

Write to a file:
```wolfram
stream = OpenWrite["output.txt"];
Write[stream, "Hello", " ", "World"];
Close[stream]
```

Write multiple expressions:
```wolfram
Write[stream, {1, 2, 3}, " - ", "data"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Write.html) for more details.*