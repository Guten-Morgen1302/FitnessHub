import ThemeProvider from '@/components/ThemeProvider'
import DashboardContent from '@/components/DashboardContent'

export default function Dashboard() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  )
}

