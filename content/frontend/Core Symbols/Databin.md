# Databin

```
Databin["id"] represents a databin in the Wolfram Data Drop.

Databin["id",n] represents the first n entries in a databin.

Databin["id",-n] represents the most recent n entries in a databin.

Databin["id",{m,n}] represents entries m through n in a databin, with negative numbers counting from the end.

Databin["id",{m,n,s}] represents entries m through n with step s.

Databin["id",time] represents entries going back for the quantity of time specified by time.

Databin["id",date] represents the entries in a databin from the specified date to now.

Databin["id",{date1,date2}] represents the entries in a databin from date1 to date2.

Databin["id",range,{key1,key2,…}] represents only elements with keys keyi within each entry in a databin.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*