# PlanckRadiationLaw

`PlanckRadiationLaw[temperature, λ]` returns the spectral radiance for the specified temperature and wavelength λ.

- `PlanckRadiationLaw[temperature, f]` returns the spectral radiance for the specified temperature and frequency f.
- `PlanckRadiationLaw[temperature, property]` returns the value of the property for the specified temperature.
- `PlanckRadiationLaw[temperature, {λ1, λ2}]` returns the integrated result over the wavelength range λ1 to λ2.
- `PlanckRadiationLaw[temperature, {f1, f2}]` returns the integrated result over the frequency range f1 to f2.

## Examples

```wolfram
PlanckRadiationLaw[5800, Quantity[500, "Nanometers"]]
```

```wolfram
PlanckRadiationLaw[Quantity[6000, "Kelvins"], "PeakWavelength"]
```

```wolfram
Plot[PlanckRadiationLaw[5800, Quantity[λ, "Nanometers"]], {λ, 100, 2000}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlanckRadiationLaw.html) for more details.*