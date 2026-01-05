# KnapsackSolve

```
KnapsackSolve[{cost1,cost2,…},maxtotalcost] solves the knapsack problem of finding the maximum number of items associated with each of the costi, subject to the constraint that the total cost is not larger than maxtotalcost.

KnapsackSolve[{{payoff1,cost1},{payoff2,cost2},…},maxtotalcost] finds a number of items that maximizes the total payoff, while satisfying the constraint on the total cost.

KnapsackSolve[{{payoff1,cost1,maxcount1},…},maxtotalcost] allows at most maxcounti copies of item i.

KnapsackSolve[items,{maxtotalpayoff,maxtotalcost}] finds a result that gives a total payoff not larger than maxtotalpayoff.

KnapsackSolve[items,{maxtotalpayoff,maxtotalcost,maxtotalcount}] adds the constraint of having no more than maxtotalcount items in total. 

KnapsackSolve[<|label1->itemspec1,…|>,maxtotals] labels each type of item and gives the result as an association.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*