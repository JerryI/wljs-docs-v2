# GeoDirection

`GeoDirection[{lat1, lon1}, {lat2, lon2}]` gives the azimuthal direction from one latitude-longitude position on the Earth to another.

- `GeoDirection[loc1, loc2]` gives the azimuthal direction between locations specified by position objects or geographic entities.

## Examples

```wolfram
GeoDirection[{40.7, -74.0}, {51.5, -0.1}]
```

```wolfram
GeoDirection[Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 
  Entity["City", {"London", "GreaterLondon", "UnitedKingdom"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDirection.html) for more details.*