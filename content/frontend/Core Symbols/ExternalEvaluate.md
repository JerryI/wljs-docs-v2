# ExternalEvaluate

```
ExternalEvaluate["sys","cmd"] evaluates the command cmd in the external evaluator sys, returning an expression corresponding to the output.

ExternalEvaluate[{"sys",opts},"cmd"] uses the options opts for the external evaluator.

ExternalEvaluate[assoc,"cmd"] evaluates cmd using the external evaluator specified by assoc.

ExternalEvaluate[session,"cmd"] evaluates cmd in the specified running ExternalSessionObject.

ExternalEvaluate[sys->"type",…] returns output converted to the specified type. 

ExternalEvaluate[spec,obj] evaluates the content of the specified ExternalObject, ExternalOperation, File, URL or CloudObject.

ExternalEvaluate[spec,assoc] evaluates the command specified by assoc.

ExternalEvaluate[spec,{cmd1,cmd2,…}] evaluates the list of commands cmdi.

ExternalEvaluate[DatabaseReference[ref],"cmd"] evaluates cmd using the database specified by ref.

ExternalEvaluate[spec] represents an operator form of ExternalEvaluate that can be applied to a command or object.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*