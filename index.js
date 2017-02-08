'use strict'

const provinces = [
  'aceh',
  'bali',
  'bangka belitung',
  'banten',
  'bengkulu',
  'dki jakarta',
  'gorontalo',
  'jambi',
  'jawa barat',
  'jawa tengah',
  'jawa timur',
  'kalimantan barat',
  'kalimantan selatan',
  'kalimantan tengah',
  'kalimantan timur',
  'kalimantan utara',
  'kepulauan riau',
  'lampung',
  'maluku utara',
  'maluku',
  'nusa tenggara barat',
  'nusa tenggara timur',
  'papua barat',
  'papua',
  'riau',
  'sulawesi barat',
  'sulawesi selatan',
  'sulawesi tengah',
  'sulawesi tenggara',
  'sulawesi utara',
  'sumatra barat',
  'sumatra selatan',
  'sumatra utara',
  'yogyakarta'
]

const cities = [
  {
    'city': 'aceh barat daya',
    'province': 'aceh'
  },
  {
    'city': 'aceh barat',
    'province': 'aceh'
  },
  {
    'city': 'aceh besar',
    'province': 'aceh'
  },
  {
    'city': 'aceh jaya',
    'province': 'aceh'
  },
  {
    'city': 'aceh selatan',
    'province': 'aceh'
  },
  {
    'city': 'aceh singkil',
    'province': 'aceh'
  },
  {
    'city': 'aceh tamiang',
    'province': 'aceh'
  },
  {
    'city': 'aceh tengah',
    'province': 'aceh'
  },
  {
    'city': 'aceh tenggara',
    'province': 'aceh'
  },
  {
    'city': 'aceh timur',
    'province': 'aceh'
  },
  {
    'city': 'aceh utara',
    'province': 'aceh'
  },
  {
    'city': 'banda aceh',
    'province': 'aceh'
  },
  {
    'city': 'agam',
    'province': 'sumatra barat'
  },
  {
    'city': 'alor',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'ambon',
    'province': 'maluku'
  },
  {
    'city': 'asahan',
    'province': 'sumatra utara'
  },
  {
    'city': 'asmat',
    'province': 'papua'
  },
  {
    'city': 'badung',
    'province': 'bali'
  },
  {
    'city': 'balangan',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'balikpapan',
    'province': 'kalimantan timur'
  },
  {
    'city': 'lubuklinggau',
    'province': 'sumatra selatan'
  },
  {
    'city': 'purbalingga',
    'province': 'jawa tengah'
  },
  {
    'city': 'lingga',
    'province': 'kepulauan riau'
  },
  {
    'city': 'bandar lampung',
    'province': 'lampung'
  },
  {
    'city': 'bandung barat',
    'province': 'jawa barat'
  },
  {
    'city': 'bandung',
    'province': 'jawa barat'
  },
  {
    'city': 'banggai kepulauan',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'banggai',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'bangka barat',
    'province': 'bangka belitung'
  },
  {
    'city': 'bangka selatan',
    'province': 'bangka belitung'
  },
  {
    'city': 'bangka tengah',
    'province': 'bangka belitung'
  },
  {
    'city': 'bangka belitung',
    'province': 'bangka belitung'
  },
  {
    'city': 'bangkalan',
    'province': 'jawa timur'
  },
  {
    'city': 'bangka',
    'province': 'bangka belitung'
  },
  {
    'city': 'bangli',
    'province': 'bali'
  },
  {
    'city': 'banjarbaru',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'banjarmasin',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'banjarnegara',
    'province': 'jawa tengah'
  },
  {
    'city': 'banjar',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'bantaeng',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'bantul',
    'province': 'yogyakarta'
  },
  {
    'city': 'banyu asin',
    'province': 'sumatra selatan'
  },
  {
    'city': 'banyumas',
    'province': 'jawa tengah'
  },
  {
    'city': 'banyuwangi',
    'province': 'jawa timur'
  },
  {
    'city': 'barito kuala',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'barito selatan',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'barito timur',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'barito utara',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'barru',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'batam',
    'province': 'kepulauan riau'
  },
  {
    'city': 'batang hari',
    'province': 'jambi'
  },
  {
    'city': 'batang',
    'province': 'jawa tengah'
  },
  {
    'city': 'batu bara',
    'province': 'sumatra utara'
  },
  {
    'city': 'labuhan batu selatan',
    'province': 'sumatra utara'
  },
  {
    'city': 'labuhan batu utara',
    'province': 'sumatra utara'
  },

  {
    'city': 'labuhan batu',
    'province': 'sumatra utara'
  },
  {
    'city': 'batu',
    'province': 'jawa timur'
  },
  {
    'city': 'bau-bau',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'bekasi',
    'province': 'jawa barat'
  },
  {
    'city': 'belitung timur',
    'province': 'bangka belitung'
  },
  {
    'city': 'belitung',
    'province': 'bangka belitung'
  },
  {
    'city': 'belu',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'bener meriah',
    'province': 'aceh'
  },
  {
    'city': 'bengkalis',
    'province': 'riau'
  },
  {
    'city': 'bengkayang',
    'province': 'kalimantan barat'
  },
  {
    'city': 'bengkulu selatan',
    'province': 'bengkulu'
  },
  {
    'city': 'bengkulu tengah',
    'province': 'bengkulu'
  },
  {
    'city': 'bengkulu utara',
    'province': 'bengkulu'
  },
  {
    'city': 'bengkulu',
    'province': 'bengkulu'
  },
  {
    'city': 'berau',
    'province': 'kalimantan timur'
  },
  {
    'city': 'biak numfor',
    'province': 'papua'
  },
  {
    'city': 'bima',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'binjai',
    'province': 'sumatra utara'
  },
  {
    city: 'pegunungan bintang',
    province: 'papua'
  },
  {
    'city': 'bintan',
    'province': 'kepulauan riau'
  },
  {
    'city': 'bireuen',
    'province': 'aceh'
  },
  {
    'city': 'bitung',
    'province': 'sulawesi utara'
  },
  {
    'city': 'blitar',
    'province': 'jawa timur'
  },
  {
    'city': 'blora',
    'province': 'jawa tengah'
  },
  {
    'city': 'boalemo',
    'province': 'gorontalo'
  },
  {
    'city': 'bogor',
    'province': 'jawa barat'
  },
  {
    'city': 'bojonegoro',
    'province': 'jawa timur'
  },
  {
    'city': 'bolaang mongondow selatan',
    'province': 'sulawesi utara'
  },
  {
    'city': 'bolaang mongondow timur',
    'province': 'sulawesi utara'
  },
  {
    'city': 'bolaang mongondow utara',
    'province': 'sulawesi utara'
  },
  {
    city: 'bolaang mongondow',
    province: 'sulawesi utara'
  },
  {
    'city': 'bombana',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'bondowoso',
    'province': 'jawa timur'
  },
  {
    'city': 'bone bolango',
    'province': 'gorontalo'
  },
  {
    'city': 'bone',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'bontang',
    'province': 'kalimantan timur'
  },
  {
    'city': 'boven digoel',
    'province': 'papua'
  },
  {
    'city': 'boyolali',
    'province': 'jawa tengah'
  },
  {
    'city': 'brebes',
    'province': 'jawa tengah'
  },
  {
    'city': 'bukittinggi',
    'province': 'sumatra barat'
  },
  {
    'city': 'buleleng',
    'province': 'bali'
  },
  {
    'city': 'bulukumba',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'bulungan',
    'province': 'kalimantan utara'
  },
  {
    'city': 'bungo',
    'province': 'jambi'
  },
  {
    'city': 'buol',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'buru selatan',
    'province': 'maluku'
  },
  {
    'city': 'buru',
    'province': 'maluku'
  },
  {
    'city': 'buton utara',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'buton',
    'province': 'sulawesi tenggara'
  },
  {
    city: 'cikarang',
    province: 'jawa barat'
  },
  {
    'city': 'ciamis',
    'province': 'jawa barat'
  },
  {
    'city': 'cianjur',
    'province': 'jawa barat'
  },
  {
    'city': 'cilacap',
    'province': 'jawa tengah'
  },
  {
    'city': 'cilegon',
    'province': 'banten'
  },
  {
    'city': 'cimahi',
    'province': 'jawa barat'
  },
  {
    'city': 'cirebon',
    'province': 'jawa barat'
  },
  {
    'city': 'dairi',
    'province': 'sumatra utara'
  },
  {
    'city': 'deiyai',
    'province': 'papua'
  },
  {
    'city': 'deli serdang',
    'province': 'sumatra utara'
  },
  {
    'city': 'demak',
    'province': 'jawa tengah'
  },
  {
    'city': 'denpasar',
    'province': 'bali'
  },
  {
    'city': 'depok',
    'province': 'jawa barat'
  },
  {
    'city': 'dharmasraya',
    'province': 'sumatra barat'
  },
  {
    'city': 'dogiyai',
    'province': 'papua'
  },
  {
    'city': 'dompu',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'donggala',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'dumai',
    'province': 'riau'
  },
  {
    'city': 'empat lawang',
    'province': 'sumatra selatan'
  },
  {
    'city': 'ende',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'enrekang',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'fakfak',
    'province': 'papua barat'
  },
  {
    'city': 'flores timur',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'garut',
    'province': 'jawa barat'
  },
  {
    'city': 'gayo lues',
    'province': 'aceh'
  },
  {
    'city': 'gianyar',
    'province': 'bali'
  },
  {
    'city': 'gorontalo utara',
    'province': 'gorontalo'
  },
  {
    'city': 'gorontalo',
    'province': 'gorontalo'
  },
  {
    'city': 'gowa',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'gresik',
    'province': 'jawa timur'
  },
  {
    'city': 'grobogan',
    'province': 'jawa tengah'
  },
  {
    'city': 'gunung kidul',
    'province': 'yogyakarta'
  },
  {
    'city': 'gunung mas',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'gunungsitoli',
    'province': 'sumatra utara'
  },
  {
    'city': 'halmahera barat',
    'province': 'maluku utara'
  },
  {
    'city': 'halmahera selatan',
    'province': 'maluku utara'
  },
  {
    'city': 'halmahera tengah',
    'province': 'maluku utara'
  },
  {
    'city': 'halmahera timur',
    'province': 'maluku utara'
  },
  {
    'city': 'halmahera utara',
    'province': 'maluku utara'
  },
  {
    'city': 'hulu sungai selatan',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'hulu sungai tengah',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'hulu sungai utara',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'humbang hasundutan',
    'province': 'sumatra utara'
  },
  {
    'city': 'indragiri hilir',
    'province': 'riau'
  },
  {
    'city': 'indragiri hulu',
    'province': 'riau'
  },
  {
    'city': 'indramayu',
    'province': 'jawa barat'
  },
  {
    'city': 'intan jaya',
    'province': 'papua'
  },
  {
    'city': 'jakarta barat',
    'province': 'dki jakarta'
  },
  {
    'city': 'jakarta pusat',
    'province': 'dki jakarta'
  },
  {
    'city': 'jakarta selatan',
    'province': 'dki jakarta'
  },
  {
    'city': 'jakarta timur',
    'province': 'dki jakarta'
  },
  {
    'city': 'jakarta utara',
    'province': 'dki jakarta'
  },
  {
    'city': 'jakarta',
    'province': 'dki jakarta'
  },
  {
    'city': 'muaro jambi',
    'province': 'jambi'
  },
  {
    'city': 'jambi',
    'province': 'jambi'
  },
  {
    'city': 'jayapura',
    'province': 'papua'
  },
  {
    'city': 'jayawijaya',
    'province': 'papua'
  },
  {
    'city': 'jember',
    'province': 'jawa timur'
  },
  {
    'city': 'jembrana',
    'province': 'bali'
  },
  {
    'city': 'jeneponto',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'jepara',
    'province': 'jawa tengah'
  },
  {
    'city': 'jombang',
    'province': 'jawa timur'
  },
  {
    'city': 'kaimana',
    'province': 'papua barat'
  },
  {
    'city': 'kampar',
    'province': 'riau'
  },
  {
    'city': 'kapuas hulu',
    'province': 'kalimantan barat'
  },
  {
    'city': 'kapuas',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'karanganyar',
    'province': 'jawa tengah'
  },
  {
    'city': 'karangasem',
    'province': 'bali'
  },
  {
    'city': 'karawang',
    'province': 'jawa barat'
  },
  {
    'city': 'karimun',
    'province': 'kepulauan riau'
  },
  {
    'city': 'karo',
    'province': 'sumatra utara'
  },
  {
    'city': 'katingan',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'kaur',
    'province': 'bengkulu'
  },
  {
    'city': 'kayong utara',
    'province': 'kalimantan barat'
  },
  {
    'city': 'kebumen',
    'province': 'jawa tengah'
  },
  {
    'city': 'kediri',
    'province': 'jawa timur'
  },
  {
    'city': 'keerom',
    'province': 'papua'
  },
  {
    'city': 'kendal',
    'province': 'jawa tengah'
  },
  {
    'city': 'kendari',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'kepahiang',
    'province': 'bengkulu'
  },
  {
    'city': 'kepulauan anambas',
    'province': 'kepulauan riau'
  },
  {
    'city': 'kepulauan aru',
    'province': 'maluku'
  },
  {
    'city': 'kepulauan mentawai',
    'province': 'sumatra barat'
  },
  {
    'city': 'kepulauan meranti',
    'province': 'riau'
  },
  {
    'city': 'kepulauan sangihe',
    'province': 'sulawesi utara'
  },
  {
    'city': 'kepulauan seribu',
    'province': 'dki jakarta'
  },
  {
    'city': 'kepulauan sula',
    'province': 'maluku utara'
  },
  {
    'city': 'kepulauan talaud',
    'province': 'sulawesi utara'
  },
  {
    'city': 'kepulauan yapen',
    'province': 'papua'
  },
  {
    'city': 'kerinci',
    'province': 'jambi'
  },
  {
    'city': 'ketapang',
    'province': 'kalimantan barat'
  },
  {
    'city': 'klaten',
    'province': 'jawa tengah'
  },
  {
    'city': 'klungkung',
    'province': 'bali'
  },
  {
    'city': 'kolaka utara',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'kolaka',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'konawe selatan',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'konawe utara',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'konawe',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'kotabaru',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'kotamobagu',
    'province': 'sulawesi utara'
  },
  {
    'city': 'kotawaringin barat',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'kotawaringin timur',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'kuantan singingi',
    'province': 'riau'
  },
  {
    'city': 'kubu raya',
    'province': 'kalimantan barat'
  },
  {
    'city': 'kudus',
    'province': 'jawa tengah'
  },
  {
    'city': 'kulon progo',
    'province': 'yogyakarta'
  },
  {
    'city': 'kuningan',
    'province': 'jawa barat'
  },
  {
    'city': 'kupang',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'kutai barat',
    'province': 'kalimantan timur'
  },
  {
    'city': 'kutai kartanegara',
    'province': 'kalimantan timur'
  },
  {
    'city': 'kutai timur',
    'province': 'kalimantan timur'
  },
  {
    'city': 'kuta',
    'province': 'bali'
  },
  {
    'city': 'lahat',
    'province': 'sumatra selatan'
  },
  {
    'city': 'lamandau',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'lamongan',
    'province': 'jawa timur'
  },
  {
    'city': 'lampung barat',
    'province': 'lampung'
  },
  {
    'city': 'lampung selatan',
    'province': 'lampung'
  },
  {
    'city': 'lampung tengah',
    'province': 'lampung'
  },
  {
    'city': 'lampung timur',
    'province': 'lampung'
  },
  {
    'city': 'lampung utara',
    'province': 'lampung'
  },
  {
    'city': 'lampung',
    'province': 'lampung'
  },
  {
    'city': 'landak',
    'province': 'kalimantan barat'
  },
  {
    'city': 'langkat',
    'province': 'sumatra utara'
  },
  {
    'city': 'langsa',
    'province': 'aceh'
  },
  {
    'city': 'lanny jaya',
    'province': 'papua'
  },
  {
    'city': 'lebak',
    'province': 'banten'
  },
  {
    'city': 'rejang lebong',
    'province': 'bengkulu'
  },
  {
    'city': 'lebong',
    'province': 'bengkulu'
  },
  {
    'city': 'lembata',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'lhokseumawe',
    'province': 'aceh'
  },
  {
    'city': 'lima puluh kota',
    'province': 'sumatra barat'
  },
  {
    'city': 'lombok barat',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'lombok tengah',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'lombok timur',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'lombok utara',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'lumajang',
    'province': 'jawa timur'
  },
  {
    'city': 'luwu timur',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'luwu utara',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'luwu',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'madiun',
    'province': 'jawa timur'
  },
  {
    'city': 'magelang',
    'province': 'jawa tengah'
  },
  {
    'city': 'magetan',
    'province': 'jawa timur'
  },
  {
    'city': 'majalengka',
    'province': 'jawa barat'
  },
  {
    'city': 'majene',
    'province': 'sulawesi barat'
  },
  {
    'city': 'makassar',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'pemalang',
    'province': 'jawa tengah'
  },
  {
    'city': 'malang',
    'province': 'jawa timur'
  },
  {
    'city': 'malinau',
    'province': 'kalimantan utara'
  },
  {
    'city': 'maluku barat daya',
    'province': 'maluku'
  },
  {
    'city': 'maluku tengah',
    'province': 'maluku'
  },
  {
    'city': 'maluku tenggara barat',
    'province': 'maluku'
  },
  {
    'city': 'maluku tenggara',
    'province': 'maluku'
  },
  {
    'city': 'mamasa',
    'province': 'sulawesi barat'
  },
  {
    'city': 'mamberamo raya',
    'province': 'papua'
  },
  {
    'city': 'mamberamo tengah',
    'province': 'papua'
  },
  {
    'city': 'mamuju utara',
    'province': 'sulawesi barat'
  },
  {
    'city': 'mamuju',
    'province': 'sulawesi barat'
  },
  {
    'city': 'manado',
    'province': 'sulawesi utara'
  },
  {
    'city': 'mandailing natal',
    'province': 'sumatra utara'
  },
  {
    'city': 'manggarai barat',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'manggarai timur',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'manggarai',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'manokwari selatan',
    'province': 'papua barat'
  },
  {
    'city': 'manokwari',
    'province': 'papua barat'
  },
  {
    'city': 'mappi',
    'province': 'papua'
  },
  {
    'city': 'maros',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'mataram',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'maybrat',
    'province': 'papua barat'
  },
  {
    'city': 'sumedang',
    'province': 'jawa barat'
  },
  {
    'city': 'medan',
    'province': 'sumatra utara'
  },
  {
    'city': 'melawi',
    'province': 'kalimantan barat'
  },
  {
    'city': 'merangin',
    'province': 'jambi'
  },
  {
    'city': 'merauke',
    'province': 'papua'
  },
  {
    'city': 'mesuji',
    'province': 'lampung'
  },
  {
    'city': 'metro',
    'province': 'lampung'
  },
  {
    'city': 'mimika',
    'province': 'papua'
  },
  {
    'city': 'minahasa selatan',
    'province': 'sulawesi utara'
  },
  {
    'city': 'minahasa tenggara',
    'province': 'sulawesi utara'
  },
  {
    'city': 'minahasa utara',
    'province': 'sulawesi utara'
  },
  {
    'city': 'minahasa',
    'province': 'sulawesi utara'
  },
  {
    'city': 'mojokerto',
    'province': 'jawa timur'
  },
  {
    'city': 'morowali',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'muara enim',
    'province': 'sumatra selatan'
  },
  {
    'city': 'mukomuko',
    'province': 'bengkulu'
  },
  {
    'city': 'muna',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'murung raya',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'musi banyuasin',
    'province': 'sumatra selatan'
  },
  {
    'city': 'musi rawas',
    'province': 'sumatra selatan'
  },
  {
    'city': 'nabire',
    'province': 'papua'
  },
  {
    'city': 'nagan raya',
    'province': 'aceh'
  },
  {
    'city': 'nagekeo',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'natuna',
    'province': 'kepulauan riau'
  },
  {
    'city': 'nduga',
    'province': 'papua'
  },
  {
    'city': 'ngada',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'nganjuk',
    'province': 'jawa timur'
  },
  {
    'city': 'ngawi',
    'province': 'jawa timur'
  },
  {
    'city': 'nias barat',
    'province': 'sumatra utara'
  },
  {
    'city': 'nias selatan',
    'province': 'sumatra utara'
  },
  {
    'city': 'nias utara',
    'province': 'sumatra utara'
  },
  {
    'city': 'nias',
    'province': 'sumatra utara'
  },
  {
    'city': 'nunukan',
    'province': 'kalimantan utara'
  },
  {
    'city': 'ogan ilir',
    'province': 'sumatra selatan'
  },
  {
    'city': 'ogan komering ilir',
    'province': 'sumatra selatan'
  },
  {
    'city': 'ogan komering ulu selatan',
    'province': 'sumatra selatan'
  },
  {
    'city': 'ogan komering ulu timur',
    'province': 'sumatra selatan'
  },
  {
    'city': 'ogan komering ulu',
    'province': 'sumatra selatan'
  },
  {
    'city': 'pacitan',
    'province': 'jawa timur'
  },
  {
    'city': 'padang lawas utara',
    'province': 'sumatra utara'
  },
  {
    'city': 'padang lawas',
    'province': 'sumatra utara'
  },
  {
    'city': 'padang panjang',
    'province': 'sumatra barat'
  },
  {
    'city': 'padang pariaman',
    'province': 'sumatra barat'
  },
  {
    'city': 'padang sidempuan',
    'province': 'sumatra utara'
  },

  {
    'city': 'padang',
    'province': 'sumatra barat'
  },
  {
    'city': 'pagar alam',
    'province': 'sumatra selatan'
  },
  {
    'city': 'pakpak barat',
    'province': 'sumatra utara'
  },
  {
    'city': 'palangkaraya',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'palangka raya',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'palembang',
    'province': 'sumatra selatan'
  },
  {
    'city': 'palopo',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'palu',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'pamekasan',
    'province': 'jawa timur'
  },
  {
    'city': 'pandeglang',
    'province': 'banten'
  },
  {
    'city': 'pangandaran',
    'province': 'jawa barat'
  },
  {
    'city': 'pangkajene dan kepulauan',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'pangkal pinang',
    'province': 'bangka belitung'
  },
  {
    'city': 'paniai',
    'province': 'papua'
  },
  {
    'city': 'pare-pare',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'pariaman',
    'province': 'sumatra barat'
  },
  {
    'city': 'parigi moutong',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'pasaman barat',
    'province': 'sumatra barat'
  },
  {
    'city': 'pasaman',
    'province': 'sumatra barat'
  },
  {
    'city': 'penajam paser utara',
    'province': 'kalimantan timur'
  },
  {
    'city': 'paser',
    'province': 'kalimantan timur'
  },
  {
    'city': 'pasuruan',
    'province': 'jawa timur'
  },
  {
    'city': 'pati',
    'province': 'jawa tengah'
  },
  {
    'city': 'payakumbuh',
    'province': 'sumatra barat'
  },
  {
    'city': 'pegunungan arfak',
    'province': 'papua barat'
  },
  {
    'city': 'pekalongan',
    'province': 'jawa tengah'
  },
  {
    'city': 'pekanbaru',
    'province': 'riau'
  },
  {
    'city': 'pelalawan',
    'province': 'riau'
  },
  {
    'city': 'pematang siantar',
    'province': 'sumatra utara'
  },
  {
    'city': 'pesawaran',
    'province': 'lampung'
  },
  {
    'city': 'pesisir barat',
    'province': 'lampung'
  },
  {
    'city': 'pesisir selatan',
    'province': 'sumatra barat'
  },
  {
    'city': 'pidie jaya',
    'province': 'aceh'
  },

  {
    'city': 'pidie',
    'province': 'aceh'
  },
  {
    'city': 'pinrang',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'pohuwato',
    'province': 'gorontalo'
  },
  {
    'city': 'polewali mandar',
    'province': 'sulawesi barat'
  },
  {
    'city': 'ponorogo',
    'province': 'jawa timur'
  },
  {
    'city': 'pontianak',
    'province': 'kalimantan barat'
  },
  {
    'city': 'poso',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'prabumulih',
    'province': 'sumatra selatan'
  },
  {
    'city': 'pringsewu',
    'province': 'lampung'
  },
  {
    'city': 'probolinggo',
    'province': 'jawa timur'
  },
  {
    'city': 'pulang pisau',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'pulau morotai',
    'province': 'maluku utara'
  },

  {
    'city': 'puncak jaya',
    'province': 'papua'
  },
  {
    'city': 'puncak',
    'province': 'papua'
  },
  {
    'city': 'purwokerto',
    'province': 'jawa tengah'
  },
  {
    'city': 'purwakarta',
    'province': 'jawa barat'
  },
  {
    'city': 'purworejo',
    'province': 'jawa tengah'
  },
  {
    'city': 'raja ampat',
    'province': 'papua barat'
  },

  {
    'city': 'rembang',
    'province': 'jawa tengah'
  },
  {
    'city': 'riau',
    'province': 'riau'
  },
  {
    'city': 'rokan hilir',
    'province': 'riau'
  },
  {
    'city': 'rokan hulu',
    'province': 'riau'
  },
  {
    'city': 'rote ndao',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'sabang',
    'province': 'aceh'
  },
  {
    'city': 'sabu raijua',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'salatiga',
    'province': 'jawa tengah'
  },
  {
    'city': 'samarinda',
    'province': 'kalimantan timur'
  },
  {
    'city': 'sambas',
    'province': 'kalimantan barat'
  },

  {
    'city': 'toba samosir',
    'province': 'sumatra utara'
  },
  {
    'city': 'samosir',
    'province': 'sumatra utara'
  },
  {
    'city': 'sampang',
    'province': 'jawa timur'
  },
  {
    'city': 'sanggau',
    'province': 'kalimantan barat'
  },
  {
    'city': 'sarmi',
    'province': 'papua'
  },
  {
    'city': 'sarolangun',
    'province': 'jambi'
  },
  {
    'city': 'sawah lunto',
    'province': 'sumatra barat'
  },
  {
    'city': 'sekadau',
    'province': 'kalimantan barat'
  },
  {
    'city': 'selayar',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'seluma',
    'province': 'bengkulu'
  },
  {
    'city': 'semarang',
    'province': 'jawa tengah'
  },
  {
    'city': 'seram bagian barat',
    'province': 'maluku'
  },
  {
    'city': 'seram bagian timur',
    'province': 'maluku'
  },
  {
    'city': 'serang',
    'province': 'banten'
  },
  {
    'city': 'serdang bedagai',
    'province': 'sumatra utara'
  },
  {
    'city': 'seruyan',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'siak',
    'province': 'riau'
  },
  {
    'city': 'siau tagulandang biaro',
    'province': 'sulawesi utara'
  },
  {
    'city': 'sibolga',
    'province': 'sumatra utara'
  },
  {
    'city': 'sidenreng rappang',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'sidoarjo',
    'province': 'jawa timur'
  },
  {
    'city': 'sigi',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'sijunjung',
    'province': 'sumatra barat'
  },
  {
    'city': 'sikka',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'simalungun',
    'province': 'sumatra utara'
  },
  {
    'city': 'simeulue',
    'province': 'aceh'
  },
  {
    'city': 'singkawang',
    'province': 'kalimantan barat'
  },
  {
    'city': 'sinjai',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'sintang',
    'province': 'kalimantan barat'
  },
  {
    'city': 'situbondo',
    'province': 'jawa timur'
  },
  {
    'city': 'sleman',
    'province': 'yogyakarta'
  },
  {
    'city': 'solok selatan',
    'province': 'sumatra barat'
  },
  {
    'city': 'solok',
    'province': 'sumatra barat'
  },
  {
    'city': 'solo',
    'province': 'jawa tengah'
  },
  {
    'city': 'soppeng',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'sorong selatan',
    'province': 'papua barat'
  },
  {
    'city': 'sorong',
    'province': 'papua barat'
  },
  {
    'city': 'sragen',
    'province': 'jawa tengah'
  },
  {
    'city': 'subang',
    'province': 'jawa barat'
  },
  {
    'city': 'subulussalam',
    'province': 'aceh'
  },
  {
    'city': 'sukabumi',
    'province': 'jawa barat'
  },
  {
    'city': 'sukamara',
    'province': 'kalimantan tengah'
  },
  {
    'city': 'sukoharjo',
    'province': 'jawa tengah'
  },
  {
    'city': 'sumba barat daya',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'sumba barat',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'sumba tengah',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'sumba timur',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'sumbawa barat',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'sumbawa',
    'province': 'nusa tenggara barat'
  },
  {
    'city': 'sumenep',
    'province': 'jawa timur'
  },
  {
    'city': 'sungai penuh',
    'province': 'jambi'
  },
  {
    'city': 'supiori',
    'province': 'papua'
  },
  {
    'city': 'surabaya',
    'province': 'jawa timur'
  },
  {
    'city': 'surakarta',
    'province': 'jawa tengah'
  },
  {
    'city': 'tabalong',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'tabanan',
    'province': 'bali'
  },
  {
    'city': 'takalar',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'tambrauw',
    'province': 'papua barat'
  },
  {
    'city': 'tana tidung',
    'province': 'kalimantan utara'
  },
  {
    'city': 'tana toraja',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'tanah bumbu',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'tanah datar',
    'province': 'sumatra barat'
  },
  {
    'city': 'tanah laut',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'tangerang selatan',
    'province': 'banten'
  },

  {
    'city': 'tangerang',
    'province': 'banten'
  },
  {
    'city': 'tanggamus',
    'province': 'lampung'
  },
  {
    'city': 'tanjung balai',
    'province': 'sumatra utara'
  },
  {
    'city': 'tanjung jabung barat',
    'province': 'jambi'
  },
  {
    'city': 'tanjung jabung timur',
    'province': 'jambi'
  },
  {
    'city': 'tanjung pinang',
    'province': 'kepulauan riau'
  },
  {
    'city': 'tapanuli selatan',
    'province': 'sumatra utara'
  },
  {
    'city': 'tapanuli tengah',
    'province': 'sumatra utara'
  },
  {
    'city': 'tapanuli utara',
    'province': 'sumatra utara'
  },
  {
    'city': 'tapin',
    'province': 'kalimantan selatan'
  },
  {
    'city': 'tarakan',
    'province': 'kalimantan utara'
  },
  {
    'city': 'tasikmalaya',
    'province': 'jawa barat'
  },
  {
    'city': 'tebing tinggi',
    'province': 'sumatra utara'
  },
  {
    'city': 'tebo',
    'province': 'jambi'
  },
  {
    'city': 'tegal',
    'province': 'jawa tengah'
  },
  {
    'city': 'teluk bintuni',
    'province': 'papua barat'
  },
  {
    'city': 'teluk wondama',
    'province': 'papua barat'
  },
  {
    'city': 'temanggung',
    'province': 'jawa tengah'
  },
  {
    'city': 'ternate',
    'province': 'maluku utara'
  },
  {
    'city': 'tidore kepulauan',
    'province': 'maluku utara'
  },
  {
    'city': 'timor tengah selatan',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'timor tengah utara',
    'province': 'nusa tenggara timur'
  },
  {
    'city': 'tojo una-una',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'toli-toli',
    'province': 'sulawesi tengah'
  },
  {
    'city': 'tolikara',
    'province': 'papua'
  },
  {
    'city': 'tomohon',
    'province': 'sulawesi utara'
  },
  {
    'city': 'toraja utara',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'trenggalek',
    'province': 'jawa timur'
  },
  {
    'city': 'tual',
    'province': 'maluku'
  },
  {
    'city': 'tuban',
    'province': 'jawa timur'
  },
  {
    'city': 'tulangbawang barat',
    'province': 'lampung'
  },
  {
    'city': 'tulangbawang',
    'province': 'lampung'
  },
  {
    'city': 'tulungagung',
    'province': 'jawa timur'
  },
  {
    'city': 'wajo',
    'province': 'sulawesi selatan'
  },
  {
    'city': 'wakatobi',
    'province': 'sulawesi tenggara'
  },
  {
    'city': 'waropen',
    'province': 'papua'
  },
  {
    'city': 'way kanan',
    'province': 'lampung'
  },
  {
    'city': 'wonogiri',
    'province': 'jawa tengah'
  },
  {
    'city': 'wonosobo',
    'province': 'jawa tengah'
  },
  {
    'city': 'yahukimo',
    'province': 'papua'
  },
  {
    'city': 'yalimo',
    'province': 'papua'
  },
  {
    'city': 'yogyakarta',
    'province': 'yogyakarta'
  }
]

exports.provinces = provinces
exports.cities = cities