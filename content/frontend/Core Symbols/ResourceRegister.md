# ResourceRegister

`ResourceRegister[resource]` creates a persistent cache of a resource object that can be referenced by name.

- `ResourceRegister[resource, loc]` stores the resource in persistence location loc.
- `ResourceRegister[resource, {loc1, ...}]` stores the resource in multiple persistence locations.

## Examples

Register a resource:
```wolfram
ResourceRegister[ResourceObject["MyData"]]
```

Store in cloud:
```wolfram
ResourceRegister[resource, "Cloud"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResourceRegister.html) for more details.*