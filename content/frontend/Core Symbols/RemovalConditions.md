# RemovalConditions

`RemovalConditions` is an option for `AttachCell` that specifies conditions under which to remove the attached cell.

## Examples

```wolfram
AttachCell[cell, "Content", RemovalConditions -> {"MouseExit"}]
```

```wolfram
AttachCell[parent, child, RemovalConditions -> {"ParentChanged", "EvaluatorQuit"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemovalConditions.html) for more details.*