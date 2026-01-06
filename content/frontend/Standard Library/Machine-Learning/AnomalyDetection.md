# AnomalyDetection

`AnomalyDetection[{example1, example2, ...}]` generates an `AnomalyDetectorFunction[...]` based on the examples given.

`AnomalyDetection[LearnedDistribution[...]]` generates an anomaly detector based on the given distribution.

## Examples

Train an anomaly detector:

```wolfram
detector = AnomalyDetection[{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}];
detector[100]
(* True (anomaly) *)
```

Check if a value is anomalous:

```wolfram
detector[5]
(* False (normal) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnomalyDetection.html) for more details.*