import Main from 'components/Main'
import { NextSeo } from 'next-seo'
import GithubCorner from 'react-github-corner'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Learn Japanese"
        description="Learn hiragana and katakana in an easy way."
        canonical="https://learnjapanese.vercel.app"
        openGraph={{
          url: 'https://learnjapanese.vercel.app',
          title: 'Learn Japanese',
          description: 'Learn hiragana and katakana in an easy way.',
          images: [
            {
              url: 'https://learnjapanese.vercel.app/img/cover.png'
            }
          ],
          site_name: 'LearnJapanese'
        }}
        twitter={{
          handle: '@Willian_justen',
          site: '@Willian_justen',
          cardType: 'summary_large_image'
        }}
      />
      <GithubCorner
        href="https://github.com/willianjusten/learn-japanese"
        octoColor="#06092b"
        bannerColor="#f231a5"
      />
      <Main />
    </>
  )
}
