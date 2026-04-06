---
title: FindGeometricConjectures
---

`FindGeometricConjectures[scene]` finds conjectures that appear to hold for the GeometricScene object scene and adds these conjectures to the scene object.

- `FindGeometricConjectures[{scene1,scene2,…}]` finds conjectures that appear to hold for all instances scenei of a geometric scene and returns a combined scene with the conjectures added.
- `FindGeometricConjectures[scenes,patt]` adds only conjectures that match the pattern patt.
- `FindGeometricConjectures[scenes,patt,n]` adds only up to n conjectures.

## Examples

```wolfram
(* Find conjectures in a triangle scene *)
scene = GeometricScene[{a, b, c}, Triangle[{a, b, c}]];
FindGeometricConjectures[scene]

(* Limit to specific patterns *)
FindGeometricConjectures[scene, _Equal, 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGeometricConjectures.html) for more details.