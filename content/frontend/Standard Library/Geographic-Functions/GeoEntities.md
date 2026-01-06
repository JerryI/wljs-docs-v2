# GeoEntities

`GeoEntities[reg, enttype]` gives a list of the geographic entities of type `enttype` contained in the extended region `reg`.

- `GeoEntities[reg]` gives a list of the geographic regions of any type contained in `reg`.

## Examples

```wolfram
GeoEntities[Entity["Country", "France"], "City"]
```

```wolfram
GeoEntities[Entity["AdministrativeDivision", {"California", "UnitedStates"}], "Lake"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoEntities.html) for more details.*