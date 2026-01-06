# MoonPhase

`MoonPhase[]` gives moon phase fraction of illumination for the current date.

- `MoonPhase[datespec]` gives moon phase fraction of illumination for the specified date.
- `MoonPhase[property]` gives the property of the moon phase for the current date.
- `MoonPhase[datespec, property]` gives the property of the moon phase for the specified date.

## Examples

```wolfram
MoonPhase[]
```

```wolfram
MoonPhase[DateObject[{2024, 1, 1}]]
```

```wolfram
MoonPhase["Name"]
```

```wolfram
MoonPhase[Today, "Icon"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoonPhase.html) for more details.*