# ProcessEnvironment

`ProcessEnvironment` is an option specifying the initial settings of environment variables to use when executing a process in functions like `StartProcess` and `RunProcess`.

## Examples

```wolfram
RunProcess[{"printenv", "MY_VAR"}, ProcessEnvironment -> <|"MY_VAR" -> "hello"|>]
```

```wolfram
StartProcess["bash", ProcessEnvironment -> <|"PATH" -> "/usr/bin"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessEnvironment.html) for more details.*