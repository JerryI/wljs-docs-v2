# PowerMod

`PowerMod[a, b, m]` gives a^b mod m efficiently.

`PowerMod[a, -1, m]` finds the modular inverse of a modulo m.

## Examples

Compute power modulo:

```wolfram
PowerMod[2, 10, 1000]
(* 24 *)
```

Modular inverse:

```wolfram
PowerMod[3, -1, 7]
(* 5 *)
```

Verify the inverse:

```wolfram
Mod[3 * 5, 7]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PowerMod.html) for more details.*