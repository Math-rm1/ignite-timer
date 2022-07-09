import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
    </ThemeProvider>
  )
}