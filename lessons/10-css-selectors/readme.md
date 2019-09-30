# Lesson 10 - CSS Selectors

Nice! Our websites are starting to get some color to them.

`style=""` attributes are great, they let us add style directly to an element. But what if we took our last example and said we wanted to have all of the paragraphs to have a `font-size` of 18px. Well, we'd have to go back to _every_ `<p>` tag and update its style to contain `font-size: 18px`.

Pretty inconvenient, right?

There's an easier way. HTML provides us with a `<style>` tag that we can utilize to write many _general_ styles that we apply to any html element using what are called **_selectors_**.

## Tag Selectors

Let's look at an example of how we could do the above of setting every paragraph to size 18px.

```html
<html>
  <head>
    <title>Document</title>
    <style>
      p {
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <p>lorem ipsum....</p>
    <p>lorem ipsum....</p>
    <p>lorem ipsum....</p>
  </body>
</html>
```

> Notice the `<style>` tag goes **_INSIDE_** the `<head>` tag. This is important!

The `<style>` tag lets us write CSS directly inside our html! Anything written inbetween the opening and closing tags will be interpreted by the browser as CSS.

Now instead of writing styles directly on the element using `style=""` we can directly target many elements at once using `selectors`.

This looks a bit different to what we're used to. Let's break it down:

```html
<style>
  p {
    font-size: 18px;
  }
</style>
```

A selector is what is to the left of the opening curly brace (`{`), in this case it's the `p` meaning we want to target EVERY `<p>` tag on the webpage.

After the selector we have a pair of curly braces `{` and `}` with our CSS property inside. Think of these like an opening and closing html tag. We place any CSS properties we want our selector to be affected by inside the opening and closing curly braces.

We can place many properties inside these curly braces. For example, if we wanted not only the font size to be changed but we also want the text color to be red we could do:

```html
<style>
  p {
    font-size: 18px;
    color: red;
  }
</style>
```

Just like how our properties were separated by semi-colons in our `style=""` attributes, properties are separated by semi-colons here as well.

Inside this style tag we can create as many selectors as we want. Let's say we want to make our titles much bigger. We could add it after the `p` selector

```html
<style>
  p {
    font-size: 18px;
    color: red;
  }

  h1 {
    font-size: 64px;
  }
</style>
```

Pretty easy! We can add as many selectors to this style tag as we like.

What if we wanted to make both `h1` and `p` have a background of `blue`? Well, we could just add it to each set of selectors above but there's another way!

```html
<style>
  p {
    font-size: 18px;
    color: red;
  }

  h1 {
    font-size: 64px;
  }

  p,
  h1 {
    background: blue;
  }
</style>
```

By separating the selectors with a comma, it will attach the properties defined to all matching elements.

## Class Selectors

Going back to last lessons example, what if we wanted to target only the first group of 3 `<p>` tags inside that `<div>` element?

If we just did that `p` selector above, we would also be targeting the other group of 3 paragraphs in the second div.

Classes to the rescue!

You can give any tag a `class` attribute, that we can then later target later using a selector.

```html
<div class="first-group">
  <p>lorem ipsum....</p>
  <p>lorem ipsum....</p>
  <p>lorem ipsum....</p>
</div>
```

Now let's see how we can target that using a selector.

```html
<html>
  <head>
    <title>Document</title>
    <style>
      .first-group {
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <div class="first-group">
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
    </div>

    <div>
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
    </div>
  </body>
</html>
```

We can reference a CSS class in our style tag by using a period and then the class name: `.class-name-here`. Just like we targeted all `<p>` tags using the `p {}` selector, we can target every element that has that class using the above.

Classes can be given to any number of elements, and any element can have multiple classes (separated by a space).

Let's see what this looks like:

```html
<html>
  <head>
    <title>Document</title>
    <style>
      .red-background {
        background: red;
      }
      .white-text {
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="red-background white-text">
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
    </div>

    <div class="red-background">
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
      <p>lorem ipsum....</p>
    </div>
  </body>
</html>
```

In the above example, we created two classes. `red-background` and `white-text`. The first div will have both a red background and white text, while the second div will only have the red background.

[Read more on classes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)

## ID Selectors

Just like classes, we can give elements an ID and target them through a CSS selector as well.

```html
<html>
  <head>
    <title>Document</title>
    <style>
      #personal-information {
        background: red;
      }
    </style>
  </head>
  <body>
    <div id="personal-information">
      <p>Name: Ozzie</p>
      <p>Location: Canada</p>
    </div>
    <div id="company-information">
      <p>Name: Acme</p>
      <p>Location: Canada</p>
    </div>
  </body>
</html>
```

We target ID's in CSS by using the pound sign `#` followed by the class name.

ID's are different in classes in that they are unique. Only ONE single html tag can have that specific ID and an element can only have a maximum of ONE ID.

[Read more on ID's on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)

# Exercise Instructions

- Create a file, index.html
- Follow the instructions from the last lesson but this time using a `<style>` tag to complete the assignment

# Exercise Results

# Further Reading

- [ID's on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- [Selectors ON MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
