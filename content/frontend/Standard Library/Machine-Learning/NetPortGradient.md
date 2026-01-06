# NetPortGradient

`NetPortGradient["port"]` represents the gradient of the output of a net with respect to the value of the specified input port.

`NetPortGradient["param"]` represents the gradient of the output with respect to a learned parameter named param.

`NetPortGradient[{layer1,layer2,…,"param"}]` represents the gradient with respect to a parameter at a specific position in a net.

`NetPortGradient[All]` represents the gradients with respect to all inputs and parameters.

## Examples

Get gradient with respect to an input port:

```wolfram
NetPortGradient["Input"]
(* NetPortGradient["Input"] *)
```

Get gradients for all inputs and parameters:

```wolfram
NetPortGradient[All]
(* NetPortGradient[All] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetPortGradient.html) for more details.*