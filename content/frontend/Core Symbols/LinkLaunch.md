# LinkLaunch

`LinkLaunch["prog"]` starts the external program prog and opens a WSTP connection to it.

## Examples

Launch a secondary kernel:

```wolfram
link = LinkLaunch[First[$CommandLine] <> " -mathlink"]
(* LinkObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkLaunch.html) for more details.*