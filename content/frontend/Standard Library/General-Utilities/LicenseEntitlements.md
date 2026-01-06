# LicenseEntitlements

`LicenseEntitlements[]` gives a list of on-demand license entitlements owned by you.

## Examples

Get all your license entitlements:

```wolfram
LicenseEntitlements[]
```

Check the properties of an entitlement:

```wolfram
ents = LicenseEntitlements[];
If[Length[ents] > 0, ents[[1]]["Properties"]]
```

Filter entitlements by type:

```wolfram
Select[LicenseEntitlements[], #["Type"] === "OnDemand" &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LicenseEntitlements.html) for more details.*