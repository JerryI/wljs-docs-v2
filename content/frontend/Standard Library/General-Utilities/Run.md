---
title: Run
---

`Run["command"]` runs command as an external OS command, returning the exit code.

## Examples

Run a command:

```wolfram
Run["ls -la"]
(* 0 *)
```

Exit code 0 indicates success:

```wolfram
Run["echo 'Hello World'"]
(* 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Run.html) for more details.*