import * as S from './styles'

export type SymbolProps = {
  japanese: string
  english: string
  speak: () => void
}

const Symbol = ({ japanese, english, speak }: SymbolProps) => (
  <S.Button onClick={speak}>
    <h1>{japanese}</h1>
    <p>{english}</p>
  </S.Button>
)

export default Symbol
