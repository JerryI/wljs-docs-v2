---
title: DeleteAnomalies
---

`DeleteAnomalies[{example1, example2, ...}]` gives a list in which examplei that are considered anomalous have been dropped.

`DeleteAnomalies[fun, data]` drops anomalies in data using the given `AnomalyDetectorFunction[...]` or `LearnedDistribution[...]`.

## Examples

Delete anomalies from data:

```wolfram
DeleteAnomalies[{1, 2, 3, 100, 4, 5}]
(* {1, 2, 3, 4, 5} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteAnomalies.html) for more details.