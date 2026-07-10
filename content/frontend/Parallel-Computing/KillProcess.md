---
title: KillProcess
---

`KillProcess[proc]` kills the external process represented by the ProcessObject proc.

## Examples

Start and kill a process:

```wolfram
proc = StartProcess[{"sleep", "100"}];
KillProcess[proc]
```

Check process status:

```wolfram
proc = StartProcess[{"ls"}];
KillProcess[proc];
ProcessStatus[proc]
(* "Finished" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KillProcess.html) for more details.