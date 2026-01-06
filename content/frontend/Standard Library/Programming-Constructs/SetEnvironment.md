# SetEnvironment

`SetEnvironment["var" -> value]` sets the value of an operating system environment variable.

- `SetEnvironment[{"var" -> value, ...}]` sets values for several environment variables.

## Examples

```wolfram
SetEnvironment["MY_VAR" -> "hello"]
```

```wolfram
SetEnvironment[{"PATH" -> "/usr/bin", "HOME" -> "/home/user"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetEnvironment.html) for more details.*