# LinkReadyQ

`LinkReadyQ[link]` tests whether there is an expression ready to read from the specified WSTP connection.

- `LinkReadyQ[link, t]` waits for up to t seconds to see if an expression becomes ready to read.
- `LinkReadyQ[{link1, link2, ...}, t]` tests all the linki in parallel, returning as soon as any of them are ready to read from.

## Examples

```wolfram
LinkReadyQ[$ParentLink]
```

```wolfram
LinkReadyQ[link, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkReadyQ.html) for more details.*