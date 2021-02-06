import { useState } from 'react'

import Symbol from 'components/Symbol'

import hiragana from 'data/hiragana'
import katakana from 'data/katakana'

import * as S from './styles'

const Main = () => {
  const [pairs, setPairs] = useState(hiragana)

  const speak = (word: string) => {
    // japanese voice
    const utterance = new SpeechSynthesisUtterance()
    const voice = window.speechSynthesis.getVoices()[12]

    // Utterance properties
    utterance.text = word
    utterance.voice = voice
    utterance.rate = 0.4

    window.speechSynthesis.speak(utterance)
  }

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Image src="img/japanese-man.svg" alt="Cute japanese man" />
        <S.Title>Learn Japanese</S.Title>
        <S.Image src="img/japanese-woman.svg" alt="Cute japanese woman" />
      </S.TitleWrapper>
      <S.Description>
        Click on each symbol and learn the pronunciation.
      </S.Description>

      <S.Selector onClick={() => setPairs(hiragana)}>Hiragana</S.Selector>
      <S.Selector onClick={() => setPairs(katakana)}>Katakana</S.Selector>

      <S.Grid>
        {pairs.map(([japanese, english]) => (
          <Symbol
            key={`symbol-${english}`}
            japanese={japanese}
            english={english}
            speak={() => speak(japanese)}
          />
        ))}
      </S.Grid>

      <S.Footer>
        Made with <a href="https://nextjs.org/">NextJS</a> and
        <span> 愛</span> by{' '}
        <a href="https://willianjusten.com.br">Willian Justen</a>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Main
