# GapPenalty

`GapPenalty` is an option for SequenceAlignment and related functions that gives the additional cost associated with each gap corresponding to a run of insertions or deletions.

## Examples

Align sequences with custom gap penalty:

```wolfram
SequenceAlignment["ACGT", "AGT", GapPenalty -> 2]
```

Higher gap penalty discourages gaps:

```wolfram
SequenceAlignment["ABCDEF", "ABEF", GapPenalty -> 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GapPenalty.html) for more details.*