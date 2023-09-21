## PRISMA

References: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb

1. Initilize Prisma (creates prisma directory and add the .env variables): npx prisma init
2. Create DB Schema in the .prisma file
3. Push the database schema: npx prisma db push
4. Generate the types: npx prisma generate

## RESOURCES

<!-- unrodered list -->

- [Landingfolio](https://www.landingfolio.com/library/faq/tailwind)

## TIPS

https://www.youtube.com/watch?v=aSlK3GhRuXA&ab_channel=Ravi-PerfectBase

### Tailwind

- Instead of modifying each time the component, if it's gonna be repeated, create a variant!
- Make Intellisense work on variables (it already works if the name is class or className, even if it's an object with properties which are variants of the class) -> Settings > class atribute > add regex. You could add "variants".
- Creating tailwind utilities with variables (like `bg-${somecolor}-500`) -> white label with regex
- Use the "theme" object. You can use the tailwind colors from there too ( like... bg-[theme('colors.purple.700')])
- Create custom utility classes
- Use Tailwind plugins to create new utilities
- You can import the tailwind colors in any js file. That way you can use those in the theme file to create a theme easily (setting them to utilities like primary, secondary, etc). Like theme...extend...colors... primary: colors.violet. Or even customize the default one by doing
  {...colors.violet, DEFAULT: colors.violet[600]}. That way it's even easier to change the theme!
- With group AND peer you can customize the UI even if it's not a direct element you are interacting with
- Inside the same component, you can still use class delegation...use it to make your code more reusable and easier read

- Instead of customizing / modifying each component, modify the theme (so you can change everything easier later!)
- Useful extensions:
  ** Documentation
  ** Fold
  \*\* Intellisense

### Colors

- Greys, Primary, Secondary?, Accent (is this the same as semantic?)

Components
https://www.landingfolio.com/

Layouts
https://layoutsfortailwind.lalokalabs.dev/
https://tailblocks.cc/

Section Layouts
https://web.dev/one-line-layouts/

doodles
https://svgdoodles.com/
https://www.figma.com/file/YC6OODsDqMKPJ4jjlCNcYF/Doodle-icons-(Community)?type=design&node-id=8-3019&mode=design&t=Bwo8OE7EPufxXGQ9-0

blobs: https://app.haikei.app/

tailwind Snippets
https://snippets.alexandru.so/

ICONS
notion style icons
https://www.overflow.design/ni.html
https://feathericons.com/ -> https://github.com/feathericons/react-feather (this is the binding)

Fonts
https://fonts.google.com/?vfquery=brico&query=bricolage&vfonly=true
