# SpectralLineData

`SpectralLineData[entity]` gives the values of all known properties for an atomic state or state transition.

`SpectralLineData[entity, property]` gives the value of the specified property for the given entity.

`SpectralLineData[quantity]` returns the state transition with the closest wavelength or frequency specified.

`SpectralLineData[class, quantity]` returns the entity in the specified entity class with the closest wavelength or energy to the specified quantity.

`SpectralLineData[spec, {quantity1, quantity2}]` returns the entities in spec that fall within the range specified between quantity1 and quantity2.

## Examples

Find a spectral line by wavelength:

```wolfram
SpectralLineData[Quantity[656.3, "Nanometers"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpectralLineData.html) for more details.*