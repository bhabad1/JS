# Builder Pattern

- Separates object construction from its representation; always creates the same type of object
- The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects (another GoF design pattern) because the procedures involved are often repetitive and complex.
- Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together

  !["builder pattern"](https://www.dofactory.com/img/diagrams/javascript/javascript-builder.jpg)

  <!-- [![Alt text](https://www.dofactory.com/img/diagrams/javascript/javascript-builder.jpg)](https://digitalocean.com) -->
