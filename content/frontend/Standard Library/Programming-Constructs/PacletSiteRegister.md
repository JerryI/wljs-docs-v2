---
title: PacletSiteRegister
---

`PacletSiteRegister[url]` registers url as a known paclet site.

`PacletSiteRegister[url, name]` registers url as a known paclet site with name.

`PacletSiteRegister[PacletSiteObject[...]]` registers the given PacletSiteObject as a known paclet site.

## Examples

Register a paclet site with a URL:

```wolfram
PacletSiteRegister["https://example.com/paclets"]
```

Register with a custom name:

```wolfram
PacletSiteRegister["https://example.com/paclets", "MyPacletSite"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletSiteRegister.html) for more details.*