import { themes } from '@storybook/theming'

//import "../src/app/app.css"
//import "@themes/default"
//import "@themes/colorize"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },    
  },
}

export default preview
