# UniverseModelData

`UniverseModelData[spec]` returns properties of the universe based on the default model at specification defined by the time after the Big Bang, the distance to the comoving object, or the redshift of such an object.

`UniverseModelData[spec,model]` returns properties of universe model at spec.

`UniverseModelData[spec,property]` returns the specified property at the time or distance spec.

`UniverseModelData[spec,property,model]` returns the specified property at the time or distance spec for the universe model.

## Examples

Get properties of the universe at a specific time:

```wolfram
UniverseModelData[Quantity[1, "BillionYears"], "HubbleParameter"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UniverseModelData.html) for more details.*