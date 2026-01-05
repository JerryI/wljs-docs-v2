# MainSolve

```
MainSolve[eqns] is the underlying function for transforming systems of equations. Solve and Eliminate call it. The equations must be of the form lhs == rhs. They can be combined using &amp;&amp; and ||. MainSolve returns False if no solutions to the equations exist, and True if all values of variables are solutions. MainSolve rearranges the equations using certain directives. MainSolve[eqns, vars, elim, rest] attempts to rearrange the equations eqns so as to solve for the variables vars, and eliminate the variables elim. The list rest can be included to specify the elimination order for any remaining variables.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*