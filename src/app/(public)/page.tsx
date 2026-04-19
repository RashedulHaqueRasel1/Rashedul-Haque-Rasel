import { Metadata } from 'next'
import Home from '../../components/features/public/Home/Home'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the portfolio of Rashedul Haque Rasel, highlighting full-stack MERN expertise and impactful projects.',
}

const RootPage = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default RootPage
