---
title: NetModel
---

`NetModel["name"]` obtains a neural net model with the specified name from the Neural Net Repository.

`NetModel[{"name",param1->setting1,…}]` obtains a specified model from a parameterized family of models.

`NetModel[model,"prop"]` gives property prop of the model.

`NetModel[]` gives a dataset of available pre-trained neural net models.

## Examples

Load a pre-trained model:

```wolfram
net = NetModel["LeNet Trained on MNIST Data"]
```

List available models:

```wolfram
NetModel[]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetModel.html) for more details.