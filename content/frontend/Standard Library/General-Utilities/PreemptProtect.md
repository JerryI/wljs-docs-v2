# PreemptProtect

`PreemptProtect[expr]` evaluates expr, without any interruption from preemptive evaluations.

## Examples

Protect critical code:

```wolfram
PreemptProtect[
  x = 1;
  y = 2;
  x + y
]
```

Ensure atomic operations:

```wolfram
PreemptProtect[
  counter++;
  result = Process[counter]
]
```

In parallel computing:

```wolfram
PreemptProtect[
  AppendTo[sharedList, newValue]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PreemptProtect.html) for more details.*