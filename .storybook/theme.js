import { create } from '@storybook/theming/create'

import Logo from './assets/MyPureReactAppLogo.png'

export default create({
  base: 'dark',
  brandTitle: 'My Pure React App',
  //brandUrl: 'https://example.com',
  brandImage: Logo,
  brandTarget: '_self',
})
