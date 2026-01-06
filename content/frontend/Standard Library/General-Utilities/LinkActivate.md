# LinkActivate

`LinkActivate[lnk]` activates a WSTP connection, waiting for the program at the other end to respond.

## Examples

```wolfram
link = LinkCreate[];
LinkActivate[link]
```

```wolfram
LinkActivate[LinkConnect["8000"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkActivate.html) for more details.*