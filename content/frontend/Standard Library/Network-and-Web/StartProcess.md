---
title: StartProcess
---

`StartProcess["executable"]` executes an external program, yielding a ProcessObject to represent the resulting subprocess.

`StartProcess[{"executable", arg1, arg2, ...}]` executes an external program, passing it the specified arguments.

## Examples

Start a process:

```wolfram
proc = StartProcess[{"sleep", "5"}]
(* ProcessObject[...] *)
```

Check process status:

```wolfram
ProcessStatus[proc]
(* "Running" or "Finished" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartProcess.html) for more details.*