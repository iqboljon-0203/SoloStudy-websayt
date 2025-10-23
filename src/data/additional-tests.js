// Qo'shimcha test mavzulari
export const additionalTopics = [
  {
    id: "topic10",
    title: "Mirzo Ulug'bek va Zahiriddin Muhammad Bobur pedagogik g'oyalari",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Mirzo Ulug'bek qaysi soha bilan mashhur?",
        options: [
          { id: "A", text: "Faqat siyosat", isCorrect: false },
          { id: "B", text: "Faqat adabiyot", isCorrect: false },
          { id: "C", text: "Astronomiya va ta'lim", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Ulug'bekning pedagogik g'oyalari nimaga qaratilgan?",
        options: [
          { id: "A", text: "Faqat siyosiy hokimiyatga", isCorrect: false },
          { id: "B", text: "Musiqa tarbiyasiga", isCorrect: false },
          { id: "C", text: "Ilmiy va axloqiy tarbiyaga", isCorrect: true },
          { id: "D", text: "Texnologiyaga", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Ulug'bek madrasalari qaysi shaharda joylashgan?",
        options: [
          { id: "A", text: "Samarqand", isCorrect: false },
          { id: "B", text: "Buxoro", isCorrect: false },
          { id: "C", text: "Samarqand, Buxoro", isCorrect: true },
          { id: "D", text: "Tashkent", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Ulug'bekning asosiy pedagogik yondashuvi nimaga asoslangan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Astronomiya, matematika va ilmiy fanlar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Zahiriddin Muhammad Bobur qaysi sohada mashhur bo'lgan?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Texnologiya", isCorrect: false },
          { id: "C", text: "Tarix va adabiyot", isCorrect: true },
          { id: "D", text: "Astronomiya", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Bobur pedagogik g'oyalari nimaga urg'u bergan?",
        options: [
          { id: "A", text: "Texnologiyaga", isCorrect: false },
          { id: "B", text: "Musiqaga", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va tarixiy bilimga",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosatga", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Ulug'bek madrasalarida asosiy fanlar qaysi edi?",
        options: [
          { id: "A", text: "Musiqa va san'at", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Astronomiya, matematika va diniy fanlar",
            isCorrect: true,
          },
          { id: "D", text: "Texnologiya", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Bobur o'z asarlarida nima haqida yozgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Tarix, hayotiy tajriba va axloqiy masalalar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Ulug'bek pedagogik g'oyalari jamiyatga qanday foyda bergan?",
        options: [
          { id: "A", text: "Texnologiya rivojlandi", isCorrect: false },
          { id: "B", text: "Musiqa bilim oshdi", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy va axloqiy tarbiya mustahkamlandi",
            isCorrect: true,
          },
          { id: "D", text: "Siyosiy bilim oshdi", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Bobur pedagogik g'oyalari qaysi yo'nalishga qaratilgan?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Faqat siyosiy", isCorrect: false },
          {
            id: "C",
            text: "Tarixiy, axloqiy va madaniy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Ulug'bekning pedagogik faoliyatida asosiy vosita nima?",
        options: [
          { id: "A", text: "Internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          { id: "C", text: "Madrasalar va ilmiy maktablar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Bobur o'z pedagogik qarashlarini qaysi asarda yozgan?",
        options: [
          { id: "A", text: "Qutadg'u Bilig", isCorrect: false },
          { id: "B", text: "Qabusnoma", isCorrect: false },
          { id: "C", text: "Boburnoma", isCorrect: true },
          { id: "D", text: "Shahname", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Ulug'bek pedagogik g'oyalari kimlar uchun mo'ljallangan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Talabalar va jamiyat a'zolari", isCorrect: true },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Bobur pedagogik g'oyalari asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va tarixiy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Ulug'bek pedagogik yondashuvida asosiy metod nima edi?",
        options: [
          { id: "A", text: "Video va internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Darslar, amaliy mashg'ulotlar va kuzatuvlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Bobur asarlarida tarbiya qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, tarixiy voqealar va nasihatlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Ulug'bek pedagogik g'oyalari qaysi fanlar bilan bog'liq?",
        options: [
          { id: "A", text: "Musiqa va san'at", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Astronomiya, matematika va diniy fanlar",
            isCorrect: true,
          },
          { id: "D", text: "Texnologiya", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Bobur pedagogik qarashlarida asosiy diqqat nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiya", isCorrect: true },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Ulug'bek pedagogik g'oyalari jamiyatdagi ahamiyati nimada?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Musiqa bilimini oshirish", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy va axloqiy merosni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Siyosiy tizim yaratish", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Bobur pedagogik qarashlarining asosiy maqsadi nima edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Musiqa tarbiyasi", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, tarixiy va madaniy tarbiya berish",
            isCorrect: true,
          },
          { id: "D", text: "Siyosiy tizim yaratish", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Ulug'bek pedagogik faoliyatida talabalarga nima o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat siyosat", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Astronomiya, matematika va axloqiy qadriyatlar",
            isCorrect: true,
          },
          { id: "D", text: "Texnologiya", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Bobur pedagogik qarashlari qaysi hududda shakllangan?",
        options: [
          { id: "A", text: "Arabiston", isCorrect: false },
          { id: "B", text: "Hindiston", isCorrect: false },
          { id: "C", text: "Movarounnahr va Hindiston", isCorrect: true },
          { id: "D", text: "Turkiya", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Ulug'bek pedagogik g'oyalari qaysi davrga taalluqli?",
        options: [
          { id: "A", text: "XIX asr", isCorrect: false },
          { id: "B", text: "XX asr", isCorrect: false },
          { id: "C", text: "XIV–XV asrlar", isCorrect: true },
          { id: "D", text: "XVI asr", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Bobur pedagogik qarashlari qaysi asrga taalluqli?",
        options: [
          { id: "A", text: "XIX asr", isCorrect: false },
          { id: "B", text: "XX asr", isCorrect: false },
          { id: "C", text: "XVI asr", isCorrect: true },
          { id: "D", text: "XIV asr", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Ulug'bek pedagogik g'oyalari qaysi tizim orqali amalga oshgan?",
        options: [
          { id: "A", text: "Internet va video", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          { id: "C", text: "Madrasalar va ilmiy maktablar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Bobur pedagogik g'oyalari qanday metod orqali o'rgatilgan?",
        options: [
          { id: "A", text: "Internet va video", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Hikoya va tarixiy voqealar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Ulug'bek pedagogik g'oyalari talabalarga qanday ko'nikmalar berdi?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy, axloqiy va matematik ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Bobur pedagogik qarashlari jamiyat uchun nimani ta'minlagan?",
        options: [
          { id: "A", text: "Texnologiyani", isCorrect: false },
          { id: "B", text: "Siyosiy tizimni", isCorrect: false },
          { id: "C", text: "Axloqiy va tarixiy tarbiyani", isCorrect: true },
          { id: "D", text: "Musiqiy bilimni", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Ulug'bek pedagogik g'oyalari jamiyatda qanday meros qoldirdi?",
        options: [
          { id: "A", text: "Texnologik meros", isCorrect: false },
          { id: "B", text: "Siyosiy tizim", isCorrect: false },
          { id: "C", text: "Ilmiy va pedagogik meros", isCorrect: true },
          { id: "D", text: "Musiqiy meros", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Bobur pedagogik qarashlarining asosiy ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, madaniy va tarixiy merosni saqlash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic11",
    title: "Alisher Navoiy va Abdurahmon Jomiy pedagogik qarashlari",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Alisher Navoiy qaysi soha bilan mashhur?",
        options: [
          { id: "A", text: "Faqat siyosat", isCorrect: false },
          { id: "B", text: "Faqat tarix", isCorrect: false },
          { id: "C", text: "Adabiyot va ilm-fan", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Navoiy pedagogik qarashlarida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Abdurahmon Jomiy qaysi soha bilan mashhur?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Adabiyot va ilohiyot", isCorrect: true },
          { id: "D", text: "Astronomiya", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Jomiy pedagogik qarashlarida asosiy diqqat nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy va diniy tarbiya", isCorrect: true },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Navoiy asarlarida talabalarga nima o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va estetik qadriyatlar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Jomiy pedagogik qarashlarida asosiy vosita nima?",
        options: [
          { id: "A", text: "Internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Asarlar, nasihatlar va hikoyalar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Navoiy asarlarida tarbiya kimlar uchun mo'ljallangan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Yoshlar va jamiyat a'zolari", isCorrect: true },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Jomiy asarlarida tarbiya qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, nasihat va ilmiy asarlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Navoiy pedagogik qarashlari qaysi davrga taalluqli?",
        options: [
          { id: "A", text: "XIX asr", isCorrect: false },
          { id: "B", text: "XX asr", isCorrect: false },
          { id: "C", text: "XIV–XV asrlar", isCorrect: true },
          { id: "D", text: "XVI asr", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Jomiy pedagogik qarashlari qaysi davrga taalluqli?",
        options: [
          { id: "A", text: "XIX asr", isCorrect: false },
          { id: "B", text: "XX asr", isCorrect: false },
          { id: "C", text: "XV–XVI asrlar", isCorrect: true },
          { id: "D", text: "XIV asr", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Navoiy asarlarida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy qadriyatlar va ma'naviy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Jomiy asarlarida talabalarga qanday ko'nikmalar berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, diniy va madaniy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Navoiy pedagogik qarashlari jamiyatga qanday foyda bergan?",
        options: [
          { id: "A", text: "Texnologiya rivojlandi", isCorrect: false },
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
        text: "Jomiy pedagogik qarashlari jamiyatga qanday foyda bergan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosiy tizim", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, diniy va ma'naviy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Navoiy asarlarida tarbiya qaysi metodlar orqali berilgan?",
        options: [
          { id: "A", text: "Internet va video", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, nasihat va she'riy asarlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Jomiy asarlarida tarbiya qaysi metod bilan berilgan?",
        options: [
          { id: "A", text: "Internet va video", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, nasihat va ilohiy asarlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Navoiy pedagogik qarashlarida asosiy vosita nima bo'lgan?",
        options: [
          { id: "A", text: "Internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          { id: "C", text: "Kitoblar va she'riy asarlar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Jomiy pedagogik qarashlarida asosiy maqsad nima edi?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va diniy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Navoiy pedagogik qarashlari qaysi fanlar bilan bog'liq?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          { id: "C", text: "Adabiyot, axloq va ma'naviyat", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Jomiy pedagogik qarashlari qaysi yo'nalishlarga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya va siyosat", isCorrect: false },
          { id: "B", text: "Musiqa va sport", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, diniy va madaniy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Iqtisodiy bilimlar", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Navoiy pedagogik qarashlari talabalarga qanday ko'nikmalar berdi?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va estetik ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Jomiy pedagogik qarashlarida asosiy diqqat nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va diniy tarbiya", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Navoiy pedagogik qarashlari jamiyatdagi ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va madaniy merosni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Jomiy pedagogik qarashlari talabalarga kimlar uchun mo'ljallangan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Yoshlar va jamiyat a'zolari", isCorrect: true },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Navoiy pedagogik qarashlari qaysi shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "She'riy asarlar va hikoyalar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Jomiy pedagogik qarashlari qaysi shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Hikoya, nasihat va ilohiy asarlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Navoiy pedagogik qarashlarida ustozning roli nima?",
        options: [
          { id: "A", text: "Faqat yozuvchi", isCorrect: false },
          { id: "B", text: "Faqat hukmdor", isCorrect: false },
          {
            id: "C",
            text: "Talabani axloqiy va ma'naviy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Jomiy pedagogik qarashlarida ustozning roli qanday edi?",
        options: [
          { id: "A", text: "Faqat yozuvchi", isCorrect: false },
          { id: "B", text: "Faqat hukmdor", isCorrect: false },
          {
            id: "C",
            text: "Talabani axloqiy va diniy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Navoiy pedagogik qarashlarining asosiy ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va estetik merosni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Jomiy pedagogik qarashlarining jamiyatdagi ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, diniy va madaniy qadriyatlarni rivojlantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic12",
    title: "XVI–XIX asrning birinchi yarmigacha tarbiya va maktab",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "XVI–XIX asr Movarounnahr pedagogik tizimida asosiy ta'lim muassasalari qaysi edi?",
        options: [
          { id: "A", text: "Universitetlar", isCorrect: false },
          { id: "B", text: "Akademiyalar", isCorrect: false },
          { id: "C", text: "Madrasalar va maktaablar", isCorrect: true },
          { id: "D", text: "Texnologiya markazlari", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Ushbu davr maktablarida kimlar ta'lim olgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "XVI–XIX asr pedagogik tizimida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Axloqiy, diniy va ilmiy tarbiya", isCorrect: true },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Madrasalarda darslar qanday shaklda bo'lgan?",
        options: [
          { id: "A", text: "Faqat radio orqali", isCorrect: false },
          { id: "B", text: "Faqat internet orqali", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma shaklda", isCorrect: true },
          { id: "D", text: "Televizion dasturlar orqali", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "XVI–XIX asr pedagogik tizimida tarbiyachilar kimlar edi?",
        options: [
          { id: "A", text: "Savdogarlar", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          { id: "C", text: "Ustozlar va ulamolar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Madrasalarda o'qitilgan asosiy fanlar qaysi edi?",
        options: [
          { id: "A", text: "Faqat matematika", isCorrect: false },
          { id: "B", text: "Faqat texnologiya", isCorrect: false },
          { id: "C", text: "Diniy fanlar, adabiyot, axloq", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "XVI–XIX asr pedagogik tizimining asosiy maqsadi nima edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Shaxsni axloqiy va ma'naviy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa tarbiyasi", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Madrasalarda o'qitish kimlarga qaratilgan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Tarbiya jarayoni qanday bo'lgan?",
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
        text: "Ustozlarning roli nima edi?",
        options: [
          { id: "A", text: "Faqat yozuvchi", isCorrect: false },
          { id: "B", text: "Faqat hukmdor", isCorrect: false },
          {
            id: "C",
            text: "Shogirdlarni axloqiy, diniy va ilmiy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Tarbiyaga asosiy e'tibor nimaga qaratilgan edi?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va diniy qadriyatlar", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Asosiy o'quv vositalari nima bo'lgan?",
        options: [
          { id: "A", text: "Radio va televizor", isCorrect: false },
          { id: "B", text: "Internet", isCorrect: false },
          { id: "C", text: "Kitoblar va og'zaki darslar", isCorrect: true },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Talabalarga nimalar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          { id: "C", text: "Diniy bilimlar, adabiyot, axloq", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Maktablarning jamiyatdagi ahamiyati nimada edi?",
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
        text: "Madrasalar kimlar tomonidan boshqarilgan?",
        options: [
          { id: "A", text: "Savdogarlar", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          { id: "C", text: "Ulamolar va mahalliy hukmdorlar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Darslar qaysi yo'nalishlarda bo'lgan?",
        options: [
          { id: "A", text: "Texnologiya va siyosat", isCorrect: false },
          { id: "B", text: "Musiqa va sport", isCorrect: false },
          { id: "C", text: "Axloqiy, diniy va ilmiy fanlar", isCorrect: true },
          { id: "D", text: "Iqtisodiy bilimlar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Tarbiyaga asosiy urg'u nimaga berilgan?",
        options: [
          { id: "A", text: "Texnologik bilimlarga", isCorrect: false },
          { id: "B", text: "Siyosiy bilimlarga", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy qadriyatlar", isCorrect: true },
          { id: "D", text: "Musiqiy bilimlarga", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Darslar qanday metod bilan olib borilgan?",
        options: [
          { id: "A", text: "Faqat internet orqali", isCorrect: false },
          { id: "B", text: "Video orqali", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Tarbiya jarayoni kimlar orqali amalga oshirilgan?",
        options: [
          { id: "A", text: "Faqat savdogarlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Ustozlar va ulamolar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Asosiy e'tibor nimaga qaratilgan?",
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
        text: "Asosiy fan qaysi edi?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Diniy fanlar va adabiyot", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Talabalarga qanday ko'nikmalar berilgan?",
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
        text: "Ustozlarning asosiy vazifasi nima edi?",
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
        text: "Tarbiya qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat yozma", isCorrect: false },
          { id: "B", text: "Faqat she'riy", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar orqali", isCorrect: true },
          { id: "D", text: "Faqat ilmiy", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Asosiy qadriyatlar qaysi?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Siyosiy", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy", isCorrect: true },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Axloqiy tarbiya qaysi vositalar orqali berilgan?",
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
        text: "Jamiyatdagi ahamiyati nimada edi?",
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
        text: "Talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic13",
    title: "XIX asr oxiri – XX asr boshlarida Turkiston pedagogik fikrlar",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "XIX asr oxiri – XX asr boshlarida Turkistonda asosiy ta'lim muassasalari qaysi edi?",
        options: [
          { id: "A", text: "Universitetlar", isCorrect: false },
          { id: "B", text: "Akademiyalar", isCorrect: false },
          { id: "C", text: "Maktablar va madrasalar", isCorrect: true },
          { id: "D", text: "Texnologiya markazlari", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Ushbu davr maktablarida kimlar ta'lim olgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "XIX–XX asr pedagogik tizimida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va milliy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Madrasalarda darslar qanday shaklda bo'lgan?",
        options: [
          { id: "A", text: "Faqat radio orqali", isCorrect: false },
          { id: "B", text: "Faqat internet orqali", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma shaklda", isCorrect: true },
          { id: "D", text: "Televizion dasturlar orqali", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Ushbu davr pedagogik tizimida tarbiyachilar kimlar edi?",
        options: [
          { id: "A", text: "Savdogarlar", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          { id: "C", text: "Ustozlar va olimlar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Maktablarda o'qitilgan asosiy fanlar qaysi edi?",
        options: [
          { id: "A", text: "Faqat matematika", isCorrect: false },
          { id: "B", text: "Faqat texnologiya", isCorrect: false },
          { id: "C", text: "Diniy fanlar, adabiyot, axloq", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "XIX–XX asr pedagogik tizimining asosiy maqsadi nima edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Shaxsni axloqiy, ma'naviy va milliy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa tarbiyasi", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Maktablarda o'qitish kimlarga qaratilgan edi?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Tarbiya jarayoni qanday bo'lgan?",
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
        text: "Ustozlarning roli nima edi?",
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
        text: "Tarbiyaga asosiy e'tibor nimaga qaratilgan edi?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          { id: "C", text: "Axloqiy va ilmiy qadriyatlar", isCorrect: true },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Asosiy o'quv vositalari nima bo'lgan?",
        options: [
          { id: "A", text: "Radio va televizor", isCorrect: false },
          { id: "B", text: "Internet", isCorrect: false },
          { id: "C", text: "Kitoblar va og'zaki darslar", isCorrect: true },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Talabalarga nimalar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Diniy bilimlar, adabiyot, axloq va milliy qadriyatlar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Maktablarning jamiyatdagi ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiya rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va milliy tarbiyani mustahkamlash",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Madrasalar kimlar tomonidan boshqarilgan?",
        options: [
          { id: "A", text: "Savdogarlar", isCorrect: false },
          { id: "B", text: "Harbiylar", isCorrect: false },
          {
            id: "C",
            text: "Ulamolar va mahalliy yetakchilar",
            isCorrect: true,
          },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Darslar qaysi yo'nalishlarda bo'lgan?",
        options: [
          { id: "A", text: "Texnologiya va siyosat", isCorrect: false },
          { id: "B", text: "Musiqa va sport", isCorrect: false },
          { id: "C", text: "Axloqiy, diniy va ilmiy fanlar", isCorrect: true },
          { id: "D", text: "Iqtisodiy bilimlar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Tarbiyaga asosiy urg'u nimaga berilgan?",
        options: [
          { id: "A", text: "Texnologik bilimlarga", isCorrect: false },
          { id: "B", text: "Siyosiy bilimlarga", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va milliy qadriyatlar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilimlarga", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Darslar qanday metod bilan olib borilgan?",
        options: [
          { id: "A", text: "Faqat internet orqali", isCorrect: false },
          { id: "B", text: "Video orqali", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Tarbiya jarayoni kimlar orqali amalga oshirilgan?",
        options: [
          { id: "A", text: "Faqat savdogarlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Ustozlar va olimlar", isCorrect: true },
          { id: "D", text: "Sartaroshlar", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va milliy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Maktablar jamiyat uchun nimani ta'minlagan?",
        options: [
          { id: "A", text: "Texnologik bilimni", isCorrect: false },
          { id: "B", text: "Siyosiy tizimni", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va milliy tarbiyani",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilimni", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Asosiy fan qaysi edi?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Siyosat", isCorrect: false },
          {
            id: "C",
            text: "Diniy fanlar, adabiyot va milliy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Talabalarga qanday ko'nikmalar berilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va milliy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Ustozlarning asosiy vazifasi nima edi?",
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
        text: "Tarbiya qanday shaklda berilgan?",
        options: [
          { id: "A", text: "Faqat yozma", isCorrect: false },
          { id: "B", text: "Faqat she'riy", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma darslar orqali", isCorrect: true },
          { id: "D", text: "Faqat ilmiy", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Asosiy qadriyatlar qaysi?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Siyosiy", isCorrect: false },
          { id: "C", text: "Axloqiy, ilmiy va milliy", isCorrect: true },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Axloqiy tarbiya qaysi vositalar orqali berilgan?",
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
        text: "Jamiyatdagi ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va milliy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy bilim oshirish", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Talaba kimga bo'ysungan?",
        options: [
          { id: "A", text: "Faqat do'stlariga", isCorrect: false },
          { id: "B", text: "Faqat hukmdorlarga", isCorrect: false },
          { id: "C", text: "Ustoz va olimlarga", isCorrect: true },
          { id: "D", text: "Faqat ota-onaga", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic14",
    title: "Jahon pedagogik tizimlari",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Fransiyada maktab tizimi qaysi yoshdan boshlanadi?",
        options: [
          { id: "A", text: "3 yosh", isCorrect: false },
          { id: "B", text: "4 yosh", isCorrect: false },
          { id: "C", text: "6 yosh", isCorrect: true },
          { id: "D", text: "8 yosh", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Germaniya maktab tizimida asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Faqat san'at", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Ilmiy va texnik fanlar", isCorrect: true },
          { id: "D", text: "Sport", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Niderlandiyada ta'lim qanday tizimga ega?",
        options: [
          { id: "A", text: "Faqat davlat maktablari", isCorrect: false },
          { id: "B", text: "Faqat xususiy maktablar", isCorrect: false },
          {
            id: "C",
            text: "Davlat va xususiy maktablar aralash tizim",
            isCorrect: true,
          },
          { id: "D", text: "Internet maktablar", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Hindiston ta'lim tizimida asosiy fan qaysi?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Faqat adabiyot", isCorrect: false },
          {
            id: "C",
            text: "Matematika, ilm-fan va texnologiya",
            isCorrect: true,
          },
          { id: "D", text: "San'at", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Finlandiya ta'lim tizimida talabalarga asosiy e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Texnologiya", isCorrect: false },
          {
            id: "C",
            text: "Shaxsiy rivojlanish va ijodiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Fransiyada maktablar necha bosqichdan iborat?",
        options: [
          { id: "A", text: "2 bosqich", isCorrect: false },
          { id: "B", text: "3 bosqich", isCorrect: false },
          { id: "C", text: "4 bosqich", isCorrect: true },
          { id: "D", text: "5 bosqich", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Germaniyada talabalarga qaysi yo'nalishlarda bilim beriladi?",
        options: [
          { id: "A", text: "Faqat san'at", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Matematika, tabiiy fanlar, texnologiya",
            isCorrect: true,
          },
          { id: "D", text: "Faqat sport", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Niderlandiyada ta'lim tizimi nimaga asoslangan?",
        options: [
          { id: "A", text: "Faqat adabiyot", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Talabaning shaxsiy qobiliyatini rivojlantirish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Hindiston maktab tizimida asosiy pedagogik yondashuv nima?",
        options: [
          { id: "A", text: "Sport", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy va texnologik tayyorgarlik",
            isCorrect: true,
          },
          { id: "D", text: "Faqat adabiyot", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Finlandiyada maktablar nechta bosqichdan iborat?",
        options: [
          { id: "A", text: "5 bosqich", isCorrect: false },
          { id: "B", text: "3 bosqich", isCorrect: false },
          { id: "C", text: "2 bosqich", isCorrect: true },
          { id: "D", text: "4 bosqich", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Fransiyada maktablarda asosiy pedagogik yondashuv nima?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Sport", isCorrect: false },
          { id: "C", text: "Ilmiy va axloqiy tarbiya", isCorrect: true },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Germaniyada maktablar qanday turlarga bo'linadi?",
        options: [
          { id: "A", text: "Faqat xususiy", isCorrect: false },
          { id: "B", text: "Faqat davlat", isCorrect: false },
          {
            id: "C",
            text: "Davlat, xususiy va ixtisoslashgan maktablar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat internet maktablar", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Niderlandiyada talabalarga qanday ko'nikmalar beriladi?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Shaxsiy, ijodiy va ilmiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Hindistonda pedagogik e'tibor nimaga qaratilgan?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Sport", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy va texnologik tayyorgarlik",
            isCorrect: true,
          },
          { id: "D", text: "Faqat adabiyot", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Finlandiyada maktablarda asosiy pedagogik yondashuv nima?",
        options: [
          { id: "A", text: "Faqat ilm-fan", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Shaxsiy rivojlanish va ijodiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Fransiyada talabalarga qaysi fanlar asosiy hisoblanadi?",
        options: [
          { id: "A", text: "Faqat san'at", isCorrect: false },
          { id: "B", text: "Faqat musiqiy", isCorrect: false },
          {
            id: "C",
            text: "Matematika, tabiiy fanlar va adabiyot",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Germaniyada maktablarda talabalarga qanday ko'nikmalar beriladi?",
        options: [
          { id: "A", text: "Faqat sport", isCorrect: false },
          { id: "B", text: "Faqat san'at", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy, texnik va til ko'nikmalari",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Niderlandiya ta'lim tizimida talabalarning asosiy e'tibori nimaga qaratilgan?",
        options: [
          { id: "A", text: "Texnologiya", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          { id: "C", text: "Shaxsiy va ijtimoiy rivojlanish", isCorrect: true },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Hindistonda maktab tizimida nechta bosqich mavjud?",
        options: [
          { id: "A", text: "2 bosqich", isCorrect: false },
          { id: "B", text: "3 bosqich", isCorrect: false },
          { id: "C", text: "4 bosqich", isCorrect: true },
          { id: "D", text: "5 bosqich", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Finlandiyada maktablarda talabalarning asosiy vazifasi nima?",
        options: [
          { id: "A", text: "Faqat sport", isCorrect: false },
          { id: "B", text: "Faqat texnologiya", isCorrect: false },
          {
            id: "C",
            text: "Shaxsiy rivojlanish va ijodiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Siyosiy bilim", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Fransiyada maktablar jamiyatga qanday foyda beradi?",
        options: [
          { id: "A", text: "Faqat siyosiy", isCorrect: false },
          { id: "B", text: "Faqat texnologik", isCorrect: false },
          { id: "C", text: "Ilmiy va axloqiy tarbiya orqali", isCorrect: true },
          { id: "D", text: "Faqat sport", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Germaniyada pedagogik tizim asosiy e'tiborni nimaga qaratadi?",
        options: [
          { id: "A", text: "Musiqa", isCorrect: false },
          { id: "B", text: "Sport", isCorrect: false },
          { id: "C", text: "Ilmiy va texnik tayyorgarlik", isCorrect: true },
          { id: "D", text: "Siyosat", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Niderlandiyada maktablarda asosiy yondashuv nima?",
        options: [
          { id: "A", text: "Faqat adabiyot", isCorrect: false },
          { id: "B", text: "Musiqa", isCorrect: false },
          {
            id: "C",
            text: "Talabaning shaxsiy qobiliyatini rivojlantirish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat siyosat", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Hindistonda pedagogik tizim qanday asosga qurilgan?",
        options: [
          { id: "A", text: "Faqat san'at", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Ilmiy va texnologik tayyorgarlik",
            isCorrect: true,
          },
          { id: "D", text: "Faqat adabiyot", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Finlandiya maktablarida talabalarning asosiy e'tibori qaysi yo'nalishda?",
        options: [
          { id: "A", text: "Faqat ilm-fan", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Shaxsiy rivojlanish va ijodiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Fransiyada talabalarga qanday ko'nikmalar beriladi?",
        options: [
          { id: "A", text: "Faqat sport", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ilmiy va ijodiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Germaniyada pedagogik yondashuvning asosiy maqsadi nima?",
        options: [
          { id: "A", text: "Musiqa tarbiyasi", isCorrect: false },
          { id: "B", text: "Faqat siyosiy tarbiya", isCorrect: false },
          { id: "C", text: "Ilmiy va texnik tayyorgarlik", isCorrect: true },
          { id: "D", text: "Sport", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Niderlandiya maktablarida ta'lim asosiy metod bilan olib boriladi?",
        options: [
          { id: "A", text: "Faqat internet", isCorrect: false },
          { id: "B", text: "Faqat radio", isCorrect: false },
          {
            id: "C",
            text: "Darslar va amaliy mashg'ulotlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Hindistonda pedagogik tizim talabalarga nimani ta'minlaydi?",
        options: [
          { id: "A", text: "Musiqa bilim", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          { id: "C", text: "Ilmiy va texnologik ko'nikmalar", isCorrect: true },
          { id: "D", text: "Faqat adabiyot", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Finlandiyada pedagogik tizim asosiy vazifasi nima?",
        options: [
          { id: "A", text: "Faqat siyosiy tayyorgarlik", isCorrect: false },
          { id: "B", text: "Faqat texnologik bilim", isCorrect: false },
          {
            id: "C",
            text: "Shaxsiy rivojlanish va ijodiy ko'nikmalarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "topic15",
    title: "Pedagogika tarixi (eng qadimgi davrlardan VI asrgacha)",
    description: "30 ta test savol",
    questions: [
      {
        id: 1,
        text: "Pedagogika tarixi fan sifatida nimani o'rganadi?",
        options: [
          { id: "A", text: "Faqat texnologiyani", isCorrect: false },
          { id: "B", text: "Faqat siyosatni", isCorrect: false },
          {
            id: "C",
            text: "Tarbiya, ta'lim va pedagogik fikrlarni",
            isCorrect: true,
          },
          { id: "D", text: "Faqat musiqa", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Eng qadimgi davr pedagogik tizimida asosiy tarbiya kimlar tomonidan berilgan?",
        options: [
          { id: "A", text: "Texnologlar", isCorrect: false },
          { id: "B", text: "Siyosatchilar", isCorrect: false },
          {
            id: "C",
            text: "Ota-onalar va jamoa yetakchilari",
            isCorrect: true,
          },
          { id: "D", text: "Sportchilar", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "VI asrgacha pedagogik fikrlar qaysi shaklda saqlangan?",
        options: [
          { id: "A", text: "Internetda", isCorrect: false },
          { id: "B", text: "Radio orqali", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki rivoyatlar va yozma manbalar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Qadimgi davr pedagogik tizimida asosiy e'tibor nimaga qaratilgan edi?",
        options: [
          { id: "A", text: "Texnologiyaga", isCorrect: false },
          { id: "B", text: "Siyosatga", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy tarbiyaga", isCorrect: true },
          { id: "D", text: "Musiqaga", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Eng qadimgi pedagogik qarashlar kimlarga qaratilgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          { id: "C", text: "Bolalar va yoshlar", isCorrect: true },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Qadimgi davrda tarbiya jarayoni qanday bo'lgan?",
        options: [
          { id: "A", text: "Faqat rasmiy", isCorrect: false },
          { id: "B", text: "Faqat internet orqali", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki va kundalik hayot tajribasi orqali",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar orqali", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Pedagogik fikrlarning rivojlanishi qanday omillarga bog'liq bo'lgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Madaniyat, din va ijtimoiy hayot",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Qadimgi davr pedagogik tizimida tarbiya kimlar tomonidan nazorat qilingan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          {
            id: "C",
            text: "Oila, jamoa va diniy yetakchilar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Pedagogik jarayonda qaysi qadriyatlar asosiy bo'lgan?",
        options: [
          { id: "A", text: "Texnologik", isCorrect: false },
          { id: "B", text: "Siyosiy", isCorrect: false },
          { id: "C", text: "Axloqiy va ma'naviy", isCorrect: true },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Qadimgi davrda maktablar mavjud bo'lganmi?",
        options: [
          { id: "A", text: "Ha, barcha bolalar uchun", isCorrect: false },
          { id: "B", text: "Yo'q, hech qachon", isCorrect: false },
          {
            id: "C",
            text: "Cheklangan shaklda mavjud bo'lgan",
            isCorrect: true,
          },
          { id: "D", text: "Faqat internet maktablar", isCorrect: false },
        ],
      },
      {
        id: 11,
        text: "Qadimgi davrda ta'lim vositalari nima edi?",
        options: [
          { id: "A", text: "Radio va televizor", isCorrect: false },
          { id: "B", text: "Internet", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki hikoyalar, yozma matnlar",
            isCorrect: true,
          },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 12,
        text: "Qadimgi davr pedagogik jarayonida ustozlarning roli nima edi?",
        options: [
          { id: "A", text: "Faqat hukmdor", isCorrect: false },
          { id: "B", text: "Faqat yozuvchi", isCorrect: false },
          {
            id: "C",
            text: "Bolalarni axloqiy va ma'naviy jihatdan tarbiyalash",
            isCorrect: true,
          },
          { id: "D", text: "Faqat harbiy rahbar", isCorrect: false },
        ],
      },
      {
        id: 13,
        text: "Qadimgi davr pedagogik tizimida asosiy metod nima edi?",
        options: [
          { id: "A", text: "Internet orqali", isCorrect: false },
          { id: "B", text: "Televizion dasturlar orqali", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki va amaliy mashg'ulotlar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Video", isCorrect: false },
        ],
      },
      {
        id: 14,
        text: "Qadimgi davr pedagogik jarayoni qaysi asosda olib borilgan?",
        options: [
          { id: "A", text: "Faqat texnologik", isCorrect: false },
          { id: "B", text: "Faqat siyosiy", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va diniy qadriyatlar asosida",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 15,
        text: "Pedagogik fikrlarning rivojlanishiga qaysi omillar yordam bergan?",
        options: [
          { id: "A", text: "Faqat internet", isCorrect: false },
          { id: "B", text: "Faqat texnologiya", isCorrect: false },
          {
            id: "C",
            text: "Madaniyat, diniy an'analar va jamiyat tuzilishi",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 16,
        text: "Qadimgi davrda ta'lim kimlar uchun majburiy bo'lgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat askarlar", isCorrect: false },
          {
            id: "C",
            text: "Cheklangan guruhlar – yoshlar va ijtimoiy yetakchilar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat savdogarlar", isCorrect: false },
        ],
      },
      {
        id: 17,
        text: "Pedagogik jarayon qaysi shaklda bo'lgan?",
        options: [
          { id: "A", text: "Faqat yozma", isCorrect: false },
          { id: "B", text: "Faqat she'riy", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki va amaliy tajribalar orqali",
            isCorrect: true,
          },
          { id: "D", text: "Faqat ilmiy", isCorrect: false },
        ],
      },
      {
        id: 18,
        text: "Qadimgi davr pedagogik tizimi jamiyatga qanday foyda bergan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 19,
        text: "Qadimgi davr pedagogik jarayonida o'quvchilarga nimalar o'rgatilgan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va hayotiy ko'nikmalar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 20,
        text: "Eng qadimgi pedagogik fikrlarni qaysi manbalar saqlab qolgan?",
        options: [
          { id: "A", text: "Internet saytlar", isCorrect: false },
          { id: "B", text: "Radio dasturlar", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki rivoyatlar va yozma asarlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 21,
        text: "Pedagogik fikrlar rivojlanishida diniy rol qanday bo'lgan?",
        options: [
          { id: "A", text: "Hech qanday roli yo'q", isCorrect: false },
          { id: "B", text: "Faqat siyosiy rol", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy va ma'naviy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Faqat texnologik", isCorrect: false },
        ],
      },
      {
        id: 22,
        text: "Qadimgi davr pedagogik tizimida tarbiya kimlar tomonidan uzatilgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          {
            id: "C",
            text: "Ota-onalar va jamoa yetakchilari",
            isCorrect: true,
          },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 23,
        text: "Pedagogik jarayonda axloqiy qadriyatlarning ahamiyati nimada edi?",
        options: [
          { id: "A", text: "Texnologiyani rivojlantirish", isCorrect: false },
          { id: "B", text: "Siyosiy tizim yaratish", isCorrect: false },
          {
            id: "C",
            text: "Shaxsning ma'naviy va ijtimoiy rivojlanishi",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
      {
        id: 24,
        text: "Qadimgi davr pedagogik tizimida asosiy yo'nalishlar qaysi edi?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va diniy tarbiya",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 25,
        text: "Pedagogik fikrlar rivojlanishiga kimlar hissa qo'shgan?",
        options: [
          { id: "A", text: "Faqat hukmdorlar", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          {
            id: "C",
            text: "Ota-onalar, diniy yetakchilar va jamiyat a'zolari",
            isCorrect: true,
          },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 26,
        text: "Qadimgi davr pedagogik tizimi talabalarga qanday ta'lim bergan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Hayotiy, axloqiy va ma'naviy bilimlar",
            isCorrect: true,
          },
          { id: "D", text: "Musiqa", isCorrect: false },
        ],
      },
      {
        id: 27,
        text: "Pedagogik jarayon qanday metodlar orqali amalga oshgan?",
        options: [
          { id: "A", text: "Faqat internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          { id: "C", text: "Og'zaki va yozma shaklda", isCorrect: true },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 28,
        text: "Pedagogik fikrlarning rivojlanishida asosiy vosita nima edi?",
        options: [
          { id: "A", text: "Internet", isCorrect: false },
          { id: "B", text: "Radio", isCorrect: false },
          {
            id: "C",
            text: "Og'zaki rivoyatlar va yozma asarlar",
            isCorrect: true,
          },
          { id: "D", text: "Televizion dasturlar", isCorrect: false },
        ],
      },
      {
        id: 29,
        text: "Qadimgi davr pedagogik tizimida ustozlar kimlar edi?",
        options: [
          { id: "A", text: "Faqat hukmdor", isCorrect: false },
          { id: "B", text: "Faqat savdogarlar", isCorrect: false },
          {
            id: "C",
            text: "Jamiyatdagi bilimdon va axloqiy yetakchilar",
            isCorrect: true,
          },
          { id: "D", text: "Faqat askarlar", isCorrect: false },
        ],
      },
      {
        id: 30,
        text: "Eng qadimgi pedagogik tizim jamiyatga qanday foyda bergan?",
        options: [
          { id: "A", text: "Faqat texnologiya", isCorrect: false },
          { id: "B", text: "Faqat siyosat", isCorrect: false },
          {
            id: "C",
            text: "Axloqiy, ma'naviy va ijtimoiy qadriyatlarni shakllantirish",
            isCorrect: true,
          },
          { id: "D", text: "Musiqiy", isCorrect: false },
        ],
      },
    ],
  },
];
