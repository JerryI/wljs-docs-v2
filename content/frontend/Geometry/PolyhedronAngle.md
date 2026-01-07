---
title: PolyhedronAngle
---

`PolyhedronAngle[poly,p]` gives the solid angle at the point p and spanned by edges with common point p.

`PolyhedronAngle[poly,e]` gives the dihedral angle between the two faces with common edge e.

## Examples

Find the solid angle at a vertex of a tetrahedron:

```wolfram
PolyhedronAngle[Tetrahedron[], {0, 0, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolyhedronAngle.html) for more details.*