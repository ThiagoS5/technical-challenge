'use client'

import { Badge } from '@/components/atom/badge'
import { Card } from '@/components/atom/card'
import { cn } from '@/lib/utils'
import { BedDouble, Building2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ExpansiveCardProps {
  imageUrl: string
  status: string
  title: string
  city: string
  neighborhood: string
  description: string
  features: string
}

export function ExpansiveCard({
  imageUrl,
  status,
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
      className="relative h-96 w-full max-w-sm cursor-pointer overflow-hidden rounded-lg shadow-lg group"
      onClick={toggleExpand}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <Badge variant="secondary" className="mb-4 bg-white/90 text-black">
          {status}
        </Badge>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div
          className={cn(
            'mt-4 space-y-4 transition-all duration-300 ease-in-out',
            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/90">
            <div>
              <p className="text-xs font-light">Cidade</p>
              <p className="font-semibold">{city}</p>
            </div>
            <div>
              <p className="text-xs font-light">Bairro</p>
              <p className="font-semibold">{neighborhood}</p>
            </div>
          </div>
          <div className="space-y-3 text-white">
            <div className="flex items-center gap-3">
              <BedDouble size={20} color="#76C9B5" />
              <span>{description}</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 size={20} color="#76C9B5" />
              <span>{features}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
