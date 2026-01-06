# OpenerView

`OpenerView[{expr1, expr2}]` represents an object which displays as an opener, together with expr1 if the opener is closed, and both expr1 and expr2 if it is open.

- `OpenerView[{expr1, expr2}, state]` specifies the state of the opener, with `False` being closed, and `True` being open.

## Examples

```wolfram
OpenerView[{"Title", "Hidden content here"}]
```

```wolfram
OpenerView[{"Click to expand", Column[{1, 2, 3}]}, True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OpenerView.html) for more details.*