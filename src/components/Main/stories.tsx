import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
