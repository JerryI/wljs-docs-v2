---
title: FaceRecognize
---

`FaceRecognize[{example1->name1,example2->name2,…}]` generates a ClassifierFunction[…] based on the face examples and names given.

- `FaceRecognize[{example1,example2,…}->{name1,name2,…}]` also generates a ClassifierFunction[…] based on the examples and names given.
- `FaceRecognize[<|name1->{example11,…},name2->{example21,…},…|>]` uses an association of names with their examples.
- `FaceRecognize[training,image]` attempts to find faces present in an image and classify them with the given training set. 
- `FaceRecognize[training,image,prop]` returns the specified property prop.

## Examples

```wolfram
(* Create a face recognizer from examples *)
recognizer = FaceRecognize[{
  photo1 -> "Alice",
  photo2 -> "Bob"
}]

(* Recognize a face in a new image *)
recognizer[newPhoto]

(* Get probabilities *)
recognizer[newPhoto, "Probabilities"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FaceRecognize.html) for more details.