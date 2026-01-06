# LocatorAutoCreate

`LocatorAutoCreate` is an option for `LocatorPane`, `Manipulate`, and related functions that specifies whether new locators should be created when clicking away from existing locators.

## Examples

```wolfram
DynamicModule[{pts = {{0, 0}}},
  LocatorPane[Dynamic[pts], Graphics[{}], LocatorAutoCreate -> True]]
```

```wolfram
Manipulate[pts, {{pts, {{0, 0}}}, Locator, LocatorAutoCreate -> True}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocatorAutoCreate.html) for more details.*