# ModularInverse

`ModularInverse[k, n]` gives the modular inverse of k modulo n.

The modular inverse of k modulo n is an integer m such that k*m ≡ 1 (mod n). It exists only when `GCD[k, n] == 1`.

## Examples

```wolfram
ModularInverse[3, 7]
```

```wolfram
(* Verify: 3 * 5 = 15 ≡ 1 (mod 7) *)
Mod[3 * ModularInverse[3, 7], 7]
```

```wolfram
ModularInverse[17, 100]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ModularInverse.html) for more details.*