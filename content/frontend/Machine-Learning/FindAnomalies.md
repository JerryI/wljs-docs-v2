---
title: FindAnomalies
---

`FindAnomalies[{example1,example2,…}]` gives a list of the examplei that are considered anomalous with respect to the other examples.

- `FindAnomalies[examples,prop]` gives the specified property related to the anomaly computation.
- `FindAnomalies[examples,{prop1,prop2,…}]` gives the properties propi.
- `FindAnomalies[fun,data]` finds anomalies in data using the given AnomalyDetectorFunction[…] or LearnedDistribution[…].
- `FindAnomalies[fun,data,props]` gives properties related to the anomaly computation.

## Examples

```wolfram
(* Find anomalies in numeric data *)
data = {1, 2, 2, 3, 100, 2, 3, 1};
FindAnomalies[data]

(* Get anomaly positions *)
FindAnomalies[data, "AnomalyPositions"]

(* Find anomalies in images *)
FindAnomalies[imageList]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindAnomalies.html) for more details.