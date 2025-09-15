import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Kunci Identifikasi Tikus Jawa
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Website interaktif untuk mengidentifikasi jenis-jenis tikus di Jawa berdasarkan 
          karakteristik morfologi dalam bidang kesehatan masyarakat
        </p>
        <Link
          to="/identifikasi"
          className="btn-primary text-lg px-8 py-3 inline-block"
        >
          Mulai Identifikasi
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card text-center">
          <div className="w-16 h-16 bg-kemenkes-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Input Mudah</h3>
          <p className="text-gray-600">
            Masukkan data morfologi tikus dengan form yang sederhana dan intuitif
          </p>
        </div>

        <div className="card text-center">
          <div className="w-16 h-16 bg-kemenkes-green rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Identifikasi Akurat</h3>
          <p className="text-gray-600">
            Sistem mencocokkan data dengan database tikus Jawa berdasarkan standar Kemenkes
          </p>
        </div>

        <div className="card text-center">
          <div className="w-16 h-16 bg-kemenkes-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Info Kesehatan</h3>
          <p className="text-gray-600">
            Dapatkan informasi risiko kesehatan dan habitat dari setiap jenis tikus
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-kemenkes-blue to-kemenkes-green rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mengapa Identifikasi Tikus Penting?</h2>
          <p className="text-lg mb-6">
            Identifikasi yang tepat terhadap jenis tikus sangat penting dalam bidang kesehatan masyarakat 
            untuk pencegahan dan pengendalian penyakit yang dapat ditularkan oleh tikus (rodent-borne diseases).
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-2">Parameter Morfologi:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Berat (W) - gram</li>
                <li>• Panjang Total (TL) - mm</li>
                <li>• Kepala + Badan (H+B) - mm</li>
                <li>• Ekor (T) - mm</li>
                <li>• Kaki Belakang (HF) - mm</li>
                <li>• Telinga (E) - mm</li>
                <li>• Jumlah Puting (Teats) - anterior+posterior</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Informasi yang Diperoleh:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Nama ilmiah dan lokal</li>
                <li>• Deskripsi morfologi</li>
                <li>• Habitat alami</li>
                <li>• Risiko kesehatan terkait</li>
                <li>• Rekomendasi pengendalian</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home