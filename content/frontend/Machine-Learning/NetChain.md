---
title: NetChain
---

`NetChain[{layer1, layer2, ...}]` specifies a neural net in which the output of layeri is connected to the input of layeri+1.

## Examples

Create a simple neural network chain:

```wolfram
net = NetChain[{LinearLayer[10], Tanh, LinearLayer[5]}]
```

With named layers:

```wolfram
net = NetChain[<|"fc1" -> LinearLayer[64], "relu" -> Ramp, "fc2" -> LinearLayer[10]|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetChain.html) for more details.*