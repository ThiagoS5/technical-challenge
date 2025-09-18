'use client'

import { useState } from 'react'
import { Button } from '@/components/atom/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atom/select'
import { SlidersHorizontal, X } from 'lucide-react'
import { ExpansiveCard } from '@/components/molecules/ExpansiveCard'
import allPropertiesData from '@/data/properties.json' // Importando do JSON

const allProperties = allPropertiesData

export function PropertyListing() {
  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)
  const [stageFilter, setStageFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const filteredProperties = allProperties.filter((property) => {
    const stageMatch = stageFilter === 'all' || property.status === stageFilter
    const locationMatch =
      locationFilter === 'all' || property.city === locationFilter
    const typeMatch = typeFilter === 'all' || property.type === typeFilter

    return stageMatch && locationMatch && typeMatch
  })

  const propertiesToShow = filteredProperties.slice(0, visibleCount)

  const handleStageChange = (value: string) => {
    setStageFilter(value)
    setVisibleCount(8)
  }
  const handleLocationChange = (value: string) => {
    setLocationFilter(value)
    setVisibleCount(8)
  }
  const handleTypeChange = (value: string) => {
    setTypeFilter(value)
    setVisibleCount(8)
  }

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-4xl font-light leading-tight lg:text-5xl">
          Confira todos os <br /> empreendimentos{' '}
          <span className="font-bold text-teal-500">da Liva</span>
        </h1>
        <Button
          variant={showFilters ? 'primary' : 'filter'}
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          {showFilters ? <X size={18} /> : <SlidersHorizontal size={18} />}
          FILTROS
        </Button>

        {showFilters && (
          <div className="w-full max-w-sm space-y-4 pt-4 text-left">
            <Select value={stageFilter} onValueChange={handleStageChange}>
              <SelectTrigger>
                <SelectValue placeholder="Estágio do empreendimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Estágios</SelectItem>
                <SelectItem value="PRÉ LANÇAMENTO">Pré Lançamento</SelectItem>
                <SelectItem value="EM OBRAS">Em Obras</SelectItem>
                <SelectItem value="PRONTO PARA MORAR">
                  Pronto para Morar
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={locationFilter} onValueChange={handleLocationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Localização" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Cidades</SelectItem>
                <SelectItem value="Ribeirão Preto">Ribeirão Preto</SelectItem>
                <SelectItem value="Franca">Franca</SelectItem>
                <SelectItem value="Campinas">Campinas</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={handleTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de imóvel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Tipos</SelectItem>
                <SelectItem value="Apartamento">Apartamento</SelectItem>
                <SelectItem value="Casa">Casa</SelectItem>
                <SelectItem value="Terreno">Terreno</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {propertiesToShow.map((property) => (
          <ExpansiveCard
            key={property.id}
            imageUrl={property.imageUrl}
            title={property.title}
            city={property.city}
            neighborhood={property.neighborhood}
            description={property.description}
            features={property.features}
            status={property.status}
          />
        ))}
      </div>
      {visibleCount < filteredProperties.length && (
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            CARREGAR MAIS
          </Button>
        </div>
      )}
    </section>
  )
}
