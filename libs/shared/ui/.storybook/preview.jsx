import {withRouter} from 'storybook-addon-react-router-v6'
import '../src/lib/styles/index.css'

export const decorators = [
  withRouter,
  (Story) => (
    <Story />
  )
]
