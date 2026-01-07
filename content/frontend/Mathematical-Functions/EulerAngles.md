---
title: EulerAngles
---

`EulerAngles[r]` gives Euler angles {α,β,γ} corresponding to the rotation matrix r.

`EulerAngles[r,{a,b,c}]` gives Euler angles {α,β,γ} with rotation order {a,b,c}.

## Examples

Get Euler angles from a rotation matrix:

```wolfram
EulerAngles[RotationMatrix[Pi/4, {0, 0, 1}]]
(* {Pi/4, 0, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EulerAngles.html) for more details.*