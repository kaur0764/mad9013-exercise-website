# Professor Feedback

## Week 2B ----------------------

Great work! Love the comment organization. A few small changes:

- Make sure you are properly indenting your code. It makes it difficult to read and understand when the code is poorly indented. The Indent Rainbow extension is helpful for this!
- The white logo should be in the footer
- The logos in the footer should be wrapped in an <a> linking to the home page

## Week 3 ----------------------

Amazing work! One suggestion: instead of making changes to the buttons with `.hero .button`, I would make an alt button style class like `.btn-white` because it is possible you may want to reuse the white button outside of the `.hero`

## Week 4 ----------------------

Code Quality: 2.75/3
Design: 1/1
File Organization & Commits: .75/1
Total: 4.5/5

- The CSS should all be done in the `css/main.css` file. That way the styles will apply to all of your pages
- You have used `font-family: 'Ubuntu', sans-serif;` to apply the Ubuntu font, however you have not linked to Google Fonts nor created your own `@font-face` rule with the font files to display the font. Because of this, the Ubuntu font is not being rendered. Make sure to link it properly!

## Week 5 ----------------------

Code Quality: 2.75/3
Design: 1/1
File Organization & Commits: 1/1
Total: 4.75/5

Fantastic work!

- Having different max-widths at each media query isn't necessary. just stick with the base `.container` in the header and footer
- Apply the `.button` class to the `a` not the `li`. We want to apply the button styles to the element we interact with.

## Week 6 ----------------------

Code Quality: 2.75/3
Design: 1/1
File Organization & Commits: 1/1
Total: 4.75/5

You have split your `nav ul` into separate `ul` tags to accomplish the layout. This should not be done as that affects the semantics of the content. Never change the `html` to serve design like this. Instead, in this case use a `flex-grow` on the "Pricing" `li`. This will make the `li` expand and fill the space, which will push the final two nav items to the right side

## Week 7 ----------------------

Code Quality: 3/3
Design: 1/1
File Organization & Commits: 1/1
Total: 5/5

Fantastic work!

## Week 9 ----------------------

Code Quality: 3/3
Design: 1/1
File Organization & Commits: 1/1
Total: 5/5

Great job! I see you added the hamburger nav as well! Awesome 🍔 🍔 🍔