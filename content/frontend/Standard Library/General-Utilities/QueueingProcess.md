---
title: QueueingProcess
---

`QueueingProcess[λ,μ]` represents an M/M/1 queue with arrival rate λ and service rate μ.

`QueueingProcess[λ,sdist]` represents an M/G/1 queue with arrival rate λ and service distribution sdist.

`QueueingProcess[adist,μ]` represents a G/M/1 queue with arrival distribution adist and service rate μ.

`QueueingProcess[adist,sdist]` represents a G/G/1 queue with arrival distribution adist and service distribution sdist.

`QueueingProcess[…,…,c]` represents a queueing process with c service channels.

`QueueingProcess[…,…,c,k]` represents a queueing process with system capacity k.

`QueueingProcess[…,…,c,k,x0]` represents a queueing process with initial state x0.

## Examples

```wolfram
QueueingProcess[2, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QueueingProcess.html) for more details.*