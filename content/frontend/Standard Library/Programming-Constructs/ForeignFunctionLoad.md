# ForeignFunctionLoad

`ForeignFunctionLoad[lib, fun, {argtype1, argtype2, ...} -> rettype]` loads the function fun with the specified argument and output types from the library lib.

- `ForeignFunctionLoad[ptr, {argtype1, argtype2, ...} -> rettype]` creates a foreign function from the function pointer ptr.

## Examples

Load a C function from a shared library:

```wolfram
lib = FindLibrary["m"];
sqrt = ForeignFunctionLoad[lib, "sqrt", {"Real64"} -> "Real64"]
```

Call the loaded function:

```wolfram
sqrt[2.0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ForeignFunctionLoad.html) for more details.*