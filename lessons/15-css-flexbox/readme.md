# Lesson 15 - CSS Flexbox

Up until now, everything we've been building has mostly been stacked on top of eachother display-wise. But what if we want content side by side? Or aligned to the center, or right?

Introducing, Flexbox!

Flexbox is a way to specify how to layout **child elements** of a **parent element**. By using the following properties, we can describe how our children should look:

- `flex-direction` - what direction should our children flow
  - `row` - this is the default, display children horizontally
  - `column` - display children vertically, stacked on top of eachother
  - `row-reverse` - like row, but reverse the order
  - `column-reverse` like column, but reverse the order
- `justify-content` - how should our children be spaced out? NOTE: when `flex-direction` is set to `row`, this controls the horizontal alignment. When `flex-direction` is set to `column` it controls the vertical flow.
  - `center` - center all of our children
  - `space-between` - make the space between all of our children evenly distributed
  - `space-around` - make the space around all of our children evenly distributed
  - `flex-start` - align all at the beginning of the container
  - `flex-end` - align all at the end of the container
- `align-items` - how should our children be aligned? NOTE: when `flex-direction` is set to `row`, this controls the vertical alignment. When `flex-direction` is set to `column` it controls the horizontal flow.
  - `center` - align all in the center
  - `flex-start` - align all at the top
  - `flex-end` - align all at the bottom
  - `stretch` - stretch each child to be the same height

# Exercise Instructions

Wes Bos has a great video series on flexbox that is entirely free and I recommend you watch it. All you need to do is:

- Enter your email at [flexbox.io](https://flexbox.io)
- Click the confirmation email sent to your inbox
- Create an account
- Watch the series!

# Exercise Results

# Further Reading

- [Flebox tutorial on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
