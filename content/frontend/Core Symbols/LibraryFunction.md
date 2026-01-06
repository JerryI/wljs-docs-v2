# LibraryFunction

`LibraryFunction[args]` represents a function that has been loaded from a Wolfram Library.

LibraryFunction objects provide a way to call compiled C/C++ code from Wolfram Language.

## Examples

```wolfram
LibraryFunctionLoad[lib, "functionName", {Integer, Real}, Real]
```

```wolfram
fun = LibraryFunctionLoad["demo", "add_numbers", {Integer, Integer}, Integer]
fun[3, 5]
```

```wolfram
LibraryFunctionInformation[libraryFunction]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LibraryFunction.html) for more details.*