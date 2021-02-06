import { useEffect, useState } from 'react'

import Symbol from 'components/Symbol'

import hiragana from 'data/hiragana'
import katakana from 'data/katakana'

import * as S from './styles'

const Main = () => {
  const [pairs, setPairs] = useState(hiragana)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const voices = window.speechSynthesis?.getVoices()

    const jpVoice = voices?.find((voice) => /ja-JP/.test(voice.lang))
    setVoice(jpVoice || voices?.[0])
  }, [])

  const speak = (word: string) => {
    // japanese voice
    const utterance = new SpeechSynthesisUtterance()

    // Utterance properties
    utterance.text = word
    utterance.lang = 'ja-JP'
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
        <p>Click on each symbol and learn the pronunciation.</p>
        <S.Small>
          * This application uses the new Web Speech API, so it might not work
          correctly in some browsers/devices.
        </S.Small>
      </S.Description>

      <div>
        <S.Selector onClick={() => setPairs(hiragana)}>Hiragana</S.Selector>
        <S.Selector onClick={() => setPairs(katakana)}>Katakana</S.Selector>
      </div>

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
