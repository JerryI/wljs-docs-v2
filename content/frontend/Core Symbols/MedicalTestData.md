# MedicalTestData

`MedicalTestData[entity, property]` gives the value of the specified property for the medical test entity.

`MedicalTestData[{entity1, entity2, …}, property]` gives a list of property values for the specified medical test entities.

`MedicalTestData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
MedicalTestData["BloodGlucoseTest", "Name"]
(* Blood Glucose Test *)
```

```wolfram
MedicalTestData["BloodGlucoseTest", "Properties"]
(* {Name, Description, ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MedicalTestData.html) for more details.*