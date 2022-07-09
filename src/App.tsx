import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyled />
    </ThemeProvider>
  )
}
