# DataStructureQ

`DataStructureQ[ds]` yields `True` if ds is a valid data structure and `False` otherwise.

`DataStructureQ[ds, type]` yields `True` if ds is a valid data structure of the specified type and `False` otherwise.

## Examples

Check if something is a data structure:

```wolfram
ds = CreateDataStructure["Stack"];
DataStructureQ[ds]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DataStructureQ.html) for more details.*