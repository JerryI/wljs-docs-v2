# Threaded

```
Threaded[list] is an object whose elements will automatically be threaded into the lowest level of an array when used in a listable operation such as Plus.

a+Threaded[b] adds elements of an array b to elements of an array a at the lowest possible level.

a+Threaded[b,alev] adds elements at level alev of a.

a+Threaded[b,blev->alev] adds elements at level alev in a to level blev in b.

f[a,Threaded[b,…]] combines elements for a function f with the attribute Listable.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*