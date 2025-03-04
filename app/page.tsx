import ThemeProvider from "../components/ThemeProvider"
import HomePage from "../components/HomePage"

export default function Home() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

