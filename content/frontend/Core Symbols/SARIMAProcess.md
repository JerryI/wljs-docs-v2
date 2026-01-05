# SARIMAProcess

```
SARIMAProcess[{a1,…,ap},d,{b1,…,bq},{s,{α1,…,αm},δ,{β1,…,βr}},v] represents a seasonal integrated autoregressive moving-average process with ARIMA coefficients ai, d, and bj; seasonal order s; seasonal ARIMA coefficients αi, δ, and βj; seasonal integration order δ; and normal white noise with variance v.

SARIMAProcess[{a1,…,ap},d,{b1,…,bq},{s,{α1,…,αm},δ,{β1,…,βr}},Σ] represents a vector SARIMA process with coefficient matrices ai, bj, αi, and βj and covariance matrix Σ. 

SARIMAProcess[{a1,…},{d1,…},{b1,…},{{s1,…},{α1,…},{δ1,…},{β1,…}},Σ] represents a vector SARIMA process with multiple integration orders di, seasonal orders sj, and seasonal integration orders δk. 

SARIMAProcess[{a1,…,ap},d,{b1,…,bq},{s,{α1,…,αm},δ,{β1,…,βr}},v,init] represents a SARIMA process with initial data init. 

SARIMAProcess[c,…] represents a SARIMA process with constant c.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*