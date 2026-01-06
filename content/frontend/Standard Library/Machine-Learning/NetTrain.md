---
title: NetTrain
---

`NetTrain[net, {input1 -> output1, input2 -> output2, ...}]` trains the specified neural net by giving the inputi as input and minimizing the discrepancy between the outputi and the actual output of the net, using an automatically chosen loss function.

- `NetTrain[net, <|port1 -> {data11, data12, ...}, port2 -> {...}, ...|>]` trains the specified net by supplying training data at the specified ports.
- `NetTrain[net, "dataset"]` trains on a named dataset from the Wolfram Data Repository.
- `NetTrain[net, f]` calls the function f during training to produce batches of training data.
- `NetTrain[net, data, "prop"]` gives data associated with a specific property prop of the training session.
- `NetTrain[net, data, All]` gives a `NetTrainResultsObject[...]` that summarizes information about the training session.

## Examples

```wolfram
net = NetChain[{LinearLayer[10], Ramp, LinearLayer[1]}];
trained = NetTrain[net, {Range[10] -> 1, Range[10, 20] -> 2}]
```

```wolfram
NetTrain[NetChain[{5, Ramp, 1}], data, MaxTrainingRounds -> 100]
```

```wolfram
NetTrain[net, trainingData, All]["FinalLoss"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetTrain.html) for more details.*