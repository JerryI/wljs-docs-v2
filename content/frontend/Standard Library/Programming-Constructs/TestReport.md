---
title: TestReport
---

`TestReport["file"]` gives a report of the results of the tests from a file.

`TestReport[{test1, test2, ...}]` gives a report of the results of the testi.

`TestReport[{report1, report2, ...}]` gives a unified report by merging all test reports reporti.

## Examples

Run tests and generate a report:

```wolfram
TestReport[{VerificationTest[1 + 1, 2], VerificationTest[2*3, 6]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TestReport.html) for more details.*