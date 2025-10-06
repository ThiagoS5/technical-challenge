import React from 'react'

const shouldThrowError = jest.fn(() => false)

export const __setShouldThrowError = (shouldThrow: boolean) => {
  shouldThrowError.mockReturnValue(shouldThrow)
}

export const useCarousel = () => {
  if (shouldThrowError()) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }
  return {
    scrollPrev: jest.fn(),
    scrollNext: jest.fn(),
    canScrollPrev: true,
    canScrollNext: true,
  }
}

export const Carousel = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)
export const CarouselContent = ({
  children,
}: {
  children: React.ReactNode
}) => <div>{children}</div>
export const CarouselItem = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)
export const CarouselPrevious = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>Previous</button>
)
export const CarouselNext = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>Next</button>
)
