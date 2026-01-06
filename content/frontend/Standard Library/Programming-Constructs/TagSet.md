# TagSet

`f /: lhs = rhs` assigns rhs to be the value of lhs, and associates the assignment with the symbol f.

TagSet is used to create upvalues, associating definitions with auxiliary symbols.

## Examples

```wolfram
f /: g[f[x_]] := x^2
g[f[3]]
```

```wolfram
myType /: Plus[myType[a_], myType[b_]] := myType[a + b]
```

```wolfram
vec /: Dot[vec[a_], vec[b_]] := a.b
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TagSet.html) for more details.*