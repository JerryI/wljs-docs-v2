# CombinedEntityClass

```
CombinedEntityClass[class1,class2,prop] represents a class of entities obtained by combining the properties of those pairs of entities from class1 and class2 for which the value of the property prop is the same for the two entities in the pair.

CombinedEntityClass[class1,class2,prop1->prop2] combines pairs of entities from class1 and class2 for which the value of prop1 of the entity from class1 is the same as the value of prop2 for the entity from class2. 

CombinedEntityClass[class1,class2,{pspeca,pspecb,…}] combines pairs of entities for which all the property specifications pspeck agree.

CombinedEntityClass[class1,class2,f] combines pairs of entities for which the application of the entity function f yields True. 

CombinedEntityClass[class1,class2,spec,"jspec"] uses "jspec" to determine when to allow entities with missing properties to be included.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*