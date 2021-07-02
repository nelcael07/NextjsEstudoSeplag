import Document, { HTML, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <HTML lang='pt-BR'>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </HTML>
    )
  }
}

export default MyDocument