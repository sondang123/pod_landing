import React from 'react'
export const Banner: React.FC = () => {
  return (
    <div className="bg-neutral-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-neutral-700 py-[25px]">
          <p className="typo-s24-w700 text-white">Personalify</p>
        </div>
      </div>
    </div>
  )
}
