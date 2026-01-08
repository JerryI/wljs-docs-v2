---
title: FindDivisions
---

`FindDivisions[{xmin,xmax},n]` finds a list of about n "nice" numbers that divide the interval around xmin to xmax into equally spaced parts. 

- `FindDivisions[{xmin,xmax,dx},n]` makes the parts always have lengths that are integer multiples of dx. 
- `FindDivisions[{xmin,xmax},{n1,n2,…}]` finds successive subdivisions into about n1, n2, … parts. 
- `FindDivisions[{xmin,xmax,{dx1,dx2,…}},{n1,n2,…}]` uses spacings that are forced to be multiples of dx1, dx2, …. 

## Examples

```wolfram
(* Find 5 nice divisions for 0 to 10 *)
FindDivisions[{0, 10}, 5]

(* Force multiples of 0.5 *)
FindDivisions[{0, 10, 0.5}, 5]

(* Nested subdivisions *)
FindDivisions[{0, 100}, {5, 2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindDivisions.html) for more details.