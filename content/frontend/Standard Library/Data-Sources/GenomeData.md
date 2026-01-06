---
title: GenomeData
---

`GenomeData["gene"]` gives the DNA sequence for the specified gene on the reference human genome.

`GenomeData["gene","property"]` gives the value of the specified property for the human gene gene.

`GenomeData[{"chr",{n1,n2}}]` gives the sequence from positions n1 to n2 on chromosome chr in the reference human genome.

## Examples

Get information about a gene:

```wolfram
GenomeData["TP53", "FullName"]
(* "tumor protein p53" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenomeData.html) for more details.*