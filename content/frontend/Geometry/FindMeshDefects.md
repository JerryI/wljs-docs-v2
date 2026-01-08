---
title: FindMeshDefects
---

`FindMeshDefects[mreg]` finds defects in the mesh region mreg.

- `FindMeshDefects[mreg,{def1,…}]` finds only the specified type of defects def1, ….
- `FindMeshDefects[mreg,defects,format]` formats the results according to format specification.

## Examples

```wolfram
(* Find all defects in a mesh *)
mesh = BoundaryMeshRegion[...];
FindMeshDefects[mesh]

(* Find specific defects *)
FindMeshDefects[mesh, {"DegenerateCell", "SelfIntersection"}]

(* Get as associations *)
FindMeshDefects[mesh, All, "Association"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMeshDefects.html) for more details.