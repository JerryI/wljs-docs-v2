---
title: Predict
---

`Predict[{in1->out1,in2->out2,…}]` generates a PredictorFunction that attempts to predict outi from the example ini.

`Predict[data,input]` attempts to predict the output associated with input from the training examples given.

`Predict[data,input,prop]` computes the specified property prop relative to the prediction.

## Examples

Train a predictor on example data:

```wolfram
p = Predict[{1 -> 1, 2 -> 4, 3 -> 9, 4 -> 16}]
(* PredictorFunction[...] *)
```

Use the predictor:

```wolfram
p[5]
(* 25. *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Predict.html) for more details.