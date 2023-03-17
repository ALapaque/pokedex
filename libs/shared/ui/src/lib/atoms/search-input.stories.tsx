import type { Meta } from '@storybook/react'
import { SearchInput } from './search-input'

const Story: Meta<typeof SearchInput> = {
  component: SearchInput,
  title: 'Atoms/SearchInput'
}
export default Story

export const Default = {
  args: {}
}
