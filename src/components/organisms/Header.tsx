'use client'

import { cn } from '@/lib/utils'
import { Facebook, Instagram, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../atom/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/liva-icon.png"
            alt="Liva empreendimentos"
            width={100}
            height={43}
            className="cursor-pointer h-10 w-auto"
            priority={true}
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            <li>
              <Button variant="link" asChild>
                <Link href="/">HOME</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#about">SOBRE A LIVA</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#properties">EMPREENDIMENTOS</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#properties">NOTÍCIAS</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#contact">CONTATO</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center space-x-4 md:flex">
          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex size-8 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80"
            >
              <Facebook size={16} fill="currentColor" strokeWidth={0} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex size-8 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80"
            >
              <Instagram size={16} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <a
            href="https://wa.me/+5516996517844"
            target="_blank"
            className="block"
          >
            <Button variant="send" className="w-full gap-2 ml-4">
              {' '}
              <svg
                className="size-5 shrink-0"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp icon</title>
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              WHATSAPP
            </Button>
          </a>
        </div>
        <div className="z-50 md:hidden">
          {' '}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'fixed inset-0 z-40 h-screen w-screen bg-white md:hidden',
          'flex flex-col p-4 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b pb-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/liva-icon.png"
              alt="Liva empreendimentos"
              width={100}
              height={43}
              priority={true}
              className="h-10 w-auto"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
            <span className="sr-only">Fechar menu</span>
          </Button>
        </div>
        <nav className="flex-grow pt-8">
          <ul className="flex flex-col items-start space-y-6">
            <li>
              <Button
                variant="link"
                className="text-xl"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/">HOME</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-xl"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#about">SOBRE A LIVA</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-xl"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#properties">EMPREENDIMENTOS</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-xl"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#properties">NOTÍCIAS</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-xl"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#contact">CONTATO</Link>
              </Button>
            </li>
          </ul>
          <div className=" p-4">
            <p className="mb-3 text-sm font-semibold text-gray-800">
              Acompanhe nas redes
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full bg-black text-white"
              >
                <Facebook size={16} fill="currentColor" strokeWidth={0} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full bg-black text-white"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </nav>
        <div className="border-t pt-6">
          <a
            href="https://wa.me/+5516996517844"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="send" className="w-full gap-2">
              {' '}
              <svg
                className="size-5 shrink-0"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp icon</title>
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              WHATSAPP
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
