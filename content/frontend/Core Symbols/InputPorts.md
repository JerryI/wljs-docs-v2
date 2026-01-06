# InputPorts

`InputPorts` is an option to specify the number, names or shapes of input ports for some neural net layers.

## Examples

```wolfram
NetGraph[{LinearLayer[], LinearLayer[]}, {1 -> 2}, InputPorts -> 2]
```

```wolfram
CatenateLayer[InputPorts -> {"a", "b"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InputPorts.html) for more details.*