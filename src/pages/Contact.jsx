import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Terima kasih atas pesan Anda. Tim kami akan segera merespons.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-600">
          Kami siap membantu Anda dengan pertanyaan seputar identifikasi tikus dan kesehatan masyarakat
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card">
          <h2 className="text-xl font-semibold text-kemenkes-blue mb-6">
            Kirim Pesan
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="nama@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subjek *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="input-field"
              >
                <option value="">Pilih subjek pesan</option>
                <option value="identifikasi">Bantuan Identifikasi</option>
                <option value="teknis">Masalah Teknis</option>
                <option value="data">Pertanyaan Data</option>
                <option value="kerjasama">Kerjasama</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pesan *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Tuliskan pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Kemenkes Info */}
          <div className="card">
            <h3 className="text-lg font-semibold text-kemenkes-green mb-4">
              Kementerian Kesehatan RI
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-kemenkes-blue mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Alamat</p>
                  <p className="text-gray-600 text-sm">
                    Jl. H.R. Rasuna Said Blok X5 Kav. 4-9<br />
                    Kuningan, Jakarta Selatan 12950
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-kemenkes-blue mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Telepon</p>
                  <p className="text-gray-600 text-sm">(021) 5201590</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-kemenkes-blue mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600 text-sm">kontak@kemkes.go.id</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-kemenkes-blue mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Website</p>
                  <p className="text-gray-600 text-sm">www.kemkes.go.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tim Pengembang */}
          <div className="card">
            <h3 className="text-lg font-semibold text-kemenkes-blue mb-4">
              Tim Pengembang
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-800">Direktorat P2PTM</p>
                <p className="text-gray-600 text-sm">Kementerian Kesehatan RI</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Pusat Penelitian dan Pengembangan</p>
                <p className="text-gray-600 text-sm">Upaya Kesehatan Masyarakat</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="card">
            <h3 className="text-lg font-semibold text-kemenkes-green mb-4">
              Pertanyaan Umum
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-800 mb-1">Bagaimana cara mengukur morfologi tikus?</p>
                <p className="text-gray-600">Gunakan timbangan digital untuk berat dan penggaris/jangka sorong untuk pengukuran panjang.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">Apakah hasil identifikasi 100% akurat?</p>
                <p className="text-gray-600">Sistem memberikan kemungkinan berdasarkan data morfologi. Konfirmasi ahli tetap diperlukan.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">Bisakah digunakan untuk tikus di luar Jawa?</p>
                <p className="text-gray-600">Saat ini database fokus pada tikus Jawa. Pengembangan untuk wilayah lain sedang direncanakan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact