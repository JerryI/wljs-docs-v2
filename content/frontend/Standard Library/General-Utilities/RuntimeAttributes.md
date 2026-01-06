# RuntimeAttributes

`RuntimeAttributes` is an option for `Compile` that specifies attributes for the compiled function it creates.

## Examples

```wolfram
Compile[{{x, _Real, 1}}, Total[x], RuntimeAttributes -> {Listable}]
```

```wolfram
cf = Compile[{x}, x^2, RuntimeAttributes -> {Listable}];
cf[{1, 2, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RuntimeAttributes.html) for more details.*