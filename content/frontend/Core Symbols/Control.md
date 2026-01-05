# Control

`Control[{u, dom}]` represents an interactive control for the variable u in the domain dom, with the type of control chosen to be appropriate for the domain specified.

`Control[{{u, uinit}, dom}]` represents a control with initial value uinit.

## Examples

```wolfram
Manipulate[x^2, Control[{x, 0, 10}]]
(* Manipulate[...] *)
```

```wolfram
Manipulate[n!, Control[{{n, 5}, 1, 10, 1}]]
(* Manipulate[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Control.html) for more details.*