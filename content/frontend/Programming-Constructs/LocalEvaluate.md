---
title: LocalEvaluate
---

`LocalEvaluate[expr]` gives the result of evaluating expr using your current default local Wolfram Language kernel.

- `LocalEvaluate[ker, expr]` gives the result of evaluating expr using the kernel specified by ker.
- `LocalEvaluate[{ker1, ker2, ...}, expr]` gives a list of the results of evaluating expr using each of the kernels keri.
- `LocalEvaluate[ker, expr, h]` wraps the head h around the result produced before returning it.

## Examples

```wolfram
LocalEvaluate[1 + 1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalEvaluate.html) for more details.