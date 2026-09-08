// Centralized mock data. In a future Laravel/MySQL migration, each export
// below maps to a REST resource (e.g. GET /api/programs).

export const prayerTimes = [
  { name: 'Subuh', time: '04:42' },
  { name: 'Dzuhur', time: '12:04' },
  { name: 'Ashar', time: '15:21' },
  { name: 'Maghrib', time: '18:02' },
  { name: 'Isya', time: '19:16' },
];

export const stats = [
  { value: '2025', label: 'Tahun berdiri', note: 'resmi berdiri & mulai melayani jamaah' },
  { value: '1.200+', label: 'Jamaah & warga binaan' },
  { value: '15+', label: 'Program rutin yang berjalan' },
  { value: '180+', label: 'Santri TPA & tahfidz' },
  { value: 'Rp 1,2 M+', label: 'Zakat & infak tersalurkan' },
];

export const programs = [
  {
    id: 'quran-tafsir-circle',
    category: 'Pendidikan',
    name: 'Kajian Qur\u2019an & Tafsir',
    description: 'Kajian mingguan teks Al-Qur\u2019an dan tafsir untuk dewasa \u2014 dari dasar membaca hingga kajian kontekstual yang lebih dalam.',
    audience: 'Dewasa, semua tingkat',
    schedule: 'Selasa & Kamis, 19.00',
    location: 'Ruang Utama',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'weekend-arabic-school',
    category: 'Pendidikan',
    name: 'Sekolah Arab & Dasar Islam Akhir Pekan',
    description: 'Kelas bahasa Arab dan studi Islam terstruktur untuk anak usia 6\u201315 tahun, diajar dalam kelompok kecil.',
    audience: 'Anak usia 6\u201315 tahun',
    schedule: 'Sabtu, 08.30\u201312.00',
    location: 'Pusat Belajar, R. 2\u20134',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'neighbors-food-pantry',
    category: 'Sosial',
    name: 'Lumbung Pangan Warga',
    description: 'Program bantuan pangan rutin untuk keluarga di sekitar masjid, dijalankan sepenuhnya oleh relawan.',
    audience: 'Terbuka untuk umum',
    schedule: 'Setiap Ahad, 09.00\u201311.00',
    location: 'Gedung Serbaguna',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'youth-leadership-lab',
    category: 'Remaja',
    name: 'Lab Kepemimpinan Remaja',
    description: 'Pendampingan dan pelatihan bagi remaja: kepercayaan diri, public speaking, dan keterampilan berorganisasi.',
    audience: 'Remaja 13\u201318 tahun',
    schedule: 'Jumat, 18.00\u201320.00',
    location: 'Ruang Remaja',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'new-neighbors-orientation',
    category: 'Komunitas',
    name: 'Sambutan Warga Baru',
    description: 'Pertemuan bulanan menyambut keluarga baru di lingkungan masjid, menghubungkan mereka dengan warga dan kegiatan yang ada.',
    audience: 'Warga baru & keluarga',
    schedule: 'Sabtu pertama tiap bulan, 16.00',
    location: 'Ruang Utama',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'sisters-wellness-circle',
    category: 'Komunitas',
    name: 'Lingkar Sehat Muslimah',
    description: 'Kelompok pendampingan muslimah seputar kesehatan, pengasuhan anak, dan keimanan \u2014 sambil berbagi hidangan.',
    audience: 'Muslimah, semua usia',
    schedule: 'Rabu, 10.00',
    location: 'Gedung Serbaguna',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'friday-khutbah-series',
    category: 'Peribadatan',
    name: 'Rangkaian Khutbah & Kajian Jumat',
    description: 'Khutbah Jumat mingguan yang membahas kehidupan kontemporer dari sudut pandang ajaran Islam, terbuka untuk umum.',
    audience: 'Terbuka untuk umum',
    schedule: 'Jumat, saat sholat Jumat',
    location: 'Ruang Utama',
    image: 'https://images.unsplash.com/photo-1591825381515-6e3c50c74c98?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'winter-relief-drive',
    category: 'Sosial',
    name: 'Bakti Sosial & Bantuan Musiman',
    description: 'Gerakan donasi dan penyaluran musiman: pakaian layak pakai, selimut, dan kebutuhan pokok bagi keluarga yang membutuhkan.',
    audience: 'Terbuka untuk umum',
    schedule: 'Musiman (saat musim hujan)',
    location: 'Gedung Serbaguna',
    image: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?q=80&w=1200&auto=format&fit=crop',
  },
];

export const events = [
  {
    id: 'weekly-tafsir',
    title: 'Kajian Tafsir Mingguan',
    category: 'Peribadatan',
    date: '2026-09-12',
    displayDate: 'Sabtu, 12 September',
    time: '19.30',
    location: 'Ruang Utama',
    description: 'Kajian malam membedah Surah Al-Kahf, terbuka untuk semua tingkat pemahaman.',
    speaker: 'Ust. Yusuf Hidayat',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'community-iftar-planning',
    title: 'Rapat Perencanaan Buka Bersama',
    category: 'Komunitas',
    date: '2026-09-18',
    displayDate: 'Jumat, 18 September',
    time: '20.00',
    location: 'Gedung Serbaguna',
    description: 'Relawan dan koordinator bertemu menyiapkan logistik rangkaian buka bersama komunitas.',
    speaker: 'Tim Koordinasi Relawan',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'youth-basketball-night',
    title: 'Malam Basket Remaja',
    category: 'Remaja',
    date: '2026-09-20',
    displayDate: 'Ahad, 20 September',
    time: '17.00',
    location: 'Lapangan Olahraga',
    description: 'Malam basket mingguan yang didampingi untuk remaja, dilanjutkan obrolan santai dan camilan.',
    speaker: 'Tim Program Remaja',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'new-muslim-support-circle',
    title: 'Lingkar Dukungan Muallaf',
    category: 'Pendidikan',
    date: '2026-09-25',
    displayDate: 'Jumat, 25 September',
    time: '18.30',
    location: 'Pusat Belajar, R. 1',
    description: 'Pertemuan bulanan yang hangat bagi muallaf untuk bertanya dan membangun komunitas.',
    speaker: 'Ustazah Amina Farouk',
    image: 'https://images.unsplash.com/photo-1591825381515-6e3c50c74c98?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'annual-fundraising-dinner',
    title: 'Acara Amal Tahunan',
    category: 'Komunitas',
    date: '2026-10-03',
    displayDate: 'Sabtu, 3 Oktober',
    time: '18.00',
    location: 'Ruang Utama',
    description: 'Perhelatan tahunan terbesar, mengumpulkan warga untuk mendukung program-program tahun depan.',
    speaker: 'Pengurus Masjid',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'quran-memorization-camp',
    title: 'Kamp Hafalan Qur\u2019an',
    category: 'Pendidikan',
    date: '2026-10-10',
    displayDate: 'Sabtu, 10 Oktober',
    time: '09.00',
    location: 'Pusat Belajar',
    description: 'Intensif akhir pekan untuk anak-anak menghafal Al-Qur\u2019an dengan pendamping kelompok kecil.',
    speaker: 'Tim Guru Tahfidz',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  },
];

export const articles = [
  {
    id: 'welcoming-new-neighbors',
    title: 'How Our Community Welcomes New Neighbors',
    category: 'Community',
    date: '2026-08-14',
    author: 'Amina Farouk',
    excerpt: 'A look inside the orientation program that has helped over 200 new families settle into the neighborhood since it began.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Every first Saturday of the month, the Main Hall fills with new faces. Families who moved to the area weeks or days earlier gather over tea to meet volunteers, ask practical questions, and find out what the Islamic Center offers.',
      'The orientation program began three years ago as a small effort by a handful of volunteers. Since then it has grown into one of the most consistently attended gatherings at the Center, supporting families with everything from school enrollment questions to finding halal grocers nearby.',
      'Coordinators say the informal, conversational format is deliberate. Rather than a lecture, the session is built around small tables where longtime residents sit with newcomers and simply talk.',
    ],
  },
  {
    id: 'ramadan-preparation-guide',
    title: 'Getting Ready for Ramadan as a Community',
    category: 'Religious',
    date: '2026-08-02',
    author: 'Imam Yusuf Hidayat',
    excerpt: 'Practical guidance on how the Center prepares for the month of Ramadan, and how families can prepare alongside it.',
    image: 'https://images.unsplash.com/photo-1591825381515-6e3c50c74c98?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Preparation for Ramadan begins well before the month arrives. Volunteer teams coordinate the nightly iftar schedule, plan taraweeh prayer logistics, and confirm sponsorships that make communal meals possible for hundreds of worshippers each night.',
      'Families are encouraged to prepare in their own way too \u2014 setting intentions, reviewing recitation, and easing into the daily rhythm the month asks of us. The Center will publish the finalized fasting and prayer schedule closer to the start of the month.',
    ],
  },
  {
    id: 'youth-program-milestone',
    title: 'Youth Leadership Lab Marks Its Third Year',
    category: 'Youth',
    date: '2026-07-20',
    author: 'Bilal Rahman',
    excerpt: 'What began as a six-person pilot has become one of the Center\u2019s most requested programs for teenagers.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    content: [
      'The Youth Leadership Lab started three years ago with six participants meeting in a borrowed classroom. Today it runs weekly with a waitlist, and several of its earliest graduates have returned as junior mentors.',
      'The program focuses on public speaking, community organizing, and confidence \u2014 skills organizers say are underserved elsewhere for Muslim teenagers navigating both faith and adolescence.',
    ],
  },
  {
    id: 'winter-relief-recap',
    title: 'Winter Relief Drive: This Year\u2019s Impact',
    category: 'Social',
    date: '2026-03-05',
    author: 'Community Outreach Team',
    excerpt: 'A recap of this season\u2019s donation drive, which distributed warm clothing and essentials to over 300 families.',
    image: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?q=80&w=1200&auto=format&fit=crop',
    content: [
      'This year\u2019s Winter Relief Drive distributed coats, blankets, and essential supplies to more than 300 families across the surrounding area, supported entirely by community donations and volunteer hours.',
      'Organizers thanked the dozens of volunteers who sorted donations across six weekends, and noted that requests for assistance continue to grow year over year.',
    ],
  },
];

export const galleryItems = [
  { id: 'g0', category: 'General', title: 'AL-Manshur Mosque Exterior & Gardens', image: '/images/mosque_exterior.jpg' },
  { id: 'g1', category: 'Education', title: 'Qur’an & Tahfidz Learning Circle', image: '/images/quran_class.jpg' },
  { id: 'g2', category: 'Social Activities', title: 'Bakti Sosial & Pembagian Sembako Jamaah', image: '/images/social_drive.jpg' },
  { id: 'g3', category: 'Events', title: 'Annual Community Gathering', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g4', category: 'Education', title: 'Weekend Arabic School', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g5', category: 'Community', title: 'New Neighbors Orientation', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g6', category: 'Youth', title: 'Youth Basketball Night', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g7', category: 'Social Activities', title: 'Neighbors Food Pantry', image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g8', category: 'Events', title: 'Friday Khutbah Series', image: 'https://images.unsplash.com/photo-1591825381515-6e3c50c74c98?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g9', category: 'Community', title: 'Sisters’ Wellness Circle', image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop' },
];


export const testimonials = [
  {
    quote: 'Dulu anak saya malu mengaji di depan orang. Sekarang setiap Jumat sore justru dia yang minta diantar ke TPA \u2014 hafalannya bahkan sudah lebih panjang dari saya.',
    name: 'Ibu Siti Rahayu',
    role: 'Wali santri TPA',
  },
  {
    quote: 'Masjid ini bukan cuma tempat sholat. Waktu bapak saya sakit dan usaha saya sempat tersendat, jamaah di sini yang pertama datang membantu \u2014 tanpa diminta.',
    name: 'Bapak Hartono',
    role: 'Jamaah tetap',
  },
  {
    quote: 'Saya donatur kecil-kecilan, tapi laporan penyalurannya jelas dan tepat sasaran. Itu yang bikin saya tenang menitipkan zakat di sini.',
    name: 'Danu Prasetyo',
    role: 'Donatur & relawan',
  },
];

export const leadership = [
  {
    name: 'Pengurus AL-Manshur',
    role: 'Bidang Operasional & Umum',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="%23E9EBE6"/><circle cx="200" cy="150" r="70" fill="%232D4A3E" opacity="0.85"/><path d="M70 340C70 260 130 240 200 240C270 240 330 260 330 340V400H70V340Z" fill="%232D4A3E" opacity="0.85"/></svg>',
  },
  {
    name: 'Tim Peribadatan',
    role: 'Imam & Khotib',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="%23E3E7DF"/><circle cx="200" cy="150" r="70" fill="%232D4A3E" opacity="0.85"/><path d="M70 340C70 260 130 240 200 240C270 240 330 260 330 340V400H70V340Z" fill="%232D4A3E" opacity="0.85"/></svg>',
  },
  {
    name: 'Tim Pendidikan',
    role: 'Pengajar & Dakwah',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="%23DFE3D9"/><circle cx="200" cy="150" r="70" fill="%232D4A3E" opacity="0.85"/><path d="M70 340C70 260 130 240 200 240C270 240 330 260 330 340V400H70V340Z" fill="%232D4A3E" opacity="0.85"/></svg>',
  },
  {
    name: 'Tim Humas & Sosial',
    role: 'Pelayanan Umat & Donasi',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="%23ECEEE8"/><circle cx="200" cy="150" r="70" fill="%232D4A3E" opacity="0.85"/><path d="M70 340C70 260 130 240 200 240C270 240 330 260 330 340V400H70V340Z" fill="%232D4A3E" opacity="0.85"/></svg>',
  },
];

export const timeline = [
  { year: '2023', text: 'Sekelompok warga mulai rutin mengadakan pengajian dan sholat berjamaah di rumah salah satu warga.' },
  { year: '2024', text: 'Kesepakatan warga terbentuk; pengurus dan panitia pembangunan mulai menggalang dana secara gotong royong.' },
  { year: '2025', text: 'Masjid Al-Manshur resmi berdiri — bangunan sederhana hasil karya dan donasi warga, langsung digunakan untuk sholat berjamaah lima waktu.' },
  { year: '2026', text: 'TPA & tahfidz, kajian rutin, dan lumbung pangan warga mulai berjalan; jamaah terus bertumbuh.' },
];
