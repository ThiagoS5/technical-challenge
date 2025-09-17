'use client'

import { Button } from '@/components/atom/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atom/select'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/molecules/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { Send, SlidersHorizontal, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Textarea } from '../../components/atom/textarea'
import { FloatingLabelInput } from '../../components/molecules/FloatingLabelInput'
import { ContactForm } from '../../components/organisms/ContactForm'
import { ExpansiveCard } from '../../components/molecules/ExpansiveCard'

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
    <main className=" bg-neutral-100 font-urbanist">
      <div className=" bg-white">
        <h1 className="mb-8 border-b pb-4 text-3xl font-bold sm:text-4xl">
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
            Fade({}),
          ]}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video items-center justify-center overflow-hidden h-screen w-full">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    priority={index === 0}
                    fill
                    className="object-cover"
                  />
                </div>
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
        </Carousel>
        <section className="mb-12 mt-20">
          <h2 className="mb-6 text-2xl font-semibold">Inputs</h2>
          <Textarea placeholder="Textarea Padrão" className="mt-1" />
          <FloatingLabelInput
            label="Floating Label"
            id="floating-label"
            placeholder=" "
            className="mt-1"
          />
        </section>
        <section className="mb-12 mt-20">
          <h2 className="mb-6 text-2xl font-semibold">Formulário</h2>
          <ContactForm />
        </section>
        {/* ============================================= */}
        {/* ===========Card Expansivo==================== */}
        {/* ============================================= */}
        <section className="mb-12 mt-20">
          <h2 className="mb-6 text-2xl font-semibold">
            Componente: Card Expansivo
          </h2>
          <ExpansiveCard
            imageUrl="/image-1.png"
            tag="Novo"
            title="Apartamento Luxuoso"
            city="São Paulo"
            neighborhood="Jardins"
            description="2 dormitórios, 1 suíte"
            features="Ar-condicionado, Varanda Gourmet"
          />
        </section>
      </div>
    </main>
  )
}
