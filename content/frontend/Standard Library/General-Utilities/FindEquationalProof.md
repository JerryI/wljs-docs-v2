# FindEquationalProof

`FindEquationalProof[thm,axms]` tries to find an equational proof of the symbolic theorem thm using the axioms axms.

`FindEquationalProof[thm,"theory"]` tries to find a proof of thm using the specified named axiomatic theory.

## Examples

```wolfram
(* Prove a group theory theorem *)
FindEquationalProof[
  ForAll[x, x * Inverse[x] == e],
  "GroupAxioms"]

(* Use custom axioms *)
axioms = {ForAll[{x, y}, f[x, y] == f[y, x]]};
FindEquationalProof[f[a, b] == f[b, a], axioms]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindEquationalProof.html) for more details.*