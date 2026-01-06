# BlockRandom

`BlockRandom[expr]` evaluates expr with all pseudorandom generators localized, so that uses of SeedRandom, RandomInteger, and related functions within the evaluation of expr do not affect subsequent pseudorandom sequences.

## Examples

Isolate random number generation:

```wolfram
SeedRandom[1];
BlockRandom[SeedRandom[99]; RandomInteger[100]];
RandomInteger[100]
(* Same as without BlockRandom *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BlockRandom.html) for more details.*