# Factory Pattern

    The Factory pattern is another creational pattern for creating objects. It differs from the other patterns in its category because it doesn’t explicitly require us to use a constructor. Instead, a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we want to create

# When to Use the Factory Pattern

- When our object or component setup involves a high level of complexity
- When we need a convenient way to generate different instances of
  objects depending on the environment, we are in
- When we’re working with many small objects or components that share
  the same properties
- When composing objects with instances of other objects that need only
  satisfy an API contract (aka, duck typing) to work. This is useful for
  decoupling.
