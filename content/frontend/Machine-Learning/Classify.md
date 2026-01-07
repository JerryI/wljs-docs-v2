---
title: Classify
---

`Classify[{in1 -> class1, in2 -> class2, ...}]` generates a ClassifierFunction that attempts to predict class from input examples.

`Classify[data, input]` attempts to predict the output associated with input from the training examples given.

`Classify[data, input, prop]` computes the specified property prop relative to the prediction.

## Examples

Train a simple classifier:

```wolfram
cf = Classify[{"cat" -> "animal", "dog" -> "animal", "apple" -> "fruit"}]
cf["banana"]
(* "fruit" *)
```

Get classification probabilities:

```wolfram
cf["grape", "Probabilities"]
(* <|"animal" -> 0.1, "fruit" -> 0.9|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Classify.html) for more details.*