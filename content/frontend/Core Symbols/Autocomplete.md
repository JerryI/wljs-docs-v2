# Autocomplete

```
Autocomplete[{string1,string2,…},"string"] gives a list of the stringi that can complete string.

Autocomplete[<|s1->w1,s2->w2,…|>,"string"] puts the completions in order of decreasing weights wi.

Autocomplete[{assoc1,assoc2,…},"string"] uses completions specified by the associations associ.

Autocomplete[comps,"string",n] gives the first at most n completions.

Autocomplete[comps] gives an AutocompletionFunction[…] that can be applied to a string.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*