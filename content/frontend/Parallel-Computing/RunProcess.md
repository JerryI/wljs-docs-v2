---
title: RunProcess
---

`RunProcess["command"]` runs the specified external command, returning information on the outcome.

`RunProcess[{"command", arg1, arg2, ...}]` runs the specified command, with command-line arguments.

`RunProcess[command, "prop"]` returns only the specified property.

## Examples

Run a command and get output:

```wolfram
RunProcess[{"echo", "Hello"}]["StandardOutput"]
(* "Hello\n" *)
```

Get exit code:

```wolfram
RunProcess[{"ls", "-la"}]["ExitCode"]
(* 0 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RunProcess.html) for more details.