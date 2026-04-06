---
title: SphericalBesselJ
---

`SphericalBesselJ[n, z]` gives the spherical Bessel function of the first kind jₙ(z).

## Examples

Evaluate the spherical Bessel function:
```wolfram
SphericalBesselJ[0, 1.0]
```

Plot spherical Bessel functions for different orders:
```wolfram
Plot[{SphericalBesselJ[0, x], SphericalBesselJ[1, x], SphericalBesselJ[2, x]}, {x, 0, 15}, PlotLegends -> {"j0", "j1", "j2"}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SphericalBesselJ.html) for more details.