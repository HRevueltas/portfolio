// import { ContentGrid } from './components/ContentGrid'
import { AppRouter } from './router/AppRouter'
import ThemeProvider from './theme/ThemeProvider'
export const Portfolio = () => {
  return (

    <>
      {/* <AppTheme> */}
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
      {/* </AppTheme> */}

      {/* <ContentGrid /> */}
    </>// 

  )
}
