# FeedbackLinearize

`FeedbackLinearize[asys]` input-output linearizes the AffineStateSpaceModel asys by state transformation and feedback.

- `FeedbackLinearize[asys,{z,v}]` specifies the new states z and the new control inputs v.
- `FeedbackLinearize[asys,{z,v},"prop"]` computes the property "prop".

## Examples

```wolfram
(* Linearize an affine state space model *)
asys = AffineStateSpaceModel[{...}];
FeedbackLinearize[asys]

(* Specify new state and control variables *)
FeedbackLinearize[asys, {z, v}]

(* Get transformation properties *)
FeedbackLinearize[asys, {z, v}, "TransformationMatrix"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeedbackLinearize.html) for more details.*