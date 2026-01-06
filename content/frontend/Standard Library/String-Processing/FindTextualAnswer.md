# FindTextualAnswer

`FindTextualAnswer[text, "question"]` gives the substring of text that best appears to answer the question.

- `FindTextualAnswer[text, "question", n]` gives a list of up to n answers that appear most probable.
- `FindTextualAnswer[text, "question", n, prop]` gives the specified property for each answer.

## Examples

Find an answer to a question from a text:

```wolfram
text = "The Eiffel Tower is located in Paris, France. It was built in 1889.";
FindTextualAnswer[text, "Where is the Eiffel Tower?"]
```

Get multiple possible answers with probabilities:

```wolfram
FindTextualAnswer[text, "When was it built?", 3, {"Answer", "Probability"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindTextualAnswer.html) for more details.*