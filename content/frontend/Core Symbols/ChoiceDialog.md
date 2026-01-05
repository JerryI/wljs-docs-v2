# ChoiceDialog

`ChoiceDialog[expr]` puts up a standard choice dialog that displays expr together with OK and Cancel buttons, and returns True if OK is clicked and False if Cancel is clicked.

`ChoiceDialog[expr,{lbl1->val1,lbl2->val2,…}]` includes buttons with labels lbli, and returns the corresponding vali for the button clicked.

## Examples

```wolfram
ChoiceDialog["Do you want to continue?"]
(* True or False depending on button clicked *)
```

```wolfram
ChoiceDialog["Choose an option", {"Yes" -> 1, "No" -> 2, "Maybe" -> 3}]
(* Returns 1, 2, or 3 depending on button clicked *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChoiceDialog.html) for more details.*