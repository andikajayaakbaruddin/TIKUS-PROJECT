import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tentang Kunci Identifikasi Tikus Jawa
        </h1>
        <p className="text-lg text-gray-600">
          Sistem identifikasi digital untuk mendukung program pengendalian vektor di bidang kesehatan masyarakat
        </p>
      </div>

      <div className="space-y-8">
        {/* Latar Belakang */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-kemenkes-blue mb-4">
            Latar Belakang
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tikus merupakan salah satu vektor penting dalam penyebaran berbagai penyakit zoonosis yang dapat 
            mengancam kesehatan masyarakat. Di Indonesia, khususnya di Pulau Jawa, terdapat berbagai spesies 
            tikus yang memiliki karakteristik morfologi dan habitat yang berbeda-beda.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Identifikasi yang tepat terhadap jenis tikus sangat penting dalam upaya pengendalian vektor dan 
            pencegahan penyebaran penyakit. Website ini dikembangkan untuk membantu petugas kesehatan, 
            peneliti, dan masyarakat dalam mengidentifikasi jenis-jenis tikus berdasarkan karakteristik morfologi.
          </p>
        </div>

        {/* Tujuan */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-kemenkes-green mb-4">
            Tujuan
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kemenkes-green mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Menyediakan alat identifikasi tikus yang mudah digunakan dan akurat
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kemenkes-green mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mendukung program pengendalian vektor di bidang kesehatan masyarakat
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kemenkes-green mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Memberikan informasi risiko kesehatan terkait setiap jenis tikus
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-kemenkes-green mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Meningkatkan kapasitas petugas lapangan dalam identifikasi tikus
            </li>
          </ul>
        </div>

        {/* Cara Penggunaan */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-kemenkes-blue mb-4">
            Cara Penggunaan
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-kemenkes-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Pengukuran Morfologi</h3>
                <p className="text-gray-600 text-sm">
                  Lakukan pengukuran terhadap spesimen tikus menggunakan alat ukur yang tepat (timbangan, penggaris, jangka sorong)
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-kemenkes-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Input Data</h3>
                <p className="text-gray-600 text-sm">
                  Masukkan hasil pengukuran ke dalam form identifikasi (berat, panjang total, kepala+badan, ekor, kaki belakang, telinga)
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-kemenkes-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Analisis Hasil</h3>
                <p className="text-gray-600 text-sm">
                  Sistem akan mencocokkan data dengan database dan menampilkan kemungkinan jenis tikus beserta informasi detailnya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parameter Morfologi */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-kemenkes-green mb-4">
            Parameter Morfologi
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Parameter Utama:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><strong>W (Weight):</strong> Berat tubuh dalam gram</li>
                <li><strong>TL (Total Length):</strong> Panjang total dari ujung hidung hingga ujung ekor</li>
                <li><strong>H+B (Head + Body):</strong> Panjang dari ujung hidung hingga pangkal ekor</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Parameter Tambahan:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><strong>T (Tail):</strong> Panjang ekor dari pangkal hingga ujung</li>
                <li><strong>HF (Hind Foot):</strong> Panjang kaki belakang</li>
                <li><strong>E (Ears):</strong> Panjang telinga</li>
                <li><strong>Teats:</strong> Jumlah puting susu (format: anterior+posterior)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Disclaimer
          </h3>
          <p className="text-yellow-700 text-sm">
            Website ini merupakan alat bantu identifikasi dan tidak menggantikan konfirmasi ahli taksonomi. 
            Untuk keperluan penelitian ilmiah atau identifikasi yang memerlukan akurasi tinggi, 
            disarankan untuk berkonsultasi dengan ahli mammalogi atau taksonomi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About