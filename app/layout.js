import './globals.css'

export const metadata = {
  title: 'Tomiwa Oladimeji - AI/ML Engineer',
  description: 'Portfolio of Tomiwa Oladimeji - AI/ML Engineer specializing in LangChain, MLOps, and intelligent systems',
  keywords: 'AI Engineer, ML Engineer, LangChain, MLflow, Python, Portfolio',
  authors: [{ name: 'Tomiwa Oladimeji' }],
  openGraph: {
    title: 'Tomiwa Oladimeji - AI/ML Engineer',
    description: 'Portfolio showcasing AI/ML projects and expertise',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}