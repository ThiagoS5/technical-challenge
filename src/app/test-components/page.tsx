'use client'

import { Button } from '@/components/ui/Button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Autoplay from 'embla-carousel-autoplay'
import { Send, SlidersHorizontal, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const heroImages = [
  { src: '/image-1.png', alt: '...' },
  { src: '/image-2.png', alt: '...' },
  { src: '/image-3.png', alt: '...' },
]

export default function TestComponentsPage() {
  const [isFilterActive, setIsFilterActive] = useState(false)
  const [sendStatus, setSendStatus] = useState<'default' | 'sending' | 'sent'>(
    'default',
  )

  const handleSendMessage = () => {
    setSendStatus('sending')
    setTimeout(() => {
      setSendStatus('sent')
      setTimeout(() => setSendStatus('default'), 3000)
    }, 2000)
  }

  return (
    <main className=" bg-neutral-100 font-sans">
      <div className=" bg-white">
        <h1 className="mb-8 border-b pb-4 text-4xl font-bold">
          Página de Testes de Componentes
        </h1>
        {/* ============================================= */}
        {/* =========== TESTES DO BOTÃO =============== */}
        {/* ============================================= */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Componente: Button</h2>
          <h3 className="mb-3 text-lg font-medium">1. Variantes de Estilo</h3>
          <div className="flex flex-wrap items-center gap-4 rounded-md border p-4">
            <Button variant="primary">Primary</Button>
            <Button variant="filter">Filter</Button>
            <div className="rounded-md bg-black p-4">
              <Button variant="about">About (Fundo Escuro)</Button>
            </div>
            <Button variant="send">Send</Button>
            <Button variant="link">Link</Button>
          </div>
          <h3 className="mt-6 mb-3 text-lg font-medium">
            2. Estados Interativos
          </h3>
          <div className="flex flex-wrap items-center gap-4 rounded-md border p-4">
            {/* Teste do botão de Filtro Ativo/Inativo */}
            <Button
              variant="filter"
              state={isFilterActive ? 'active' : 'default'}
              Icon={isFilterActive ? X : SlidersHorizontal}
              onClick={() => setIsFilterActive(!isFilterActive)}
            >
              Filtros
            </Button>
            {/* Teste do botão de Envio com estados assíncronos */}
            <Button
              variant="send"
              status={sendStatus}
              onClick={handleSendMessage}
              Icon={Send}
            >
              {sendStatus === 'default' && 'Enviar Mensagem'}
              {sendStatus === 'sending' && 'Enviando...'}
              {sendStatus === 'sent' && 'Mensagem Enviada!'}
            </Button>
          </div>

          <h3 className="mt-6 mb-3 text-lg font-medium">
            3. Estado Desabilitado
          </h3>
          <div className="flex flex-wrap items-center gap-4 rounded-md border p-4">
            <Button variant="primary" disabled>
              Primary Disabled
            </Button>
            <Button variant="send" disabled>
              Send Disabled
            </Button>
          </div>
        </section>
        {/* ============================================= */}
        {/* =========== TESTES DO SELECT ================ */}
        {/* ============================================= */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Componente: Select</h2>
          <h3 className="mb-3 text-lg font-medium">1. Select Padrão</h3>
          <p className="mb-2 text-sm text-neutral-600">
            Clique para ver o dropdown com fundo preto e itens com hover cinza.
          </p>
          <div className="rounded-md border p-4">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione um dormitório" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">1 dormitório</SelectItem>
                  <SelectItem value="2">2 dormitórios</SelectItem>
                  <SelectItem value="3">3 dormitórios ou mais</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <h3 className="mt-6 mb-3 text-lg font-medium">
            2. Select com Valor Padrão
          </h3>
          <div className="rounded-md border p-4">
            <Select defaultValue="sp">
              <SelectTrigger className="w-[280px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <h3 className="mt-6 mb-3 text-lg font-medium">
            3. Select Desabilitado
          </h3>
          <div className="rounded-md border p-4">
            <Select disabled>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Este select está desabilitado" />
              </SelectTrigger>
            </Select>
          </div>
        </section>
        {/* --- SEÇÃO DO CARROSSEL --- */}
        <h2 className="mb-6 text-2xl font-semibold">Componente: Carousel</h2>

        <h3 className="mb-3 text-lg font-medium">
          1. Carrossel Básico (1 slide por vez)
        </h3>
        <Carousel
          className="h-svh"
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video items-center justify-center overflow-hidden h-screen w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-3xl md:text-8xl font-bold drop-shadow-lg">
              Barra View
            </h1>
            <p className="mt-4 max-w-lg text-lg drop-shadow-md">
              O seu novo lar com vista para o mar.
            </p>
          </div>
          <section className="container mx-auto py-20">
            <h2 className="text-center text-3xl font-bold">
              Conheça os detalhes
            </h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Aqui começa o conteúdo da sua página.
            </p>
          </section>
        </Carousel>
      </div>
    </main>
  )
}
