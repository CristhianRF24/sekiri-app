'use client'
import ClientsCarousel from '@/components/ClientsCarousel'
import FeaturesCarousel from '@/components/FeaturesCarousel'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TablePricing from '@/components/TablePricing'


const HomePage = () => {
  return (
    <div>
    
     <Header/>
     <Hero/>
     <FeaturesCarousel/>
     <ClientsCarousel/>
     <TablePricing/>
    </div>
  )
}

export default HomePage