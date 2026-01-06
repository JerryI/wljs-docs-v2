# OutputPorts

`OutputPorts` is an option to specify the number, names or shapes of output ports for some neural net layers.

## Examples

Specify output ports for a neural net layer:

```wolfram
NetGraph[{LinearLayer[10], LinearLayer[5]}, {1 -> 2}, "OutputPorts" -> {"Out"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OutputPorts.html) for more details.*