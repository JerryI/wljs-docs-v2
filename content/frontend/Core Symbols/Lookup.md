# Lookup

```
Lookup[assoc,key] looks up the value associated with key in the association assoc; if the key is not present, Missing["KeyAbsent",key] is returned.

Lookup[assoc,{key1,key2,…}] gives a list of the values associated with the keyi.

Lookup[{assoc1,assoc2,…},key] gives a list corresponding to the value of key in each associ.

Lookup[assoc,key,default] gives default if the key is not present.

Lookup[assoc,keys,default,h] looks up the values associated with keys, wrapping each of them with head h before evaluation.

Lookup[key] represents an operator form of Lookup that can be applied to an expression.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*