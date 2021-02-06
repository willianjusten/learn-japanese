import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Main from '.'

describe('<Main />', () => {
  it('should render hiragana', () => {
    render(<Main />)

    expect(screen.getByText(/あ/i)).toBeInTheDocument()
  })

  it('should render hiragana/katakana when selected', () => {
    render(<Main />)

    userEvent.click(screen.getByText(/Katakana/i))
    expect(screen.getByText(/ア/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/Hiragana/i))
    expect(screen.getByText(/あ/i)).toBeInTheDocument()
  })
})
