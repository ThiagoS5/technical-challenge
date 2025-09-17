'use client'

import { Badge } from '@/components/atom/badge'
import { Card } from '@/components/atom/card'
import { BedDouble, Building2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ExpansiveCardProps {
  imageUrl: string
  tag: string
  title: string
  city: string
  neighborhood: string
  description: string
  features: string
}

export function ExpansiveCard({
  imageUrl,
  tag,
  title,
  city,
  neighborhood,
  description,
  features,
}: ExpansiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card
      className="relative w-full max-w-sm h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      onClick={toggleExpand}
    >
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div
        className={`absolute bottom-0 left-0 p-6 w-full transition-opacity duration-300 ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Badge variant="secondary" className="mb-4 bg-white/90 text-black">
          {tag}
        </Badge>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>

      <div
        className={`absolute inset-0 p-6 flex flex-col justify-end bg-black/70 transition-opacity duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Badge
          variant="secondary"
          className="mb-4 bg-white/90 text-black w-fit"
        >
          {tag}
        </Badge>
        <h2 className="text-3xl font-bold text-white">{title}</h2>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-white/90">
          <div>
            <p className="text-xs font-light">Cidade</p>
            <p className="font-semibold">{city}</p>
          </div>
          <div>
            <p className="text-xs font-light">Bairro</p>
            <p className="font-semibold">{neighborhood}</p>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-white">
          <div className="flex items-center gap-3">
            <BedDouble size={20} />
            <span>{description}</span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 size={20} />
            <span>{features}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
