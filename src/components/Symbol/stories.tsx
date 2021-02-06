import { Story, Meta } from '@storybook/react/types-6-0'
import Symbol, { SymbolProps } from '.'

export default {
  title: 'Symbol',
  component: Symbol,
  args: {
    japanese: 'あ',
    english: 'a'
  }
} as Meta

export const Default: Story<SymbolProps> = (args) => <Symbol {...args} />
