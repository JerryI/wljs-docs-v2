# Modal

`Modal` is an option to functions such as `CreateDialog` that specifies whether the dialog that is created should be modal to the Wolfram System front end.

## Examples

```wolfram
CreateDialog["Hello", Modal -> True]
```

```wolfram
CreateDialog[Button["OK", DialogReturn[]], Modal -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Modal.html) for more details.*