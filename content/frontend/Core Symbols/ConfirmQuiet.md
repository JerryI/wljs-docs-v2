# ConfirmQuiet

```
ConfirmQuiet[expr] confirms that no messages are generated during the evaluation of expr, otherwise quieting them and throwing an error to the nearest surrounding Enclose.

ConfirmQuiet[expr,s::t] tests only for the specified message.

ConfirmQuiet[expr,{s1::t1,s2::t2,…}] tests only for the specified list of messages.

ConfirmQuiet[expr,"group"] tests only for messages in the named message group.

ConfirmQuiet[expr,mspec,info] evaluates info and includes its value in the thrown error if expr is not confirmed.

ConfirmQuiet[expr,mspec,info,tag] uses the specified tag for any thrown errors.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*