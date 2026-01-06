# LabelingFunction

`LabelingFunction` is an option for data visualization functions to automatically label elements of a visualization.

## Examples

Label pie chart sectors:

```wolfram
PieChart[{1, 2, 3}, LabelingFunction -> (Placed[#1, "RadialCallout"] &)]
```

Add custom labels to a bar chart:

```wolfram
BarChart[{1, 2, 3, 4}, LabelingFunction -> Above]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LabelingFunction.html) for more details.*