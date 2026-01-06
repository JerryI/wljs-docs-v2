# DegreeGraphDistribution

`DegreeGraphDistribution[dlist]` represents a degree graph distribution with vertex degree dlist.

## Examples

Sample a random graph with given degree sequence:

```wolfram
RandomGraph[DegreeGraphDistribution[{2, 2, 2, 2}]]
```

Generate graphs with specified degrees:

```wolfram
graphs = RandomGraph[DegreeGraphDistribution[{3, 3, 2, 2, 2, 2}], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DegreeGraphDistribution.html) for more details.*