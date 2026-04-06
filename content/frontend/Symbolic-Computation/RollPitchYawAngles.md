---
title: RollPitchYawAngles
---

`RollPitchYawAngles[r]` gives the roll-pitch-yaw angles {α, β, γ} corresponding to the rotation matrix r.

- `RollPitchYawAngles[r, {a, b, c}]` gives the roll-pitch-yaw angles {α, β, γ} corresponding to rotation order {a, b, c}.

## Examples

Get angles from rotation matrix:
```wolfram
RollPitchYawAngles[RotationMatrix[Pi/4, {0, 0, 1}]]
```

Specify rotation order:
```wolfram
RollPitchYawAngles[rotMatrix, {3, 2, 1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RollPitchYawAngles.html) for more details.