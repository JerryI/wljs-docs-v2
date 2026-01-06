# NetUnfold

`NetUnfold[fnet]` produces the elementary net of the folded net fnet, exposing the recurrent states.

This is used to access the internal structure of recurrent networks.

## Examples

```wolfram
NetUnfold[NetFold[recurrentCell]]
```

```wolfram
NetUnfold[trainedRNN]
```

```wolfram
unfoldedNet = NetUnfold[NetModel["...RNN..."]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetUnfold.html) for more details.*