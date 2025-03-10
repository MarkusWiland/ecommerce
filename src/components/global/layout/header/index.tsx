import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <header className="container fixed left-0 right-0 top-0 z-50 mx-auto flex items-center justify-between bg-background/90 px-6 py-3 backdrop-blur-md transition-all sm:border-x sm:py-4">
      <h1>Fotbollströjan.se</h1>
      <nav className="flex">
        <ul  className="flex">
          <li>Start</li>
          <li>Produkter</li>
          <li>Om Oss</li>
          <li>Kampanjer</li>
          <li>Kontakta oss</li>
        </ul>
      </nav>
      <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-black/30 hover:rounded-full">
        <ShoppingCart className="w-6 h-6" />

        {2 > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full">
            {2}
          </span>
        )}
      </div>
    </header>
  )
}
