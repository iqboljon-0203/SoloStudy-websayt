import { additionalTopics } from "./additional-tests.js";

export const topics = [
  {
    id: "topic1",
    title:
      "Pedagogika tarixi fan sifatida (Eng qadimgi davrlardan VI asrgacha)",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Pedagogika fan sifatida qaysi maqsadga xizmat qiladi?",
        options: [
          { id: "A", text: "Faqat tarixiy bilim berish", isCorrect: false },
          { id: "B", text: "Faqat matematik bilim berish", isCorrect: false },
          {
            id: "C",
            text: "Ta’lim va tarbiyani nazariy va amaliy jihatdan o‘rganish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat adabiyotni o‘rganish", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Eng qadimgi davrlarda tarbiya asosiy qaysi shaklda berilgan?",
        options: [
          { id: "A", text: "Kitob orqali", isCorrect: false },
          { id: "B", text: "Og‘zaki va amaliy shaklda", isCorrect: true },
          { id: "C", text: "Internet orqali", isCorrect: false },
          { id: "D", text: "Radio va televizor orqali", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Pedagogika so‘zi qaysi til ildizidan kelib chiqqan?",
        options: [
          { id: "A", text: "Lotin", isCorrect: false },
          { id: "B", text: "Arab", isCorrect: false },
          {
            id: "C",
            text: "Yunon (paidagogos – o‘quvchi bilan shug‘ullanuvchi shaxs)",
            isCorrect: true,
          },
          { id: "D", text: "Fors", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Qadimgi davrlarda pedagogik jarayon kimlar orqali amalga oshirilgan?",
        options: [
          { id: "A", text: "Hukumdorlardan", isCorrect: false },
          { id: "B", text: "Shifokorlardan", isCorrect: false },
          { id: "C", text: "Ustoz va ota-onalar orqali", isCorrect: true },
          { id: "D", text: "Qahramonlar orqali", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "VI asrgacha ta’limning asosiy maqsadi nima bo‘lgan?",
        options: [
          { id: "A", text: "Texnologik bilim berish", isCorrect: false },
          { id: "B", text: "Yozma bilimlarni oshirish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma’naviy tarbiya berish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa o‘rgatish", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Qadimgi pedagogik fikrlarni qaysi manbalar orqali bilishimiz mumkin?",
        options: [
          { id: "A", text: "Gazeta va jurnallar", isCorrect: false },
          { id: "B", text: "Radio dasturlar", isCorrect: false },
          {
            id: "C",
            text: "Afsona, rivoyat va diniy matnlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Qadimgi davrlarda maktablar mavjud bo‘lganmi?",
        options: [
          {
            id: "A",
            text: "Maktablar mavjud bo‘lgan, ammo zamonaviy shaklda emas",
            isCorrect: true,
          },
          { id: "B", text: "Yo‘q, faqat uyda o‘rganilgan", isCorrect: false },
          { id: "C", text: "Faqat diniy markazlarda", isCorrect: false },
          { id: "D", text: "Faqat harbiy maktablar", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Pedagogik fikrning qadimgi manbasi qaysi?",
        options: [
          { id: "A", text: "Tarixiy ensiklopediya", isCorrect: false },
          { id: "B", text: "Afsonalar va qissalar", isCorrect: true },
          { id: "C", text: "Internet bloglar", isCorrect: false },
          { id: "D", text: "Dasturiy ta’lim", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Qadimgi davrlarda tarbiya qaysi yo‘nalishda berilgan?",
        options: [
          { id: "A", text: "Faqat texnik bilim", isCorrect: false },
          {
            id: "B",
            text: "Axloqiy, ma’naviy va amaliy ko‘nikmalar",
            isCorrect: true,
          },
          { id: "C", text: "Musiqiy bilim", isCorrect: false },
          { id: "D", text: "Politika", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Pedagogik fikrlarning qadimgi shakllariga nima kiradi?",
        options: [
          { id: "A", text: "Gazeta maqolalari", isCorrect: false },
          { id: "B", text: "Internet forumlar", isCorrect: false },
          {
            id: "C",
            text: "Og‘zaki rivoyatlar va diniy ta’limotlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion ko‘rsatuvlar", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "“Paidagogos” so‘zi yunon tilida nima ma’noni bildiradi?",
        options: [
          { id: "A", text: "O‘quvchi", isCorrect: false },
          { id: "B", text: "Kitob", isCorrect: false },
          { id: "C", text: "O‘quvchini tarbiyalovchi shaxs", isCorrect: true },
          { id: "D", text: "Maktab", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Qadimgi davr pedagogik jarayonida eng muhim vosita nima bo‘lgan?",
        options: [
          { id: "A", text: "Kompyuter", isCorrect: false },
          { id: "B", text: "Kitob", isCorrect: false },
          { id: "C", text: "Og‘zaki so‘z va amaliy tajriba", isCorrect: true },
          { id: "D", text: "Radio", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Qadimgi davrlarda tarbiya berishda kimlar asosiy rol o‘ynagan?",
        options: [
          { id: "A", text: "Shahar hokimlari", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          { id: "C", text: "Ustozlar va oilalar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Pedagogikaning qadimgi shakllarida nima asosiy hisoblangan?",
        options: [
          { id: "A", text: "Yozma bilimlar", isCorrect: false },
          {
            id: "B",
            text: "Axloqiy qadriyatlar va ma’naviyat",
            isCorrect: true,
          },
          { id: "C", text: "Texnologiya", isCorrect: false },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Qadimgi davrlarda maktablar qaysi asosda ishlagan?",
        options: [
          { id: "A", text: "Zamonaviy fan asosida", isCorrect: false },
          { id: "B", text: "Texnologik bilimlar asosida", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va diniy qadriyatlar asosida",
            isCorrect: true,
          },
          { id: "D", text: "Internet asosida", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Qadimgi pedagogik fikrlarning rivojlanishida nima muhim bo‘lgan?",
        options: [
          { id: "A", text: "Kompyuterlar", isCorrect: false },
          { id: "B", text: "Mashinasozlik", isCorrect: false },
          { id: "C", text: "Og‘zaki va yozma an’analar", isCorrect: true },
          { id: "D", text: "Radio", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Qadimgi davr pedagogik jarayonida talaba kimga bo‘ysungan?",
        options: [
          { id: "A", text: "Do‘stlariga", isCorrect: false },
          { id: "B", text: "Oqituvchiga emas", isCorrect: false },
          { id: "C", text: "Ustoz va ota-onaga", isCorrect: true },
          { id: "D", text: "Hokimga", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Qadimgi davrlarda axloqiy tarbiya qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Radio orqali", isCorrect: false },
          { id: "B", text: "Kompyuter orqali", isCorrect: false },
          {
            id: "C",
            text: "Rivoyatlar, hikoyalar va misollar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Gazeta orqali", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Pedagogik fikrning qadimgi manbalaridan biri nima?",
        options: [
          { id: "A", text: "Video darslik", isCorrect: false },
          { id: "B", text: "Dasturiy ta’lim", isCorrect: false },
          { id: "C", text: "Rivoyatlar va afsonalar", isCorrect: true },
          { id: "D", text: "Elektron kitob", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Qadimgi davrda tarbiyaning asosiy yo‘nalishi nima?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Axloqiy va ma’naviy tarbiya", isCorrect: true },
          { id: "C", text: "Internet", isCorrect: false },
          { id: "D", text: "Politika", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Qadimgi pedagogik jarayon kimga qaratilgan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "B", text: "Faqat olimlarga", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar uchun", isCorrect: true },
          { id: "D", text: "Faqat askarlarga", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Pedagogik fikr tarixini o‘rganish nima uchun muhim?",
        options: [
          { id: "A", text: "Faqat tarixni bilish uchun", isCorrect: false },
          { id: "B", text: "Faqat kitob yozish uchun", isCorrect: false },
          {
            id: "C",
            text: "Ta’lim va tarbiyani yaxshilash uchun",
            isCorrect: true,
          },
          { id: "D", text: "Faqat ilmiy maqola uchun", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Qadimgi davrlarda tarbiyaning shakllari qaysi?",
        options: [
          { id: "A", text: "Internet va televizor", isCorrect: false },
          { id: "B", text: "Gazeta va jurnal", isCorrect: false },
          {
            id: "C",
            text: "Og‘zaki rivoyatlar va amaliy ko‘nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Video darslar", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Qadimgi davr pedagogik fikrlarini o‘rganish manbalari qaysi?",
        options: [
          { id: "A", text: "Dasturiy ta’lim", isCorrect: false },
          { id: "B", text: "Internet maqolalar", isCorrect: false },
          {
            id: "C",
            text: "Rivoyatlar, afsonalar, diniy matnlar",
            isCorrect: true,
          },
          { id: "D", text: "Radio", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Qadimgi davrda tarbiya berish jarayoni qanday edi?",
        options: [
          { id: "A", text: "Faqat yozma", isCorrect: false },
          { id: "B", text: "Og‘zaki va amaliy shaklda", isCorrect: true },
          { id: "C", text: "Faqat televidenie orqali", isCorrect: false },
          { id: "D", text: "Faqat internet orqali", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Pedagogika qadimgi davrlarda kim tomonidan shakllantirilgan?",
        options: [
          { id: "A", text: "Shahar hokimi", isCorrect: false },
          { id: "B", text: "Shifokor", isCorrect: false },
          { id: "C", text: "Ustoz va ilm ahli", isCorrect: true },
          { id: "D", text: "Harbiy qo‘mondon", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Qadimgi davr pedagogik fikrining maqsadi nima?",
        options: [
          { id: "A", text: "Faqat texnologik bilim berish", isCorrect: false },
          { id: "B", text: "Faqat adabiy bilim berish", isCorrect: false },
          {
            id: "C",
            text: "Shaxsni axloqiy va ma’naviy rivojlantirish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosiy bilim berish", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Pedagogika tarixi fanining asosiy vazifasi nima?",
        options: [
          {
            id: "A",
            text: "Kompyuter dasturlarini o‘rganish",
            isCorrect: false,
          },
          { id: "B", text: "Musiqani o‘rgatish", isCorrect: false },
          {
            id: "C",
            text: "Ta’lim va tarbiyaning rivojlanish tarixini o‘rganish",
            isCorrect: true,
          },
          { id: "D", text: "Sportni rivojlantirish", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Qadimgi davr pedagogik jarayonida bilim berishda asosiy vosita nima?",
        options: [
          { id: "A", text: "Kitob va internet", isCorrect: false },
          { id: "B", text: "Radio va televidenie", isCorrect: false },
          {
            id: "C",
            text: "Og‘zaki hikoya va amaliy tajriba",
            isCorrect: true,
          },
          { id: "D", text: "Film va video", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Qadimgi davrlarda pedagogik fikrlarning shakllanishi nimaga asoslangan?",
        options: [
          { id: "A", text: "Texnologiya va internetga", isCorrect: false },
          { id: "B", text: "Musiqa va san’atga", isCorrect: false },
          {
            id: "C",
            text: "Og‘zaki rivoyatlar, afsonalar va diniy matnlarga",
            isCorrect: true,
          },
          { id: "D", text: "Gazeta va jurnalga", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic2",
    title: "Avesto – eng qadimgi davrlarning madaniy yozma yodgorligi",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Avesto qaysi dinning muqaddas kitobi hisoblanadi?",
        options: [
          { id: "A", text: "Islom", isCorrect: false },
          { id: "B", text: "Buddizm", isCorrect: false },
          { id: "C", text: "Zardushtiylik", isCorrect: true },
          { id: "D", text: "Xristianlik", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Avesto qaysi davrda yaratilgan?",
        options: [
          { id: "A", text: "XIX asr", isCorrect: false },
          { id: "B", text: "VIII asr", isCorrect: false },
          { id: "C", text: "Miloddan avvalgi 6–5 asrlar", isCorrect: true },
          { id: "D", text: "V asr", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Avesto qaysi tilda yozilgan?",
        options: [
          { id: "A", text: "Arab tili", isCorrect: false },
          { id: "B", text: "Lotin tili", isCorrect: false },
          { id: "C", text: "Avesto tili", isCorrect: true },
          { id: "D", text: "Yunon tili", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Avesto mazmuni asosan nima haqida?",
        options: [
          { id: "A", text: "Tarixiy voqealar", isCorrect: false },
          { id: "B", text: "Matematika qonunlari", isCorrect: false },
          {
            id: "C",
            text: "Diniy e'tiqod va axloqiy qadriyatlar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy asarlar", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Avestoda nechta asosiy bo'lim mavjud?",
        options: [
          { id: "A", text: "2", isCorrect: false },
          { id: "B", text: "3", isCorrect: false },
          { id: "C", text: "5", isCorrect: true },
          { id: "D", text: "7", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Avesto qaysi xalqning madaniy merosi hisoblanadi?",
        options: [
          { id: "A", text: "Arab xalqi", isCorrect: false },
          { id: "B", text: "Yunon xalqi", isCorrect: false },
          { id: "C", text: "Eron xalqi", isCorrect: true },
          { id: "D", text: "Turk xalqi", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Avesto kitobida asosiy qaysi mavzular ko'rib chiqilgan?",
        options: [
          { id: "A", text: "Texnologiya va fan", isCorrect: false },
          { id: "B", text: "Siyosat va iqtisod", isCorrect: false },
          { id: "C", text: "Diniy e'tiqod va axloq", isCorrect: true },
          { id: "D", text: "Musiqa va san'at", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Avesto qaysi shaxs tomonidan yozilgan?",
        options: [
          { id: "A", text: "Zardusht", isCorrect: true },
          { id: "B", text: "Muhammad", isCorrect: false },
          { id: "C", text: "Buddha", isCorrect: false },
          { id: "D", text: "Muso", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Avesto qaysi hududda paydo bo'lgan?",
        options: [
          { id: "A", text: "Arabiston", isCorrect: false },
          { id: "B", text: "Yunoniston", isCorrect: false },
          { id: "C", text: "Eron", isCorrect: true },
          { id: "D", text: "Hindiston", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Avesto qaysi davrda eng keng tarqalgan?",
        options: [
          { id: "A", text: "Miloddan avvalgi 3-2 asrlar", isCorrect: false },
          { id: "B", text: "Miloddan avvalgi 1-2 asrlar", isCorrect: false },
          { id: "C", text: "Miloddan avvalgi 6-4 asrlar", isCorrect: true },
          { id: "D", text: "Miloddan keyingi 1-2 asrlar", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Avesto kitobida qaysi mavzular asosiy o'rin tutadi?",
        options: [
          { id: "A", text: "Matematika va geometriya", isCorrect: false },
          { id: "B", text: "Tarix va geografiya", isCorrect: false },
          { id: "C", text: "Diniy ta'limot va axloq", isCorrect: true },
          { id: "D", text: "Musiqa va she'riyat", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Avesto qaysi tillarda tarjima qilingan?",
        options: [
          { id: "A", text: "Faqat arab tilida", isCorrect: false },
          { id: "B", text: "Faqat yunon tilida", isCorrect: false },
          { id: "C", text: "Ko'plab tillarda", isCorrect: true },
          { id: "D", text: "Faqat fors tilida", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Avesto qaysi asosda pedagogik qadriyatlarga ega?",
        options: [
          { id: "A", text: "Texnologik bilim asosida", isCorrect: false },
          { id: "B", text: "Siyosiy bilim asosida", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy asosda", isCorrect: true },
          { id: "D", text: "Iqtisodiy bilim asosida", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Avesto qaysi pedagogik prinsiplarni o'z ichiga oladi?",
        options: [
          { id: "A", text: "Faqat texnik ta'lim", isCorrect: false },
          { id: "B", text: "Faqat musiqiy ta'lim", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiya", isCorrect: true },
          { id: "D", text: "Faqat matematik ta'lim", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Avesto qaysi davrda eng katta ta'sir ko'rsatgan?",
        options: [
          { id: "A", text: "Zamonaviy davrda", isCorrect: false },
          { id: "B", text: "O'rta asrlarda", isCorrect: false },
          { id: "C", text: "Qadimgi davrda", isCorrect: true },
          { id: "D", text: "Yangi davrda", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Avesto qaysi xalqlar uchun qadriyatli bo'lgan?",
        options: [
          { id: "A", text: "Faqat arab xalqlari", isCorrect: false },
          { id: "B", text: "Faqat yunon xalqlari", isCorrect: false },
          { id: "C", text: "Eron va O'rta Osiyo xalqlari", isCorrect: true },
          { id: "D", text: "Faqat hind xalqlari", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Avesto qaysi pedagogik usullarni tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma ta'lim", isCorrect: false },
          { id: "B", text: "Faqat og'zaki ta'lim", isCorrect: false },
          { id: "C", text: "Og'zaki va amaliy ta'lim", isCorrect: true },
          { id: "D", text: "Faqat kitobiy ta'lim", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Avesto qaysi axloqiy qadriyatlarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat iqtisodiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat", isCorrect: true },
          { id: "D", text: "Faqat harbiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Avesto qaysi pedagogik maqsadlarga ega?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Avesto qaysi ta'lim usullarini qo'llab-quvvatlaydi?",
        options: [
          { id: "A", text: "Faqat individual ta'lim", isCorrect: false },
          { id: "B", text: "Faqat guruhli ta'lim", isCorrect: false },
          { id: "C", text: "Ustoz-shogird munosabati", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini ta'lim", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Avesto qaysi pedagogik prinsiplarni o'z ichiga oladi?",
        options: [
          { id: "A", text: "Faqat nazariy ta'lim", isCorrect: false },
          { id: "B", text: "Faqat amaliy ta'lim", isCorrect: false },
          { id: "C", text: "Nazariy va amaliy ta'lim", isCorrect: true },
          { id: "D", text: "Faqat kitobiy ta'lim", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Avesto qaysi axloqiy me'yorlarni belgilaydi?",
        options: [
          { id: "A", text: "Faqat siyosiy me'yorlar", isCorrect: false },
          { id: "B", text: "Faqat iqtisodiy me'yorlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat me'yorlari", isCorrect: true },
          { id: "D", text: "Faqat harbiy me'yorlar", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Avesto qaysi pedagogik qadriyatlarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat texnik qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat san'at qadriyatlari", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Faqat sport qadriyatlari", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Avesto qaysi ta'lim metodlarini tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma metodlar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Avesto qaysi pedagogik maqsadlarga intiladi?",
        options: [
          { id: "A", text: "Faqat bilim oshirish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Avesto qaysi axloqiy tamoyillarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Avesto qaysi pedagogik usullarni qo'llab-quvvatlaydi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird usullari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Avesto qaysi axloqiy qadriyatlarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Avesto qaysi pedagogik maqsadlarga ega?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Avesto qaysi ta'lim usullarini tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic3",
    title: "VII–XIV asr O'rta Osiyoda tarbiya, maktab va pedagogik fikrlar",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "VII asrdan XIV asrga qadar O'rta Osiyoda tarbiya kimlar orqali rivojlangan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          {
            id: "C",
            text: "Ustozlar, mutafakkirlar va diniy rahbarlar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "O'sha davr maktablari qaysi asosda tashkil etilgan?",
        options: [
          { id: "A", text: "Texnologik bilim asosida", isCorrect: false },
          { id: "B", text: "Sport va musiqaga asoslangan", isCorrect: false },
          {
            id: "C",
            text: "Diniy va axloqiy qadriyatlar asosida",
            isCorrect: true,
          },
          { id: "D", text: "Siyosiy bilim asosida", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi ta'lim muassasalari mavjud bo'lgan?",
        options: [
          { id: "A", text: "Faqat harbiy maktablar", isCorrect: false },
          {
            id: "B",
            text: "Faqat hunarmandchilik maktablari",
            isCorrect: false,
          },
          { id: "C", text: "Madrasalar va maktablar", isCorrect: true },
          { id: "D", text: "Faqat savdo maktablari", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "O'sha davrda ta'lim qaysi tillarda berilgan?",
        options: [
          { id: "A", text: "Faqat arab tilida", isCorrect: false },
          { id: "B", text: "Faqat fors tilida", isCorrect: false },
          { id: "C", text: "Arab va mahalliy tillarda", isCorrect: true },
          { id: "D", text: "Faqat turk tilida", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi fanlar o'qitilgan?",
        options: [
          { id: "A", text: "Faqat matematika", isCorrect: false },
          { id: "B", text: "Faqat tarix", isCorrect: false },
          { id: "C", text: "Diniy va dunyoviy fanlar", isCorrect: true },
          { id: "D", text: "Faqat musiqiy fanlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "O'sha davrda pedagogik fikr qaysi asosda shakllangan?",
        options: [
          { id: "A", text: "Faqat texnologiya asosida", isCorrect: false },
          { id: "B", text: "Faqat siyosat asosida", isCorrect: false },
          { id: "C", text: "Diniy va falsafiy asosda", isCorrect: true },
          { id: "D", text: "Faqat iqtisod asosida", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi olimlar mashhur bo'lgan?",
        options: [
          { id: "A", text: "Faqat matematiklar", isCorrect: false },
          { id: "B", text: "Faqat shifokorlar", isCorrect: false },
          {
            id: "C",
            text: "Al-Beruniy, Ibn Sino va boshqalar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat astronomlar", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "O'sha davrda ta'lim qaysi usullar bilan berilgan?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma usullar", isCorrect: true },
          { id: "D", text: "Faqat amaliy usullar", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik prinsiplar qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual ta'lim", isCorrect: false },
          { id: "B", text: "Faqat guruhli ta'lim", isCorrect: false },
          { id: "C", text: "Ustoz-shogird munosabati", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini ta'lim", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "O'sha davrda qaysi axloqiy qadriyatlar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat iqtisodiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik, adolat va ilm", isCorrect: true },
          { id: "D", text: "Faqat harbiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi ta'lim muassasalari eng mashhur bo'lgan?",
        options: [
          { id: "A", text: "Faqat harbiy maktablar", isCorrect: false },
          {
            id: "B",
            text: "Faqat hunarmandchilik maktablari",
            isCorrect: false,
          },
          { id: "C", text: "Madrasalar va kutubxonalar", isCorrect: true },
          { id: "D", text: "Faqat savdo maktablari", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "O'sha davrda qaysi pedagogik usullar qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat test usullari", isCorrect: false },
          { id: "B", text: "Faqat muhokama usullari", isCorrect: false },
          { id: "C", text: "Hikoya, misol va muhokama", isCorrect: true },
          { id: "D", text: "Faqat yozma usullar", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi fanlar eng keng tarqalgan?",
        options: [
          { id: "A", text: "Faqat matematika", isCorrect: false },
          { id: "B", text: "Faqat tarix", isCorrect: false },
          { id: "C", text: "Diniy va falsafiy fanlar", isCorrect: true },
          { id: "D", text: "Faqat musiqiy fanlar", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "O'sha davrda qaysi pedagogik maqsadlar qo'yilgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi ta'lim metodlari qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Nazariy va amaliy metodlar", isCorrect: true },
          { id: "D", text: "Faqat kitobiy metodlar", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "O'sha davrda qaysi axloqiy tamoyillar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik qadriyatlar mavjud bo'lgan?",
        options: [
          { id: "A", text: "Faqat texnik qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat san'at qadriyatlari", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Faqat sport qadriyatlari", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "O'sha davrda qaysi ta'lim usullari eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik prinsiplar qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "O'sha davrda qaysi axloqiy me'yorlar belgilangan?",
        options: [
          { id: "A", text: "Faqat siyosiy me'yorlar", isCorrect: false },
          { id: "B", text: "Faqat iqtisodiy me'yorlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat me'yorlari", isCorrect: true },
          { id: "D", text: "Faqat harbiy me'yorlar", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik usullar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird usullari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "O'sha davrda qaysi axloqiy qadriyatlar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik maqsadlar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "O'sha davrda qaysi ta'lim metodlari eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik prinsiplar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "O'sha davrda qaysi axloqiy tamoyillar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik usullar eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "O'sha davrda qaysi axloqiy qadriyatlar eng keng o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "VII-XIV asrlarda O'rta Osiyoda qaysi pedagogik maqsadlar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "O'sha davrda qaysi ta'lim usullari eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic4",
    title: "Sharq uyg'onish davrida pedagogik fikrlarning rivojlanishi",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Sharq uyg'onish davri qaysi asrlar oralig'ida bo'lgan?",
        options: [
          { id: "A", text: "V–VI asrlar", isCorrect: false },
          { id: "B", text: "XIX asr", isCorrect: false },
          { id: "C", text: "XIV–XVI asrlar", isCorrect: true },
          { id: "D", text: "XX asr", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Sharq uyg'onish davrida qaysi pedagogik fikrlar rivojlangan?",
        options: [
          { id: "A", text: "Faqat texnik fikrlar", isCorrect: false },
          { id: "B", text: "Faqat siyosiy fikrlar", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy fikrlar", isCorrect: true },
          { id: "D", text: "Faqat iqtisodiy fikrlar", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Sharq uyg'onish davrida qaysi ta'lim muassasalari paydo bo'lgan?",
        options: [
          { id: "A", text: "Faqat harbiy maktablar", isCorrect: false },
          {
            id: "B",
            text: "Faqat hunarmandchilik maktablari",
            isCorrect: false,
          },
          { id: "C", text: "Madrasalar va maktablar", isCorrect: true },
          { id: "D", text: "Faqat savdo maktablari", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Sharq uyg'onish davrida qaysi pedagogik usullar qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Sharq uyg'onish davrida qaysi axloqiy qadriyatlar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Sharq uyg'onish davrida qaysi pedagogik maqsadlar qo'yilgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Sharq uyg'onish davrida qaysi ta'lim metodlari qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Nazariy va amaliy metodlar", isCorrect: true },
          { id: "D", text: "Faqat kitobiy metodlar", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Sharq uyg'onish davrida qaysi pedagogik prinsiplar qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Sharq uyg'onish davrida qaysi axloqiy tamoyillar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Sharq uyg'onish davrida qaysi pedagogik qadriyatlar mavjud bo'lgan?",
        options: [
          { id: "A", text: "Faqat texnik qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat san'at qadriyatlari", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Faqat sport qadriyatlari", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Sharq uyg'onish davrida qaysi ta'lim usullari eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Sharq uyg'onish davrida qaysi pedagogik usullar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird usullari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Sharq uyg'onish davrida qaysi axloqiy qadriyatlar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Sharq uyg'onish davrida qaysi pedagogik maqsadlar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Sharq uyg'onish davrida qaysi ta'lim metodlari eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Sharq uyg'onish davrida qaysi pedagogik prinsiplar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Sharq uyg'onish davrida qaysi axloqiy tamoyillar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Sharq uyg'onish davrida qaysi pedagogik usullar eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Sharq uyg'onish davrida qaysi axloqiy qadriyatlar eng keng o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Sharq uyg'onish davrida qaysi pedagogik maqsadlar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Sharq uyg'onish davrida qaysi ta'lim usullari eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Sharq uyg'onish davrida qaysi pedagogik prinsiplar eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Sharq uyg'onish davrida qaysi axloqiy tamoyillar eng keng o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Sharq uyg'onish davrida qaysi pedagogik usullar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Sharq uyg'onish davrida qaysi axloqiy qadriyatlar eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Sharq uyg'onish davrida qaysi pedagogik maqsadlar eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Sharq uyg'onish davrida qaysi ta'lim metodlari eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Sharq uyg'onish davrida qaysi pedagogik prinsiplar eng muhim bo'lgan?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Sharq uyg'onish davrida qaysi axloqiy tamoyillar eng samarali bo'lgan?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Sharq uyg'onish davrida qaysi pedagogik usullar eng keng qo'llanilgan?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic5",
    title: "Hadis ilmining paydo bo'lishi. Muxaddislar",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Hadis ilmi nima bilan shug'ullanadi?",
        options: [
          { id: "A", text: "Faqat tarixni o'rganadi", isCorrect: false },
          { id: "B", text: "Faqat siyosatni o'rganadi", isCorrect: false },
          {
            id: "C",
            text: "Payg'ambarimiz Muhammad (s.a.v.) so'zlari va amallarini o'rganadi",
            isCorrect: true,
          },
          { id: "D", text: "Faqat matematika", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Hadis ilmi qaysi davrda paydo bo'lgan?",
        options: [
          { id: "A", text: "VII asrda", isCorrect: false },
          { id: "B", text: "VIII asrda", isCorrect: false },
          { id: "C", text: "IX asrda", isCorrect: true },
          { id: "D", text: "X asrda", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Muxaddis kim?",
        options: [
          { id: "A", text: "Faqat tarixchi", isCorrect: false },
          { id: "B", text: "Faqat shifokor", isCorrect: false },
          { id: "C", text: "Hadis to'plovchi olim", isCorrect: true },
          { id: "D", text: "Faqat matematik", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Hadis ilmining asosiy maqsadi nima?",
        options: [
          { id: "A", text: "Faqat tarixni saqlash", isCorrect: false },
          { id: "B", text: "Faqat siyosatni o'rganish", isCorrect: false },
          { id: "C", text: "Payg'ambar so'zlarini saqlash", isCorrect: true },
          { id: "D", text: "Faqat matematika", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Hadis ilmi qaysi asosda shakllangan?",
        options: [
          { id: "A", text: "Faqat texnologiya asosida", isCorrect: false },
          { id: "B", text: "Faqat siyosat asosida", isCorrect: false },
          { id: "C", text: "Diniy va axloqiy asosda", isCorrect: true },
          { id: "D", text: "Faqat iqtisod asosida", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Hadis ilmi qaysi pedagogik qadriyatlarga ega?",
        options: [
          { id: "A", text: "Faqat texnik qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat san'at qadriyatlari", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Faqat sport qadriyatlari", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Hadis ilmi qaysi ta'lim usullarini qo'llab-quvvatlaydi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Hadis ilmi qaysi pedagogik prinsiplarni o'z ichiga oladi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Hadis ilmi qaysi axloqiy tamoyillarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Hadis ilmi qaysi pedagogik maqsadlarga ega?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Hadis ilmi qaysi ta'lim metodlarini tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Hadis ilmi qaysi pedagogik usullarni qo'llab-quvvatlaydi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird usullari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Hadis ilmi qaysi axloqiy qadriyatlarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Hadis ilmi qaysi pedagogik maqsadlarga intiladi?",
        options: [
          { id: "A", text: "Faqat bilim oshirish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Hadis ilmi qaysi ta'lim usullarini tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Hadis ilmi qaysi pedagogik prinsiplarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Hadis ilmi qaysi axloqiy tamoyillarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Hadis ilmi qaysi pedagogik usullarni eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Hadis ilmi qaysi axloqiy qadriyatlarni eng keng o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Hadis ilmi qaysi pedagogik maqsadlarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Hadis ilmi qaysi ta'lim metodlarini eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Hadis ilmi qaysi pedagogik prinsiplarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Hadis ilmi qaysi axloqiy tamoyillarni eng keng o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Hadis ilmi qaysi pedagogik usullarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Hadis ilmi qaysi axloqiy qadriyatlarni eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Hadis ilmi qaysi pedagogik maqsadlarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Hadis ilmi qaysi ta'lim usullarini eng keng tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Hadis ilmi qaysi pedagogik prinsiplarni eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Hadis ilmi qaysi axloqiy tamoyillarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Hadis ilmi qaysi pedagogik usullarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic6",
    title: "Sharq uyg'onish davrida didaktik qarashlar",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Yusuf Xos Xojib qaysi asari bilan mashhur?",
        options: [
          { id: "A", text: "Al-Qonun", isCorrect: false },
          { id: "B", text: "Al-Muwatta", isCorrect: false },
          { id: "C", text: "Qutadg'u Bilig", isCorrect: true },
          { id: "D", text: "Shahname", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Qutadg'u Bilig qaysi davrda yozilgan?",
        options: [
          { id: "A", text: "XI asrda", isCorrect: false },
          { id: "B", text: "XII asrda", isCorrect: false },
          { id: "C", text: "XI asrda", isCorrect: true },
          { id: "D", text: "XIII asrda", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Qutadg'u Bilig qaysi tilda yozilgan?",
        options: [
          { id: "A", text: "Arab tilida", isCorrect: false },
          { id: "B", text: "Fors tilida", isCorrect: false },
          { id: "C", text: "Turk tilida", isCorrect: true },
          { id: "D", text: "Yunon tilida", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Qutadg'u Bilig qaysi mavzularni o'z ichiga oladi?",
        options: [
          { id: "A", text: "Faqat tarix", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va pedagogik mavzular", isCorrect: true },
          { id: "D", text: "Faqat matematika", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Qutadg'u Bilig qaysi pedagogik qadriyatlarga ega?",
        options: [
          { id: "A", text: "Faqat texnik qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat san'at qadriyatlari", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Faqat sport qadriyatlari", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Qutadg'u Bilig qaysi ta'lim usullarini qo'llab-quvvatlaydi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Qutadg'u Bilig qaysi pedagogik prinsiplarni o'z ichiga oladi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Qutadg'u Bilig qaysi axloqiy tamoyillarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Qutadg'u Bilig qaysi pedagogik maqsadlarga ega?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Qutadg'u Bilig qaysi ta'lim metodlarini tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Qutadg'u Bilig qaysi pedagogik usullarni qo'llab-quvvatlaydi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird usullari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Qutadg'u Bilig qaysi axloqiy qadriyatlarni o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Qutadg'u Bilig qaysi pedagogik maqsadlarga intiladi?",
        options: [
          { id: "A", text: "Faqat bilim oshirish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Qutadg'u Bilig qaysi ta'lim usullarini tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Qutadg'u Bilig qaysi pedagogik prinsiplarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Qutadg'u Bilig qaysi axloqiy tamoyillarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Qutadg'u Bilig qaysi pedagogik usullarni eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Qutadg'u Bilig qaysi axloqiy qadriyatlarni eng keng o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Qutadg'u Bilig qaysi pedagogik maqsadlarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni axloqiy rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Qutadg'u Bilig qaysi ta'lim metodlarini eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat nazariy metodlar", isCorrect: false },
          { id: "B", text: "Faqat amaliy metodlar", isCorrect: false },
          { id: "C", text: "Hikoya va misol metodlari", isCorrect: true },
          { id: "D", text: "Faqat test metodlari", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Qutadg'u Bilig qaysi pedagogik prinsiplarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Qutadg'u Bilig qaysi axloqiy tamoyillarni eng keng o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Qutadg'u Bilig qaysi pedagogik usullarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Qutadg'u Bilig qaysi axloqiy qadriyatlarni eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Qutadg'u Bilig qaysi pedagogik maqsadlarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat bilim berish", isCorrect: false },
          { id: "B", text: "Faqat ko'nikma berish", isCorrect: false },
          { id: "C", text: "Shaxsni mukammal rivojlantirish", isCorrect: true },
          { id: "D", text: "Faqat kasb o'rgatish", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Qutadg'u Bilig qaysi ta'lim usullarini eng keng tavsiya qiladi?",
        options: [
          { id: "A", text: "Faqat yozma usullar", isCorrect: false },
          { id: "B", text: "Faqat og'zaki usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Qutadg'u Bilig qaysi pedagogik prinsiplarni eng samarali deb biladi?",
        options: [
          { id: "A", text: "Faqat individual prinsiplar", isCorrect: false },
          { id: "B", text: "Faqat guruhli prinsiplar", isCorrect: false },
          { id: "C", text: "Ustoz-shogird prinsiplari", isCorrect: true },
          { id: "D", text: "Faqat o'z-o'zini o'rganish", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Qutadg'u Bilig qaysi axloqiy tamoyillarni eng muhim deb biladi?",
        options: [
          { id: "A", text: "Faqat shaxsiy tamoyillar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy tamoyillar", isCorrect: false },
          { id: "C", text: "Halollik va adolat tamoyillari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy tamoyillar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Qutadg'u Bilig qaysi pedagogik usullarni eng keng qo'llanadi?",
        options: [
          { id: "A", text: "Faqat individual usullar", isCorrect: false },
          { id: "B", text: "Faqat guruhli usullar", isCorrect: false },
          { id: "C", text: "Hikoya va misol usullari", isCorrect: true },
          { id: "D", text: "Faqat test usullari", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Qutadg'u Bilig qaysi axloqiy qadriyatlarni eng keng o'rgatadi?",
        options: [
          { id: "A", text: "Faqat shaxsiy qadriyatlar", isCorrect: false },
          { id: "B", text: "Faqat ijtimoiy qadriyatlar", isCorrect: false },
          { id: "C", text: "Halollik va adolat qadriyatlari", isCorrect: true },
          { id: "D", text: "Faqat siyosiy qadriyatlar", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic7",
    title:
      "Yusuf Xos Xojib, Axmad Yugnakiy, Kaykovuslarning asarlarida didaktik qarashlar",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Yusuf Xos Xojib qaysi asar bilan mashhur?",
        options: [
          { id: "A", text: "Divan", isCorrect: false },
          { id: "B", text: "Ruboiy", isCorrect: false },
          { id: "C", text: "Qutadg'u Bilik", isCorrect: true },
          { id: "D", text: "Gulistan", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Qutadg'u Bilikning asosiy mavzusi nima?",
        options: [
          { id: "A", text: "Sevgi hikoyalari", isCorrect: false },
          { id: "B", text: "Tarixiy voqealar", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va siyosiy didaktik qarashlar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Yusuf Xos Xojibning asarlarida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy tarbiya va davlat boshqaruvi",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Axmad Yugnakiy qaysi sohada mashhur bo'lgan?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Sport", isCorrect: false },
          { id: "C", text: "Didaktik adabiyot va tarix", isCorrect: true },
          { id: "D", text: "Texnologiya", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Axmad Yugnakiy asarlarida asosiy maqsad nima?",
        options: [
          { id: "A", text: "Faqat siyosiy ta'lim", isCorrect: false },
          { id: "B", text: "Faqat texnologik bilim", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va tarbiyaviy ta'lim berish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Kaykovus qaysi asari bilan tanilgan?",
        options: [
          { id: "A", text: "Gulistan", isCorrect: false },
          { id: "B", text: "Qutadg'u Bilik", isCorrect: false },
          { id: "C", text: "Qabusnoma", isCorrect: true },
          { id: "D", text: "Ruboiy", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Qabusnoma asarida asosiy mavzu nima?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Faqat sport", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ijtimoiy va didaktik qarashlar",
            isCorrect: true,
          },
          { id: "D", text: "Texnologiya", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Yusuf Xos Xojibning didaktik qarashlari qaysi yo'nalishda edi?",
        options: [
          { id: "A", text: "Faqat texnologik", isCorrect: false },
          { id: "B", text: "Faqat siyosiy", isCorrect: false },
          { id: "C", text: "Axloqiy va siyosiy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Axmad Yugnakiy asarlarida talabalarga nimalar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va ijtimoiy qadriyatlar", isCorrect: true },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Kaykovusning pedagogik yondashuvi nimaga qaratilgan?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Faqat texnologiya", isCorrect: false },
          { id: "C", text: "Axloqiy va ijtimoiy tarbiya", isCorrect: true },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Qutadg'u Bilik asarining asosiy pedagogik qadriyatlari qaysi?",
        options: [
          { id: "A", text: "Texnologik bilim", isCorrect: false },
          { id: "B", text: "Siyosiy nazorat", isCorrect: false },
          {
            id: "C",
            text: "Adolat, dono hukmdorlik, axloqiy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Qabusnoma asarida asosiy yo'nalish nima?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va siyosiy didaktika", isCorrect: true },
          { id: "D", text: "Sport", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Didaktik asarlar kimlar uchun yozilgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          { id: "C", text: "Yoshlar va davlat xodimlari", isCorrect: true },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Yusuf Xos Xojibning asarlarida qanday metodlar qo'llangan?",
        options: [
          { id: "A", text: "Faqat texnologik metod", isCorrect: false },
          { id: "B", text: "Radio va video", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, maslahat va qissalar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Internet", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Axmad Yugnakiy asarlarining tarbiyaviy ahamiyati nimada?",
        options: [
          { id: "A", text: "Faqat siyosat", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Texnologiya", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Kaykovusning Qabusnoma asarida qanday maslahatlar berilgan?",
        options: [
          { id: "A", text: "Faqat texnologik", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va davlat boshqaruvi bo'yicha",
            isCorrect: true,
          },
          { id: "D", text: "Sport", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Yusuf Xos Xojib didaktik qarashlari qaysi janrga mansub?",
        options: [
          { id: "A", text: "Roman", isCorrect: false },
          { id: "B", text: "She'riyat", isCorrect: false },
          { id: "C", text: "Didaktik-adabiy asar", isCorrect: true },
          { id: "D", text: "Drama", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Axmad Yugnakiy asarlarida qaysi qadriyatlar asosiy?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Musiqiy", isCorrect: false },
          { id: "C", text: "Axloqiy, ijtimoiy va ma'naviy", isCorrect: true },
          { id: "D", text: "Siyosiy", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Didaktik qarashlar jamiyatga qanday foyda beradi?",
        options: [
          { id: "A", text: "Faqat texnologik", isCorrect: false },
          { id: "B", text: "Faqat siyosiy", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ijtimoiy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Yusuf Xos Xojib asarlarida davlat boshqaruvi bo'yicha qanday maslahatlar bor?",
        options: [
          { id: "A", text: "Faqat texnologik", isCorrect: false },
          { id: "B", text: "Faqat musiqa", isCorrect: false },
          {
            id: "C",
            text: "Adolat, dono hukmdorlik va maslahat berish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat sport", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Kaykovus asarlarida yoshlar uchun qanday yo'l-yo'riqlar mavjud?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va siyosiy maslahatlar", isCorrect: true },
          { id: "D", text: "Sport", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Didaktik asarlarda axloqiy qadriyatlar nimaga xizmat qiladi?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy nazorat", isCorrect: false },
          {
            id: "C",
            text: "Shaxsning ma'naviy va ijtimoiy rivojlanishi",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Yusuf Xos Xojibning asarlari qaysi tilda yozilgan?",
        options: [
          { id: "A", text: "Arab", isCorrect: false },
          { id: "B", text: "Fors", isCorrect: false },
          { id: "C", text: "Turkcha", isCorrect: true },
          { id: "D", text: "Lotin", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Axmad Yugnakiy qaysi davrda yashagan?",
        options: [
          { id: "A", text: "XX asr", isCorrect: false },
          { id: "B", text: "XXI asr", isCorrect: false },
          { id: "C", text: "O'rta asrlar (VII–XIV asrlar)", isCorrect: true },
          { id: "D", text: "XIX asr", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Kaykovus asarlarida davlat boshqaruvi bo'yicha tavsiyalar qaysi shaklda berilgan?",
        options: [
          { id: "A", text: "Internet orqali", isCorrect: false },
          { id: "B", text: "Musiqa bilan", isCorrect: false },
          { id: "C", text: "Hikoya va maslahatlar orqali", isCorrect: true },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Didaktik qarashlar yoshlarni qanday tarbiyalaydi?",
        options: [
          { id: "A", text: "Faqat texnologik", isCorrect: false },
          { id: "B", text: "Musiqa bilan", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ijtimoiy va ma'naviy qadriyatlar bilan",
            isCorrect: true,
          },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Yusuf Xos Xojib asarlarining pedagogik yondashuvi qaysi sohada ko'rinadi?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va davlat boshqaruvi", isCorrect: true },
          { id: "D", text: "Sport", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Axmad Yugnakiy asarlarida didaktik metod qanday?",
        options: [
          { id: "A", text: "Internet orqali", isCorrect: false },
          { id: "B", text: "Video", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, maslahat va og'zaki darslar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Kaykovus asarlarining asosiy pedagogik e'tibori nimada?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va siyosiy tarbiya", isCorrect: true },
          { id: "D", text: "Faqat sport", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Didaktik asarlar jamiyatda qanday rol o'ynaydi?",
        options: [
          { id: "A", text: "Faqat texnologik rivojlanish", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, siyosiy va ma'naviy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat sport", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic8",
    title: "Sharq pedagogik ta'limotida ta'limiy-axloqiy qarashlar",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Sharq pedagogik ta'limotining asosiy yo'nalishi nima?",
        options: [
          { id: "A", text: "Texnologik bilim", isCorrect: false },
          { id: "B", text: "Faqat siyosiy bilim", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqiy san'at", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Ta'limiy-axloqiy qarashlarning asosiy maqsadi nima edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Shaxsni axloqiy va ma'naviy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Sharq pedagogik ta'limotida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy qadriyatlar va tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Ushbu davr pedagogik ta'limotida kimlar muhim rol o'ynagan?",
        options: [
          { id: "A", text: "Harbiylar", isCorrect: false },
          { id: "B", text: "Savdogarlar", isCorrect: false },
          {
            id: "C",
            text: "Ulamolar, shoirlar va mutafakkirlar",
            isCorrect: true,
          },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Ta'limiy-axloqiy qarashlar asosiy manbalari nima bo'lgan?",
        options: [
          { id: "A", text: "Internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Kitoblar, asarlar va og'zaki rivoyatlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Sharq pedagogik ta'limotida tarbiya kimlarga qaratilgan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "B", text: "Faqat askarlarga", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat savdogarlarga", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Ta'limiy-axloqiy qarashlar qaysi qadriyatlarni rivojlantirgan?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Siyosiy", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy", isCorrect: true },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Ushbu davr pedagogik ta'limotida asosiy vosita nima bo'lgan?",
        options: [
          { id: "A", text: "Internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma matnlar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Ta'limiy-axloqiy qarashlar kimlar tomonidan shakllantirilgan?",
        options: [
          { id: "A", text: "Harbiylar", isCorrect: false },
          { id: "B", text: "Savdogarlar", isCorrect: false },
          { id: "C", text: "Shoirlar va mutafakkirlar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Ta'limiy-axloqiy qarashlar asosiy yo'nalishlari qaysi?",
        options: [
          { id: "A", text: "Texnologiya va siyosat", isCorrect: false },
          { id: "B", text: "Musiqa va sport", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiya", isCorrect: true },
          { id: "D", text: "Iqtisodiy bilim", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Ushbu davr pedagogik ta'limotida talaba nimaga o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiyaga", isCorrect: false },
          { id: "B", text: "Faqat siyosatga", isCorrect: false },
          { id: "C", text: "Axloqiy qadriyat va odoblarga", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Sharq pedagogik ta'limotida tarbiya jarayoni qanday bo'lgan?",
        options: [
          { id: "A", text: "Faqat rasmiy", isCorrect: false },
          { id: "B", text: "Faqat masofaviy", isCorrect: false },
          {
            id: "C",
            text: "Ustoz va shogird munosabatlariga asoslangan",
            isCorrect: true,
          },
          { id: "D", text: "Faqat internet orqali", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Ta'limiy-axloqiy qarashlar jamiyatga qanday foyda bergan?",
        options: [
          { id: "A", text: "Texnologiya rivojladi", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratildi", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy tarbiya mustahkamlandi",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshdi", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Sharq pedagogik ta'limotida asosiy metod nima edi?",
        options: [
          { id: "A", text: "Internet darslar", isCorrect: false },
          { id: "B", text: "Video darslar", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Ta'limiy-axloqiy qarashlar qaysi davr pedagogik merosini aks ettiradi?",
        options: [
          { id: "A", text: "XX asr", isCorrect: false },
          { id: "B", text: "XIX asr", isCorrect: false },
          { id: "C", text: "Sharq uyg'onish davri", isCorrect: true },
          { id: "D", text: "XIV asr", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Pedagogik ta'limotda talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Ushbu davr pedagogik ta'limotida asosiy vosita nima bo'lgan?",
        options: [
          { id: "A", text: "Radio va televizor", isCorrect: false },
          { id: "B", text: "Internet", isCorrect: false },
          { id: "C", text: "Kitoblar va og'zaki darslar", isCorrect: true },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Ta'limiy-axloqiy qarashlarning jamiyatdagi asosiy ahamiyati nima?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy qadriyatlarni rivojlantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Sharq pedagogik ta'limotida asosiy vositalar orqali nima ta'minlangan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Ta'limiy-axloqiy qarashlarda asosiy diqqat nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy qadriyatlar", isCorrect: true },
          { id: "D", text: "Musiqiy san'at", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Sharq pedagogik ta'limotida tarbiya berish jarayonida ustozlarning roli nima?",
        options: [
          { id: "A", text: "Faqat yozuvchi", isCorrect: false },
          { id: "B", text: "Faqat hukmdor", isCorrect: false },
          {
            id: "C",
            text: "Shogirdlarni axloqiy va ma'naviy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Ta'limiy-axloqiy qarashlar pedagogik jihatdan nimani oshiradi?",
        options: [
          { id: "A", text: "Texnologiyani", isCorrect: false },
          { id: "B", text: "Siyosiy bilimni", isCorrect: false },
          {
            id: "C",
            text: "Talabaning axloqiy va ma'naviy tarbiyasini",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilimni", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Ta'limiy-axloqiy qarashlar qaysi yoshdagi shaxslar uchun muhim?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          {
            id: "C",
            text: "Barcha yoshdagi jamiyat a'zolari",
            isCorrect: true,
          },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Sharq pedagogik ta'limotida axloqiy qadriyatlar qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat yozma", isCorrect: false },
          { id: "B", text: "Faqat she'riy", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, nasihat va dialog orqali",
            isCorrect: true,
          },
          { id: "D", text: "Faqat ilmiy", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Ta'limiy-axloqiy qarashlar asosiy maqsadi kimni tarbiyalash edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlarni", isCorrect: false },
          { id: "B", text: "Faqat askarlarni", isCorrect: false },
          { id: "C", text: "Jamiyatning barcha a'zolarini", isCorrect: true },
          { id: "D", text: "Faqat savdogarlarni", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Sharq pedagogik ta'limotida axloqiy tarbiya qanday rivojlantirilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya orqali", isCorrect: false },
          { id: "B", text: "Faqat siyosat orqali", isCorrect: false },
          {
            id: "C",
            text: "Didaktik asarlar va ustoz-shogird munosabatlari orqali",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa orqali", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Ta'limiy-axloqiy qarashlar qanday metodlar orqali o'rgatilgan?",
        options: [
          { id: "A", text: "Internet va video", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki va yozma darslar, nasihatlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Ta'limiy-axloqiy qarashlar asosan qaysi merosni aks ettiradi?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Siyosiy", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy pedagogik meros",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Sharq pedagogik ta'limotida tarbiya berishda asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy qadriyatlar va odoblar", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Ta'limiy-axloqiy qarashlarning jamiyatdagi ahamiyati nima?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic9",
    title: "XIV–XVI asrlar Movarounnahrda tarbiya va maktab",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "XIV asrning ikkinchi yarmida Movarounnahrda asosiy ta'lim muassasalari qaysi edi?",
        options: [
          { id: "A", text: "Universitetlar", isCorrect: false },
          { id: "B", text: "Akademiyalar", isCorrect: false },
          { id: "C", text: "Maktaab va madrasalar", isCorrect: true },
          { id: "D", text: "Texnologiya markazlari", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Movarounnahr maktablarida kimlar ta'lim olgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "XIV–XVI asrlarda maktablarda asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy, diniy va ilmiy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Movarounnahr maktablarida darslar qaysi shaklda bo'lgan?",
        options: [
          { id: "A", text: "Faqat radio orqali", isCorrect: false },
          { id: "B", text: "Faqat internet orqali", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma shaklda", isCorrect: true },
          { id: "D", text: "Televizion dasturlar orqali", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "XIV–XVI asrlarda tarbiyada kimlar muhim rol o'ynagan?",
        options: [
          { id: "A", text: "Savdogarlar", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          { id: "C", text: "Ustozlar va ulamolar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Maktaab va madrasalarda o'qitilgan fanlar qaysi?",
        options: [
          { id: "A", text: "Faqat matematika", isCorrect: false },
          { id: "B", text: "Faqat texnologiya", isCorrect: false },
          { id: "C", text: "Diniy fanlar, adabiyot va axloq", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "XIV–XVI asr Movarounnahr maktablarining asosiy maqsadi nima edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Shaxsni axloqiy va ma'naviy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa ta'limi", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Movarounnahr maktablarida o'qitish jarayoni kimlarga qaratilgan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "B", text: "Faqat askarlarga", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat savdogarlarga", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "XIV–XVI asrlarda tarbiya jarayoni qanday bo'lgan?",
        options: [
          { id: "A", text: "Faqat rasmiy", isCorrect: false },
          { id: "B", text: "Faqat masofaviy", isCorrect: false },
          {
            id: "C",
            text: "Ustoz-shogird munosabatlariga asoslangan",
            isCorrect: true,
          },
          { id: "D", text: "Faqat internet orqali", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Movarounnahr maktablarida ustozlarning roli nima edi?",
        options: [
          { id: "A", text: "Faqat yozuvchi", isCorrect: false },
          { id: "B", text: "Faqat hukmdor", isCorrect: false },
          {
            id: "C",
            text: "Shogirdlarni axloqiy va ilmiy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "XIV–XVI asrlarda tarbiyaga asosiy diqqat nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va diniy qadriyatlar", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Movarounnahr maktablarida asosiy o'quv vositalari nima bo'lgan?",
        options: [
          { id: "A", text: "Radio va televizor", isCorrect: false },
          { id: "B", text: "Internet", isCorrect: false },
          { id: "C", text: "Kitoblar va og'zaki darslar", isCorrect: true },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "XIV–XVI asrlarda maktablarda talabalarga nimalar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          { id: "C", text: "Diniy bilimlar, adabiyot, axloq", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Movarounnahr maktablarining jamiyatdagi ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy tarbiyani mustahkamlash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "XIV–XVI asr Movarounnahr maktablari kimlar tomonidan boshqarilgan?",
        options: [
          { id: "A", text: "Savdogarlar", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          { id: "C", text: "Ulamolar va mahalliy hukmdorlar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Maktaab va madrasalarda darslar qaysi yo'nalishlarda bo'lgan?",
        options: [
          { id: "A", text: "Texnologiya va siyosat", isCorrect: false },
          { id: "B", text: "Musiqa va sport", isCorrect: false },
          { id: "C", text: "Axloqiy, diniy va ilmiy fanlar", isCorrect: true },
          { id: "D", text: "Iqtisodiy bilimlar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "XIV–XVI asr maktablarida tarbiyaga asosiy urg'u nimaga berilgan?",
        options: [
          { id: "A", text: "Texnologik bilimlarga", isCorrect: false },
          { id: "B", text: "Siyosiy bilimlarga", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Musiqiy bilimlarga", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Movarounnahr maktablarida darslar qanday metod bilan olib borilgan?",
        options: [
          { id: "A", text: "Faqat internet orqali", isCorrect: false },
          { id: "B", text: "Video orqali", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "XIV–XVI asr pedagogik tizimida talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Movarounnahr maktablarida tarbiya jarayoni kimlar orqali amalga oshirilgan?",
        options: [
          { id: "A", text: "Faqat savdogarlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Ustozlar va ulamolar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "XIV–XVI asr Movarounnahr maktablarida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va diniy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Maktablar jamiyat uchun nimani ta'minlagan?",
        options: [
          { id: "A", text: "Texnologik bilimni", isCorrect: false },
          { id: "B", text: "Siyosiy tizimni", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiyani", isCorrect: true },
          { id: "D", text: "Musiqiy bilimni", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "XIV–XVI asr maktablarida asosiy fan qaysi edi?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Diniy fanlar va adabiyot", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Movarounnahr maktablarida talabalarga qanday ko'nikmalar berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va ilmiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "XIV–XVI asr pedagogik tizimida ustozlarning asosiy vazifasi nima?",
        options: [
          { id: "A", text: "Faqat yozuvchi", isCorrect: false },
          { id: "B", text: "Faqat hukmdor", isCorrect: false },
          {
            id: "C",
            text: "Shogirdlarni tarbiyalash va ilm o'rgatish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Movarounnahr maktablarida tarbiya qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat yozma", isCorrect: false },
          { id: "B", text: "Faqat she'riy", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar orqali", isCorrect: true },
          { id: "D", text: "Faqat ilmiy", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "XIV–XVI asr pedagogik tizimi qaysi qadriyatlarni rivojlantirgan?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Siyosiy", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy", isCorrect: true },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Movarounnahr maktablarida talabalarga axloqiy tarbiya qaysi vositalar orqali berilgan?",
        options: [
          { id: "A", text: "Internet va video", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, nasihat va yozma matnlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "XIV–XVI asr pedagogik tizimining jamiyatdagi ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Movarounnahr maktablarida talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
    ],
  },
  ...additionalTopics,
];
