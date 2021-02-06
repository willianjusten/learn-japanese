import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  color: #fff;
  padding: 3rem;
  text-align: center;
`

export const Title = styled.h1`
  font-family: 'Zhi Mang Xing', cursive;
  font-size: 6rem;
  font-weight: 400;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Image = styled.img`
  width: 15rem;

  ${media.lessThan('medium')`
    width: 8rem;
  `}
`

export const Selector = styled.button`
  border: none;
  background: none;
  color: white;
  border-bottom: 1px solid white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(12rem, 1fr));
  grid-gap: 3rem;
  margin: 5rem auto 0;
  max-width: 100rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  `}
`

export const Footer = styled.footer`
  font-size: 1.5rem;
  margin-top: 4rem;

  a,
  span {
    color: #f231a5;
  }
`
