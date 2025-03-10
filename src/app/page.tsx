import Hero from '@/components/global/common/hero'
import { Section } from '@/components/global/common/section'
import BestSellers from '@/components/global/sections/bestSellers'
import InfoSection from '@/components/global/sections/infoSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
const products = [
  {
    id: 1,
    title: 'Walker 2.0 Black green',
    price: 999,
    oldPrice: 1290,
    image: '/lamal.jpg',
    featured: true,
  },
  { id: 2, title: 'Produkter i Fokus', special: true },
  { id: 3, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  { id: 4, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  { id: 5, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  { id: 6, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  {
    id: 7,
    title: 'Mondrian - Styla med klass',
    price: 1200,
    image: '/lamal.jpg',
    highlight: true,
  },
  { id: 8, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  { id: 9, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  { id: 10, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
  { id: 11, title: 'Nombre Zapatilla', price: 950, image: '/lamal.jpg' },
]
export default function Home() {
  return (
    <div>
      <Hero
        image="https://picsum.photos/1000" // Ändra till en riktig bild
        title="Välkommen till vår butik!"
        subtitle="Upptäck våra bästsäljande fotbollströjor"
      >
        <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Utforska Produkter
        </button>
      </Hero>
      <InfoSection />
    {/* <BestSellers /> */}  
    <Section className={cn("p-6")}>
  <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden">
      
      {/* Stor Featured Produkt */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gradient-to-b from-background to-muted p-12 text-foreground relative border-b border-border flex flex-col lg:flex-row items-center lg:items-start shadow-lg rounded-lg">
        
        {/* Vänster: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <h3 className="text-secondary font-semibold uppercase tracking-wide">
            Erbjudande för månaden
          </h3>
          <h2 className="text-4xl font-extrabold">
            Walker 2.0{" "}
            <span className="text-muted-foreground font-medium">Black Green</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Supersnabba, lätta skor, perfekta för träning. Designade för komfort och stabilitet.
          </p>

          <div className="mt-4">
            <span className="text-primary text-3xl font-bold">$999</span>
            <span className="text-muted-foreground text-xl line-through ml-2">$1290</span>
          </div>

          <button className="mt-6 bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-6 rounded-md">
            🛒 Köp Nu
          </button>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">01</p>
              <p className="text-muted-foreground text-sm">DAG</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">23</p>
              <p className="text-muted-foreground text-sm">TIMMAR</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">55</p>
              <p className="text-muted-foreground text-sm">MIN</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">32</p>
              <p className="text-muted-foreground text-sm">SEK</p>
            </div>
          </div>
        </div>

        {/* Höger: Bild */}
        <div className="w-full lg:w-1/2 relative h-80 flex justify-center items-center">
          <div className="absolute w-72 h-40 bg-muted rounded-full blur-lg opacity-50"></div>
          <Image
            src="/lamal.jpg"
            alt="Walker 2.0"
            width={400}
            height={400}
            className="relative"
          />
        </div>
      </div>

      {/* "Produkter i Fokus" Sektionen */}
      <div className="col-span-1 bg-sidebar-background text-sidebar-foreground p-6 flex items-center justify-center border-r border-b border-border">
        <h3 className="text-xl font-semibold">{products[1].title}</h3>
      </div>

      {/* Produktgrid */}
      {products.slice(1).map((product, index) => (
        <div
          key={product.id}
          className={`p-6 relative transform transition-all border border-border ${
            product.highlight
              ? "col-span-2 bg-gradient-to-b from-secondary to-secondary-foreground text-secondary-foreground"
              : "bg-gradient-to-b from-background to-muted"
          }`}
        >
          {/* Bild med skugga */}
          <div className="relative w-full h-40 flex justify-center items-center">
            <div className="absolute w-40 h-20 bg-muted rounded-full blur-lg opacity-30"></div>
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="relative"
            />
          </div>

          {/* Produktnamn */}
          <h3 className="text-lg font-semibold mt-4 text-center">{product.title}</h3>

          {/* Pris */}
          {product.price && (
            <p className="text-center text-primary text-xl font-bold">${product.price}</p>
          )}

          {/* CTA-knapp */}
          <Button className="mt-4 w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 rounded-md">
            🔥 Gå till produkt
          </Button>
        </div>
      ))}
    </div>
  </div>
</Section>

    </div>
  )
}
