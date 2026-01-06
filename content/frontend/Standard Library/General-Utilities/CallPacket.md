---
title: CallPacket
---

`CallPacket[integer, list]` is a WSTP packet encapsulating a request to invoke the external function numbered integer with the arguments contained in list.

## Examples

Create a call packet:

```wolfram
CallPacket[1, {2, 3}]
(* CallPacket[1, {2, 3}] *)
```

Used in WSTP communication:

```wolfram
(* Typically used internally for external program communication *)
LinkWrite[link, CallPacket[funcNum, {arg1, arg2}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CallPacket.html) for more details.*