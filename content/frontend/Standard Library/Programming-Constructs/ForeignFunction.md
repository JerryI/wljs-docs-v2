# ForeignFunction

`ForeignFunction[args]` represents a function that has been loaded from a library.

## Examples

Load a foreign function from a library:

```wolfram
lib = FindLibrary["mylib"];
fun = ForeignFunctionLoad[lib, "my_function", {"Integer64"} -> "Integer64"]
```

Call the loaded function:

```wolfram
fun[42]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ForeignFunction.html) for more details.*