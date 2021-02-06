import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Symbol from '.'

describe('<Symbol />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Symbol japanese="あ" english="a" speak={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /あ/i })).toBeInTheDocument()
    expect(screen.getByText(/a/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call speak function when click', () => {
    const speak = jest.fn()
    render(<Symbol japanese="あ" english="a" speak={speak} />)

    userEvent.click(screen.getByText(/あ/i))

    expect(speak).toHaveBeenCalled()
  })
})
