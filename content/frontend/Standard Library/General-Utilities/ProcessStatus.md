---
title: ProcessStatus
---

`ProcessStatus[proc]` gives the current status of the external process represented by the ProcessObject proc.

`ProcessStatus[proc, "status"]` returns True if the process has the status given, and returns False otherwise.

## Examples

Check if a process is running:

```wolfram
proc = StartProcess[{"sleep", "10"}];
ProcessStatus[proc]
(* "Running" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessStatus.html) for more details.*