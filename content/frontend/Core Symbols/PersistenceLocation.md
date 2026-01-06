# PersistenceLocation

`PersistenceLocation["type"]` represents a persistence location of the given type.

- `PersistenceLocation["type", base]` includes the base address for a location type that allows multiple locations.

This is used with `PersistentValue` to specify where persistent data is stored.

## Examples

```wolfram
PersistenceLocation["Local"]
```

```wolfram
PersistenceLocation["KernelSession"]
```

```wolfram
PersistenceLocation["FrontEndSession", "custom"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PersistenceLocation.html) for more details.*