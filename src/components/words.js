const words = [
  // Food/Fruits
  { english: "sweet potato", korean: "고구마", russian: "батат" },
  { english: "plum", korean: "자두", russian: "слива" },
  { english: "clam", korean: "조개", russian: "моллюск" },
  { english: "tomato", korean: "토마토", russian: "помидор" },
  { english: "grape", korean: "포도", russian: "виноград" },
  { english: "chili pepper", korean: "고추", russian: "острый перец" },
  { english: "coffee", korean: "커피", russian: "кофе" },
  { english: "stew", korean: "찌개", russian: "рагу" },
  { english: "snack", korean: "과자", russian: "закуска" },

  // Animals
  { english: "lion", korean: "사자", russian: "лев" },
  { english: "ant", korean: "개미", russian: "муравей" },
  { english: "elephant", korean: "코끼리", russian: "слон" },
  { english: "rabbit", korean: "토끼", russian: "кролик" },
  { english: "fox", korean: "여우", russian: "лиса" },
  { english: "bear", korean: "곰", russian: "медведь" },
  { english: "cat", korean: "고양이", russian: "кот" },
  { english: "pig", korean: "돼지", russian: "свинья" },
  { english: "mouse", korean: "쥐", russian: "мышь" },

  // Body Parts
  { english: "leg", korean: "다리", russian: "нога" },
  { english: "waist", korean: "허리", russian: "талия" },
  { english: "tail", korean: "꼬리", russian: "хвост" },
  { english: "waistband", korean: "허리띠", russian: "пояс" },
  { english: "ear", korean: "귀", russian: "ухо" },
  { english: "brain", korean: "뇌", russian: "мозг" },
  { english: "stomach", korean: "가위", russian: "живот" },

  // Clothing
  { english: "skirt", korean: "치마", russian: "юбка" },
  { english: "pants", korean: "바지", russian: "брюки" },
  { english: "shoes", korean: "구두", russian: "туфли" },
  { english: "sweater", korean: "스웨터", russian: "свитер" },

  // Nature
  { english: "sea", korean: "바다", russian: "море" },
  { english: "road", korean: "도로", russian: "дорога" },
  { english: "purple", korean: "보라", russian: "фиолетовый" },
  { english: "seed", korean: "씨", russian: "семя" },
  { english: "root", korean: "뿌리", russian: "корень" },
  { english: "palm tree", korean: "야자", russian: "пальма" },

  // Objects
  { english: "see-saw", korean: "시소", russian: "качели" },
  { english: "guitar", korean: "기타", russian: "гитара" },
  { english: "piano", korean: "피아노", russian: "пианино" },
  { english: "glass", korean: "유리", russian: "стекло" },
  { english: "tissue", korean: "휴지", russian: "салфетка" },
  { english: "airplane", korean: "비행기", russian: "самолёт" },
  { english: "train", korean: "기차", russian: "поезд" },
  { english: "picture", korean: "그림", russian: "картина" },
  { english: "chair", korean: "의자", russian: "стул" },
  { english: "trash", korean: "쓰레기", russian: "мусор" },

  // People
  { english: "dad", korean: "아빠", russian: "папа" },
  { english: "doctor", korean: "의사", russian: "врач" },
  { english: "waiter", korean: "웨이터", russian: "официант" },
  { english: "artist", korean: "화가", russian: "художник" },

  // Actions
  { english: "to float", korean: "뜨다", russian: "плавать" },
  { english: "to write", korean: "쓰다", russian: "писать" },
  { english: "cooking", korean: "요리", russian: "готовка" },
  { english: "shower", korean: "샤워", russian: "душ" },

  // Miscellaneous
  { english: "what", korean: "뭐", russian: "что" },
  { english: "why", korean: "왜", russian: "почему" },
  { english: "Australia", korean: "호주", russian: "Австралия" },
  { english: "fork", korean: "포크", russian: "вилка" },
  { english: "ski", korean: "스키", russian: "лыжи" },
  { english: "baseball", korean: "야구", russian: "бейсбол" },
  { english: "nose", korean: "코", russian: "нос" },
  { english: "sign", korean: "표", russian: "знак" },
  { english: "tongue", korean: "혀", russian: "язык" }
];

export default words;


const flagURL = 'data:image/png;base64,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';
  