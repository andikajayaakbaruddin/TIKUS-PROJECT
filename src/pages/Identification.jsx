import React, { useState } from 'react'
import ratData from '../data/ratData.json'
import ResultCard from '../components/ResultCard'

const Identification = () => {
  const [formData, setFormData] = useState({
    weight: '',
    totalLength: '',
    headBody: '',
    tail: '',
    hindFoot: '',
    ear: '',
    teats: ''
  })
  
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const identifyRat = () => {
    setIsLoading(true)
    setHasSearched(true)
    
    // Simulate loading delay
    setTimeout(() => {
        const matches = ratData.rats.filter(rat => {
          let score = 0
          let totalChecks = 0

          // Check weight
          if (formData.weight) {
            totalChecks++
            const weight = parseFloat(formData.weight)
            if (weight >= rat.morphology.weight.min && weight <= rat.morphology.weight.max) score++
          }

          // Check total length
          if (formData.totalLength) {
            totalChecks++
            const tl = parseFloat(formData.totalLength)
            if (tl >= rat.morphology.totalLength.min && tl <= rat.morphology.totalLength.max) score++
          }

          // Check head+body length
          if (formData.headBody) {
            totalChecks++
            const hb = parseFloat(formData.headBody)
            if (hb >= rat.morphology.headBody.min && hb <= rat.morphology.headBody.max) score++
          }

          // Check tail length
          if (formData.tail) {
            totalChecks++
            const t = parseFloat(formData.tail)
            if (t >= rat.morphology.tail.min && t <= rat.morphology.tail.max) score++
          }

          // Check hind foot length
          if (formData.hindFoot) {
            totalChecks++
            const hf = parseFloat(formData.hindFoot)
            if (hf >= rat.morphology.hindFoot.min && hf <= rat.morphology.hindFoot.max) score++
          }

          // Check ear length
          if (formData.ear) {
            totalChecks++
            const e = parseFloat(formData.ear)
            if (e >= rat.morphology.ears.min && e <= rat.morphology.ears.max) score++
          }

          // Check teats
          if (formData.teats) {
            totalChecks++
            if (rat.morphology.teats === formData.teats) {
              score++
            }
          }

          // Return true only if ALL checked parameters match (100% accuracy)
          return totalChecks > 0 && score === totalChecks
        })
      
      setResults(matches)
      setIsLoading(false)
    }, 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    identifyRat()
  }

  const resetForm = () => {
    setFormData({
      weight: '',
      totalLength: '',
      headBody: '',
      tail: '',
      hindFoot: '',
      ear: '',
      teats: ''
    })
    setResults([])
    setIsLoading(false)
    setHasSearched(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Identifikasi Tikus Jawa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Masukkan data morfologi tikus untuk mengidentifikasi jenisnya secara akurat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Form Input */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-kemenkes-blue">
                Parameter Morfologi
              </h2>
            </div>
          
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Berat (W) - gram
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder="Contoh: 150"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200"
                    min="0"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Panjang Total (TL) - mm
                  </label>
                  <input
                    type="number"
                    name="totalLength"
                    value={formData.totalLength}
                    onChange={handleInputChange}
                    placeholder="Contoh: 200"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kepala + Badan (H+B) - mm
                  </label>
                  <input
                    type="number"
                    name="headBody"
                    value={formData.headBody}
                    onChange={handleInputChange}
                    placeholder="Contoh: 100"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200"
                    min="0"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ekor (T) - mm
                  </label>
                  <input
                    type="number"
                    name="tail"
                    value={formData.tail}
                    onChange={handleInputChange}
                    placeholder="Contoh: 100"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 h-8">
                    Kaki Belakang (HF) - mm
                  </label>
                  <input
                    type="number"
                    name="hindFoot"
                    value={formData.hindFoot}
                    onChange={handleInputChange}
                    placeholder="Contoh: 18"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200 h-12"
                    min="0"
                    step="0.1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 h-8">
                    Telinga (E) - mm
                  </label>
                  <input
                    type="number"
                    name="ear"
                    value={formData.ear}
                    onChange={handleInputChange}
                    placeholder="Contoh: 16"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200 h-12"
                    min="0"
                    step="0.1"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 h-8">
                    Jumlah Puting (Teats)
                  </label>
                  <select
                    name="teats"
                    value={formData.teats}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kemenkes-blue focus:border-transparent transition-all duration-200 bg-white h-12"
                  >
                    <option value="">Pilih jumlah puting</option>
                    <option value="2+1">2+1</option>
                    <option value="2+2">2+2</option>
                    <option value="2+3">2+3</option>
                    <option value="3+2">3+2</option>
                    <option value="3+3">3+3</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-kemenkes-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengidentifikasi...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                      Identifikasi
                    </span>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 focus:ring-4 focus:ring-gray-200 transition-all duration-200"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    Reset
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Results */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-kemenkes-green">
                Hasil Identifikasi
              </h2>
            </div>
          
            {!hasSearched ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Siap untuk Identifikasi</h3>
                <p className="text-gray-500">Masukkan data morfologi dan klik "Identifikasi" untuk melihat hasil</p>
              </div>
            ) : isLoading ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <div className="animate-spin w-16 h-16 border-4 border-kemenkes-blue border-t-transparent rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Menganalisis Data</h3>
                <p className="text-gray-600">Sedang memproses parameter morfologi...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Tidak Ada Hasil yang Cocok</h3>
                <p className="text-gray-500 mb-4">Periksa kembali data yang dimasukkan atau coba dengan parameter yang berbeda</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">💡 <strong>Tips:</strong> Pastikan semua pengukuran akurat dan dalam satuan yang benar</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {results.length > 1 && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-yellow-800 font-semibold mb-1">Perhatian: Multiple Match</h4>
                        <p className="text-yellow-700 text-sm">
                          Ditemukan <strong>{results.length} kemungkinan jenis tikus</strong>. 
                          Periksa deskripsi detail untuk identifikasi yang lebih akurat.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="grid gap-6">
                  {results.map((rat) => (
                    <ResultCard key={rat.id} rat={rat} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identification