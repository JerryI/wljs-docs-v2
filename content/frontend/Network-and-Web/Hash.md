---
title: Hash
---

`Hash[expr]` gives an integer hash code for the expression expr.

`Hash[expr, type]` gives a hash digest of the specified type (e.g., "MD5", "SHA256").

## Examples

Default hash:

```wolfram
Hash["hello"]
(* 2860851879461191 *)
```

SHA-256 hash:

```wolfram
Hash["hello", "SHA256", "HexString"]
(* "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Hash.html) for more details.