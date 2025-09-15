import React from 'react'

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-kemenkes-blue to-kemenkes-green text-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Profile Pengembang</h1>
          <p className="text-blue-100">Sistem Identifikasi Tikus Jawa</p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Photo Section */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-6">
              <img 
                src="/fotoprofile.jpg" 
                alt="Vira Febyana" 
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-kemenkes-blue shadow-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Vira Febyana</h2>
            <p className="text-kemenkes-blue font-semibold">Entomolog Kesehatan Ahli Pertama</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-kemenkes-blue pb-2">
              Data Diri
            </h3>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">Nama Lengkap:</div>
                <div className="w-full sm:w-2/3 text-gray-800">Vira Febyana</div>
              </div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">NIP:</div>
                <div className="w-full sm:w-2/3 text-gray-800">200102172025062007</div>
              </div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">Tempat, Tanggal Lahir:</div>
                <div className="w-full sm:w-2/3 text-gray-800">Pasuruan, 17 Februari 2001</div>
              </div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">Pendidikan Terakhir:</div>
                <div className="w-full sm:w-2/3 text-gray-800">D4 – Sanitasi Lingkungan</div>
              </div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 font-semibold text-gray-700 mb-1 sm:mb-0">Jabatan:</div>
                <div className="w-full sm:w-2/3 text-gray-800">Entomolog Kesehatan Ahli Pertama</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Project Section */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-kemenkes-green pb-2">
            Tentang Proyek Ini
          </h3>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Sistem Identifikasi Tikus Jawa ini merupakan bagian dari <strong>Tugas Aktualisasi</strong> 
              dalam rangka penerapan nilai-nilai dasar Aparatur Sipil Negara (ASN) di lingkungan 
              Kementerian Kesehatan Republik Indonesia.
            </p>
            
            <p className="mb-4">
              Proyek ini bertujuan untuk membantu petugas kesehatan dan masyarakat dalam 
              mengidentifikasi jenis-jenis tikus yang ditemukan di wilayah Jawa, yang merupakan 
              informasi penting dalam upaya pengendalian vektor penyakit dan surveillance kesehatan.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-kemenkes-blue">
              <h4 className="font-semibold text-gray-800 mb-2">Nilai-Nilai Dasar ASN BERAKHLAK yang Diterapkan:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Berorientasi Pelayanan:</strong> Mengutamakan kepentingan masyarakat dalam pengembangan sistem identifikasi</li>
                <li><strong>Akuntabel:</strong> Memberikan informasi yang akurat dan dapat dipertanggungjawabkan</li>
                <li><strong>Kompeten:</strong> Mengembangkan sistem berdasarkan keahlian dan pengetahuan yang mendalam</li>
                <li><strong>Harmonis:</strong> Menciptakan keselarasan antara teknologi dan kebutuhan pengguna</li>
                <li><strong>Loyal:</strong> Berkomitmen penuh terhadap tugas dan tanggung jawab sebagai ASN</li>
                <li><strong>Adaptif:</strong> Mengembangkan solusi yang dapat menyesuaikan dengan perkembangan zaman</li>
                <li><strong>Kolaboratif:</strong> Bekerja sama dengan berbagai pihak untuk mencapai tujuan bersama</li>
              </ul>
            </div>
            
            <p className="mt-4">
              Melalui sistem ini, diharapkan dapat meningkatkan efektivitas program pengendalian 
              vektor di Indonesia, khususnya dalam identifikasi spesies tikus sebagai reservoir 
              berbagai penyakit zoonosis.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8">
        <div className="bg-gradient-to-r from-kemenkes-blue to-kemenkes-green text-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Informasi Kontak</h3>
          <div className="text-center">
            <p className="text-blue-100 mb-2">Kementerian Kesehatan Republik Indonesia</p>
            <p className="text-blue-100">Direktorat Jenderal Pencegahan dan Pengendalian Penyakit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile