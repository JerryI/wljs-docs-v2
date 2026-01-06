# VerifyDerivedKey

`VerifyDerivedKey[key, password]` verifies that password matches the password used to generate the derived key.

## Examples

```wolfram
key = GenerateDerivedKey["mypassword"];
VerifyDerivedKey[key, "mypassword"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerifyDerivedKey.html) for more details.*