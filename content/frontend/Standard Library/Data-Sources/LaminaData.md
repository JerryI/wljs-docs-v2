---
title: LaminaData
---

`LaminaData[entity, property]` gives the value of the specified property for the lamina entity.

`LaminaData[{entity1, entity2, …}, property]` gives a list of property values for the specified lamina entities.

`LaminaData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get properties of a lamina shape:

```wolfram
LaminaData["Disk", "Area"]
```

Get the centroid of a shape:

```wolfram
LaminaData["EquilateralTriangle", "Centroid"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LaminaData.html) for more details.*