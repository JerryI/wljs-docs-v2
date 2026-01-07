---
title: GenerateDerivedKey
---

`GenerateDerivedKey[password]` generates a DerivedKey object from the password given.

- `GenerateDerivedKey[password, salt]` generates a DerivedKey object from the password and salt given.

## Examples

Generate a derived key from a password:

```wolfram
GenerateDerivedKey["mypassword"]
```

Generate with a specific salt:

```wolfram
GenerateDerivedKey["mypassword", "mysalt"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenerateDerivedKey.html) for more details.*