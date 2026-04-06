---
title: MachineNumberQ
---

`MachineNumberQ[expr]` returns True if expr is a machine-precision real or complex number, and returns False otherwise.

## Examples

Test a machine-precision number:

```wolfram
MachineNumberQ[1.5]
(* True *)
```

Test an exact number:

```wolfram
MachineNumberQ[3/2]
(* False *)
```

Test a high-precision number:

```wolfram
MachineNumberQ[N[Pi, 50]]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MachineNumberQ.html) for more details.