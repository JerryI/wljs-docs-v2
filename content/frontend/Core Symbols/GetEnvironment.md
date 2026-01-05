# GetEnvironment

`GetEnvironment["var"]` gives the setting corresponding to the variable "var" in the operating system environment.

`GetEnvironment[{var1,var2,…}]` gives a list of rules, corresponding to specified environment variables.

`GetEnvironment[]` gives information about all existing settings in the operating system environment.

## Examples

```wolfram
GetEnvironment["HOME"]
(* "HOME" -> "/Users/username" *)
```

```wolfram
GetEnvironment[{"PATH", "USER"}]
(* {"PATH" -> "...", "USER" -> "..."} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GetEnvironment.html) for more details.*