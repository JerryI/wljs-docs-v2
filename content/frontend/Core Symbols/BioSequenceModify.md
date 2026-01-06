# BioSequenceModify

`BioSequenceModify[seq, "mod"]` gives the result of applying the modification "mod" to the sequence seq.

`BioSequenceModify[seq, {"mod", params}]` specifies the parameters params for "mod".

`BioSequenceModify[modspec]` represents an operator form of BioSequenceModify that can be applied to a biomolecular sequence.

## Examples

Modify a sequence:

```wolfram
BioSequenceModify[BioSequence["DNA", "ATCG"], "ReverseComplement"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BioSequenceModify.html) for more details.*