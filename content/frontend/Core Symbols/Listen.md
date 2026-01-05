# Listen

`Listen` is a setting for the `LinkMode` option of `LinkOpen`. `LinkMode -> Listen` causes a link to be created that listens on a named port for an incoming connection request.

## Examples

Create a link that listens for connections:

```wolfram
LinkOpen["8000", LinkMode -> Listen]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Listen.html) for more details.*