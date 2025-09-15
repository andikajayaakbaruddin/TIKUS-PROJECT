import React from 'react'

const ResultCard = ({ rat }) => {
  const { scientificName, localName, description, habitat, healthRisk, morphology, characteristics } = rat

  return (
    <div className="bg-gradient-to-br from-kemenkes-blue to-kemenkes-green rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-white bg-opacity-10 p-4">
        <h3 className="text-xl font-bold text-white mb-1">
          {scientificName}
        </h3>
        <p className="text-blue-100 font-medium">
          {localName}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {/* Rat Image */}
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          {rat.image ? (
            <img 
              src={rat.image} 
              alt={`${rat.scientificName} - ${rat.localName}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-full h-full flex items-center justify-center text-center text-gray-500" style={{display: rat.image ? 'none' : 'flex'}}>
            <div>
              <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Ilustrasi Tikus</p>
            </div>
          </div>
        </div>

        {/* Morphology Data */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Rentang Morfologi:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Berat:</span> {morphology.weight.min}-{morphology.weight.max}g
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Panjang Total:</span> {morphology.totalLength.min}-{morphology.totalLength.max}mm
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Kepala+Badan:</span> {morphology.headBody.min}-{morphology.headBody.max}mm
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Ekor:</span> {morphology.tail.min}-{morphology.tail.max}mm
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Kaki Belakang:</span> {morphology.hindFoot.min}-{morphology.hindFoot.max}mm
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <span className="font-medium">Telinga:</span> {morphology.ears.min}-{morphology.ears.max}mm
            </div>
            {morphology.teats && (
              <div className="bg-gray-50 p-2 rounded col-span-2">
                <span className="font-medium">Jumlah Puting:</span> {morphology.teats}
              </div>
            )}
          </div>
        </div>

        {/* Physical Characteristics */}
        {characteristics && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Karakteristik Fisik:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-green-50 p-2 rounded">
                <span className="font-medium">Bentuk Rambut:</span> {characteristics.hairType}
              </div>
              <div className="bg-green-50 p-2 rounded">
                <span className="font-medium">Bentuk Hidung:</span> {characteristics.noseShape}
              </div>
              <div className="bg-green-50 p-2 rounded">
                <span className="font-medium">Bentuk Badan:</span> {characteristics.bodyShape}
              </div>
            </div>
          </div>
        )}

        {/* Color Characteristics */}
        {characteristics && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Karakteristik Warna:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-medium">Dorsal (Punggung):</span> {characteristics.dorsalColor}
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-medium">Ventral (Perut):</span> {characteristics.ventralColor}
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-medium">Ekor Dorsal:</span> {characteristics.tailDorsalColor}
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-medium">Ekor Ventral:</span> {characteristics.tailVentralColor}
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Deskripsi Morfologi:</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Habitat */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-kemenkes-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Habitat:
          </h4>
          <p className="text-gray-600 text-sm">
            {habitat}
          </p>
        </div>

        {/* Health Risk */}
        <div className="mb-4">
          <h4 className="font-semibold text-red-600 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Risiko Kesehatan:
          </h4>
          <p className="text-red-700 text-sm bg-red-50 p-3 rounded border border-red-200">
            {healthRisk}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center pt-4 border-t border-gray-200">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm">
            Detail Lengkap
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard