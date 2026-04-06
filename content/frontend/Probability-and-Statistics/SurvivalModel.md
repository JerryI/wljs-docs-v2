---
title: SurvivalModel
---

`SurvivalModel[...]` represents the symbolic survival model obtained from functions like SurvivalModelFit.

## Examples

Fit a survival model:

```wolfram
data = {{1, 1}, {2, 0}, {3, 1}, {5, 1}};
model = SurvivalModelFit[data]
```

Get survival function:

```wolfram
model["SurvivalFunction"]
```

Plot survival curve:

```wolfram
Plot[model["SurvivalFunction"][t], {t, 0, 10}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SurvivalModel.html) for more details.