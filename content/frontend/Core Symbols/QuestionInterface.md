# QuestionInterface

`QuestionInterface[type, <|p1 -> s1, p2 -> s2, ...|>]` defines an interface for a QuestionObject using the given type and properties pi with settings si.

## Examples

Create a multiple choice interface:
```wolfram
QuestionInterface["MultipleChoice", <|"Choices" -> {"A", "B", "C"}|>]
```

Define a text input question:
```wolfram
QuestionInterface["FreeForm", <|"Hint" -> "Enter your answer"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuestionInterface.html) for more details.*