# FromRawPointer

`FromRawPointer[p]` returns the value referred to by the pointer p for use in compiled code.

- `FromRawPointer[array, offset]` returns the value of a C array at an offset.

## Examples

Read from a raw pointer in compiled code:

```wolfram
FunctionCompile[
  Function[{Typed[ptr, "RawPointer"::["Integer64"]]},
    FromRawPointer[ptr]
  ]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromRawPointer.html) for more details.*