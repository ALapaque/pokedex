import type { Meta } from '@storybook/react'
import { Header } from './header'

const Story: Meta<typeof Header> = {
  component: Header,
  title: 'Organisms/Header',
}
export default Story

export const Default = {
  args: {}
}
