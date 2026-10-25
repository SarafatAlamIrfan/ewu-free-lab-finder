// East West University - Lab Class Schedule & Practice Hours (Fall-2026)
// Complete schedule for all 12 lab rooms:
// 2nd Floor: 215, 224, 227
// 4th Floor: 431, 434, 435, 436, 437
// 5th Floor (ICS Labs): 529, 530, 533, 534

const LAB_ROOMS_DATA = [
  {
    id: "room215",
    roomNumber: "215",
    name: "General Purpose Programming Lab",
    shortName: "GPP Lab 215",
    floor: "2nd Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:30", end: "12:00", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "11:50", end: "13:50", course: "CSE475 Lab (9)", faculty: "SADDAMPT", section: "9" },
        { start: "13:30", end: "15:30", course: "CSE479 Lab (4)", faculty: "NAHID", section: "4" },
        { start: "15:10", end: "17:10", course: "CSE475 Lab (5)", faculty: "DTBI", section: "5" },
        { start: "16:50", end: "18:50", course: "CSE475 Lab (8)", faculty: "KMMU", section: "8" }
      ],
      Monday: [
        { start: "08:00", end: "10:00", course: "CSE477 Lab (4)", faculty: "SKL", section: "4" },
        { start: "10:10", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:00", course: "CSE345 (2)", faculty: "ALI", section: "2" },
        { start: "15:10", end: "18:10", course: "CSE110 Lab (1)", faculty: "TBA", section: "1" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "ICE275 Lab (1)", faculty: "PMTI", section: "1" },
        { start: "10:10", end: "12:10", course: "CSE479 Lab (1)", faculty: "DSU", section: "1" },
        { start: "12:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE475 Lab (3)", faculty: "MRAR", section: "3" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "ICE245 Lab (1)", faculty: "DMZM", section: "1" }
      ],
      Wednesday: [
        { start: "08:30", end: "09:50", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "10:10", end: "13:10", course: "CSE406", faculty: "DRUI", section: "6" },
        { start: "13:30", end: "16:30", course: "CSE110 Lab (2)", faculty: "MKR", section: "2" },
        { start: "16:50", end: "19:50", course: "CSE246 Lab (8)", faculty: "KMSK", section: "8" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "CSE325 Lab (1)", faculty: "KRI", section: "1" },
        { start: "10:10", end: "12:10", course: "CSE475 Lab (4)", faculty: "DTBI", section: "4" },
        { start: "12:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE475 Lab (2)", faculty: "DRUI", section: "2" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "CSE479 Lab (3)", faculty: "ARMAN", section: "3" }
      ],
      Friday: [],
      Saturday: []
    }
  },
  {
    id: "room224",
    roomNumber: "224",
    name: "Cloud Computing Lab",
    shortName: "Cloud Lab 224",
    floor: "2nd Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "10:10", end: "13:10", course: "CSE246 Lab (2)", faculty: "DAKP", section: "2" },
        { start: "13:30", end: "15:30", course: "CSE325 Lab (8)", faculty: "AUR", section: "8" },
        { start: "16:50", end: "18:50", course: "CSE246 Lab (11)", faculty: "DMZM", section: "11" }
      ],
      Monday: [
        { start: "08:00", end: "10:00", course: "CSE303 Lab (1)", faculty: "DMIM", section: "1" },
        { start: "13:30", end: "15:30", course: "CSE438 Lab (1)", faculty: "KMSK", section: "1" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "CSE303 Lab (4)", faculty: "NAFIS", section: "4" },
        { start: "10:10", end: "12:10", course: "CSE475 Lab / ICE478 Lab (1)", faculty: "DRUI", section: "1" },
        { start: "15:10", end: "17:10", course: "CSE325 Lab (3)", faculty: "MOON", section: "3" },
        { start: "17:15", end: "18:30", course: "CSE101 (3)", faculty: "AUR", section: "3" }
      ],
      Wednesday: [
        { start: "10:10", end: "12:10", course: "ICE107 Lab (1)", faculty: "DAKP", section: "1" },
        { start: "13:30", end: "15:30", course: "CSE438 Lab (3)", faculty: "KMSK", section: "3" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "CSE438 Lab (2)", faculty: "MAMRD", section: "2" },
        { start: "10:10", end: "13:10", course: "CSE246 Lab (1)", faculty: "TJ", section: "1" },
        { start: "13:30", end: "15:30", course: "CSE207 Lab (3)", faculty: "DAKP", section: "3" }
      ],
      Friday: [],
      Saturday: []
    }
  },
  {
    id: "room227",
    roomNumber: "227",
    name: "Competitive Programming Lab",
    shortName: "CP Lab 227",
    floor: "2nd Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "11:00", course: "CSE302 Lab (8)", faculty: "SKL (Sanzana Karim Lora)", section: "8" },
        { start: "11:50", end: "13:50", course: "CSE303 Lab (7)", faculty: "TTB (Tahsin Tariq Banna)", section: "7" },
        { start: "15:10", end: "18:10", course: "CSE302 Lab (13)", faculty: "TAUFIQ (Md. Taufiq Khan)", section: "13" }
      ],
      Monday: [
        { start: "08:30", end: "10:00", course: "CSE7104 (1)", faculty: "NAFIS (Dr. Nafis Sadeq)", section: "1" },
        { start: "10:10", end: "12:10", course: "CSE420 Lab (1)", faculty: "TBA", section: "1" },
        { start: "13:30", end: "15:30", course: "CSE108 Lab (1)", faculty: "RIFAT (Md. Asif Khan Rifat)", section: "1" },
        { start: "16:50", end: "18:50", course: "CSE200 (8)", faculty: "MYMA (Muhammed Yaseen Morshed Adib)", section: "8" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "CSE477 Lab (6)", faculty: "AHASAN (Md. Ahasanul Alam)", section: "6" },
        { start: "10:10", end: "12:10", course: "CSE405 Lab (7)", faculty: "MAHCY (Md. Ashraful Haider Chowdhury)", section: "7" },
        { start: "13:30", end: "15:30", course: "CSE412 Lab (3)", faculty: "DHJ (Dr. Hosney Jahan)", section: "3" },
        { start: "16:50", end: "18:50", course: "CSE366 Lab (8)", faculty: "NAHID (Nahid Hasan)", section: "8" }
      ],
      Wednesday: [
        { start: "08:30", end: "10:00", course: "CSE7104 (1)", faculty: "NAFIS (Dr. Nafis Sadeq)", section: "1" },
        { start: "13:30", end: "16:30", course: "CSE246 Lab (13)", faculty: "TBA", section: "13" },
        { start: "16:50", end: "18:50", course: "ICE103 Lab (2)", faculty: "TBA", section: "2" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "CSE325 Lab (2)", faculty: "NISHAT (Ms. Nishat Tasnim)", section: "2" },
        { start: "10:10", end: "12:10", course: "CSE347 Lab (2)", faculty: "MASUDUR (Md. Masudur Rahman)", section: "2" },
        { start: "13:30", end: "15:30", course: "CSE475 Lab (6)", faculty: "NAFIS (Dr. Nafis Sadeq)", section: "6" },
        { start: "16:50", end: "18:50", course: "CSE207 Lab (5)", faculty: "ATIQ (Dr. Md. Atiqur Rahman)", section: "5" }
      ],
      Friday: [],
      Saturday: []
    }
  },
  {
    id: "room431",
    roomNumber: "431",
    name: "Cloud Computing Lab",
    shortName: "Cloud Lab 431",
    floor: "4th Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "11:00", course: "CSE103 Lab (9)", faculty: "KMSK", section: "9" },
        { start: "11:50", end: "13:20", course: "CSE103 (7)", faculty: "TBA", section: "7" },
        { start: "13:30", end: "15:30", course: "CSE303 Lab (6)", faculty: "SAJID", section: "6" },
        { start: "16:50", end: "18:50", course: "CSE325 Lab (10)", faculty: "MYMA", section: "10" }
      ],
      Monday: [
        { start: "08:30", end: "10:10", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "10:10", end: "12:10", course: "CSE347 Lab (5)", faculty: "ARMAN", section: "5" },
        { start: "12:20", end: "13:00", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE325 Lab (12)", faculty: "DHMAI", section: "12" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "19:50", course: "CSE103 Lab (3)", faculty: "DAHF", section: "3" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "CSE347 Lab (1)", faculty: "DHJ", section: "1" },
        { start: "10:10", end: "12:10", course: "CSE479 Lab (1)", faculty: "DSU", section: "1" },
        { start: "12:20", end: "13:00", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE200 (7)", faculty: "MAMRD", section: "7" },
        { start: "15:31", end: "16:49", course: "CSE101 (5)", faculty: "TZE", section: "5" },
        { start: "16:50", end: "19:50", course: "CSE103 Lab (8)", faculty: "MIR", section: "8" }
      ],
      Wednesday: [
        { start: "08:00", end: "10:00", course: "CSE303 Lab (2)", faculty: "DMIM", section: "2" },
        { start: "10:10", end: "13:10", course: "CSE302 Lab (10)", faculty: "ANTU", section: "10" },
        { start: "13:30", end: "15:30", course: "CSE101 (10)", faculty: "ARSA", section: "10" },
        { start: "15:10", end: "17:10", course: "CSE325 Lab (7)", faculty: "MOON", section: "7" }
      ],
      Thursday: [
        { start: "08:00", end: "11:00", course: "CSE110 Lab (5) / ICE107 Lab (5)", faculty: "SABBIR", section: "5" },
        { start: "11:10", end: "13:00", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE445 Lab (1)", faculty: "MRAR", section: "1" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "CSE438 Lab (4)", faculty: "TTB", section: "4" }
      ],
      Friday: [
        { start: "14:30", end: "17:30", course: "DSA5004 (1)", faculty: "SAJIB", section: "1" }
      ],
      Saturday: [
        { start: "09:00", end: "12:00", course: "DSA5021 (1)", faculty: "MOYAZZEM", section: "1" }
      ]
    }
  },
  {
    id: "room434",
    roomNumber: "434",
    name: "Big Data Analytics Lab",
    shortName: "Big Data Lab 434",
    floor: "4th Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "10:00", course: "CSE 101 (21)", faculty: "AMITM", section: "21" },
        { start: "10:10", end: "12:10", course: "CSE 366 LAB (7)", faculty: "NAHID", section: "7" },
        { start: "13:30", end: "15:30", course: "CSE 488 LAB (1)", faculty: "DMRH", section: "1" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "CSE 350 LAB (2)", faculty: "NAHID", section: "2" }
      ],
      Monday: [
        { start: "08:00", end: "10:00", course: "CSE 200 (11)", faculty: "RAFICHOW", section: "11" },
        { start: "10:10", end: "12:10", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "ICE 207 LAB (1)", faculty: "MMLI", section: "1" }
      ],
      Tuesday: [
        { start: "08:00", end: "11:00", course: "CSE 246 LAB (14)", faculty: "FHUQ", section: "14" },
        { start: "11:10", end: "12:30", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE 207 LAB (11)", faculty: "MYMA", section: "11" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "CSE 477 LAB (1)", faculty: "ATIQ", section: "1" }
      ],
      Wednesday: [
        { start: "08:00", end: "10:00", course: "CSE 207 LAB (13)", faculty: "RAFICHOW", section: "13" },
        { start: "10:10", end: "12:10", course: "CSE 479 LAB (2)", faculty: "ARMAN", section: "2" },
        { start: "13:30", end: "15:30", course: "CSE 200 LAB (5)", faculty: "RIFAT", section: "5" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "19:50", course: "CSE 246 LAB (14)", faculty: "ARSA", section: "14" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "CSE 325 LAB (11)", faculty: "PMTI", section: "11" },
        { start: "10:10", end: "11:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "11:50", end: "13:50", course: "CSE 325 LAB (6)", faculty: "MOON", section: "6" },
        { start: "15:10", end: "18:10", course: "CSE 103 LAB (10)", faculty: "MAMRD", section: "10" }
      ],
      Friday: [],
      Saturday: [
        { start: "09:00", end: "12:00", course: "DSA 5005 (1)", faculty: "REZAUL", section: "1" },
        { start: "14:30", end: "17:30", course: "DSA 5001 (1)", faculty: "DSR", section: "1" }
      ]
    }
  },
  {
    id: "room435",
    roomNumber: "435",
    name: "General Purpose Programming Lab",
    shortName: "GPP / VR Lab 435",
    floor: "4th Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "10:00", course: "CSE366 Lab (4)", faculty: "IMRAN", section: "4" },
        { start: "10:10", end: "12:10", course: "CSE464 Lab (1)", faculty: "ANTU", section: "1" },
        { start: "13:30", end: "15:30", course: "CSE207 Lab (9)", faculty: "RIFAT", section: "9" },
        { start: "16:50", end: "18:50", course: "CSE325 Lab (9)", faculty: "MRAR", section: "9" }
      ],
      Monday: [
        { start: "13:30", end: "15:30", course: "CSE200 (9)", faculty: "TAUFIQ", section: "9" },
        { start: "16:50", end: "19:50", course: "CSE246 Lab (7)", faculty: "PC", section: "7" }
      ],
      Tuesday: [
        { start: "08:00", end: "11:00", course: "CSE110 Lab (6) / ICE107 Lab (6)", faculty: "PROMA", section: "6" },
        { start: "11:50", end: "13:50", course: "CSE303 Lab (8)", faculty: "TTB", section: "8" },
        { start: "15:10", end: "16:40", course: "CSE101 (7)", faculty: "AQUIB", section: "7" },
        { start: "16:50", end: "18:50", course: "CSE325 Lab (4)", faculty: "RIFAT / KRI", section: "4" }
      ],
      Wednesday: [
        { start: "10:10", end: "13:10", course: "CSE246 Lab (6)", faculty: "RIFAT", section: "6" },
        { start: "15:10", end: "17:10", course: "CSE207 Lab (10)", faculty: "MIR", section: "10" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "CSE207 Lab (6)", faculty: "AASR", section: "6" },
        { start: "10:10", end: "12:10", course: "CSE207 Lab (4)", faculty: "ATIQ", section: "4" },
        { start: "13:30", end: "15:30", course: "CSE438 Lab (5)", faculty: "SKL", section: "5" },
        { start: "16:50", end: "18:50", course: "ICE322 Lab (1)", faculty: "KHALID", section: "1" }
      ],
      Friday: [
        { start: "09:00", end: "12:00", course: "DSA5007 (1)", faculty: "DMAHK", section: "1" },
        { start: "14:30", end: "17:30", course: "DSA5043 (1)", faculty: "SAH", section: "1" }
      ],
      Saturday: [
        { start: "09:00", end: "12:00", course: "DSA5002 (1)", faculty: "DPCS", section: "1" },
        { start: "14:30", end: "17:30", course: "DSA5006 (1)", faculty: "REZAUL", section: "1" }
      ]
    }
  },
  {
    id: "room436",
    roomNumber: "436",
    name: "Competitive Programming Lab",
    shortName: "CP / HCI Lab 436",
    floor: "4th Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "11:00", course: "CSE103 Lab (4)", faculty: "DAHF", section: "4" },
        { start: "11:50", end: "13:20", course: "CSE7104 (2)", faculty: "NAFIS", section: "2" },
        { start: "13:30", end: "15:30", course: "CSE366 Lab (6)", faculty: "MIR", section: "6" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "CSE108 Lab (3)", faculty: "SCD", section: "3" }
      ],
      Monday: [
        { start: "08:00", end: "10:00", course: "CSE200 (12)", faculty: "TOUFIQ", section: "12" },
        { start: "10:10", end: "12:10", course: "CSE302 Lab", faculty: "TBA" },
        { start: "12:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE200 (10)", faculty: "RAFICHOW", section: "10" },
        { start: "15:40", end: "16:40", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "16:50", end: "18:50", course: "CSE108 Lab (4)", faculty: "TBA", section: "4" }
      ],
      Tuesday: [
        { start: "08:00", end: "11:00", course: "CSE246 Lab (9)", faculty: "MAMRD", section: "9" },
        { start: "11:50", end: "13:20", course: "CSE7104 (2)", faculty: "NAFIS", section: "2" },
        { start: "13:30", end: "16:30", course: "CSE110 Lab (4)", faculty: "FZRN", section: "4" }
      ],
      Wednesday: [
        { start: "08:30", end: "10:00", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "10:10", end: "12:10", course: "CSE200 (19)", faculty: "TBA", section: "19" },
        { start: "12:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "16:30", course: "CSE103 Lab (11)", faculty: "DHMAI", section: "11" },
        { start: "16:50", end: "18:50", course: "CSE207 Lab (12)", faculty: "MMLI", section: "12" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "ICE107 Lab (2)", faculty: "TBA", section: "2" },
        { start: "10:10", end: "12:10", course: "CSE475 Lab (4)", faculty: "DTBI", section: "4" },
        { start: "12:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE347 Lab (6)", faculty: "SABBIR", section: "6" },
        { start: "16:50", end: "18:50", course: "CSE103 Lab (5)", faculty: "TBA", section: "5" }
      ],
      Friday: [],
      Saturday: []
    }
  },
  {
    id: "room437",
    roomNumber: "437",
    name: "Cyber Security Lab",
    shortName: "Security Lab 437",
    floor: "4th Floor",
    building: "Main Academic Building",
    type: "Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "11:00", course: "CSE246 Lab (12)", faculty: "DHMAI", section: "12" },
        { start: "11:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:30", course: "CSE303 Lab (5)", faculty: "MAMRD", section: "5" },
        { start: "15:31", end: "18:31", course: "CSE302 Lab (11) / ICE305 Lab", faculty: "ANTU", section: "11" }
      ],
      Monday: [
        { start: "08:00", end: "11:00", course: "CSE302 Lab (16) / ICE305 Lab", faculty: "SDNA", section: "16" },
        { start: "11:20", end: "13:20", course: "Practice Hour", faculty: "Open Practice", isPractice: true },
        { start: "13:30", end: "15:00", course: "CSE325 (10)", faculty: "NYMA", section: "10" },
        { start: "15:10", end: "17:10", course: "CSE200 (13)", faculty: "TBA", section: "13" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "CSE489 Lab (1)", faculty: "MKR", section: "1" },
        { start: "10:10", end: "11:40", course: "CSE488 (1)", faculty: "DMRH", section: "1" },
        { start: "11:50", end: "14:50", course: "CSE110 Lab (7)", faculty: "PROMA", section: "7" },
        { start: "15:10", end: "17:10", course: "CSE303 Lab (3)", faculty: "DAHF", section: "3" }
      ],
      Wednesday: [
        { start: "08:30", end: "10:00", course: "CSE102 (2)", faculty: "NANCY", section: "2" },
        { start: "10:30", end: "16:30", course: "Practice Hour", faculty: "Open Practice", isPractice: true }
      ],
      Thursday: [
        { start: "08:30", end: "11:30", course: "CSE103 Lab (2)", faculty: "DMIM", section: "2" },
        { start: "13:30", end: "15:30", course: "CSE200 (6)", faculty: "SJA", section: "6" },
        { start: "16:50", end: "18:50", course: "CSE489 Lab (2)", faculty: "SCD", section: "2" }
      ],
      Friday: [
        { start: "09:00", end: "12:00", course: "DSA5063 (1)", faculty: "DNZL", section: "1" },
        { start: "15:00", end: "18:00", course: "DSA5011 (1)", faculty: "DPCS", section: "1" }
      ],
      Saturday: [
        { start: "14:30", end: "17:30", course: "DSA5045 (1)", faculty: "MND", section: "1" }
      ]
    }
  },
  {
    id: "room529",
    roomNumber: "529",
    name: "ICSLAB # 1",
    shortName: "ICS Lab 529",
    floor: "5th Floor",
    building: "ICS Building",
    type: "Integrated Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "10:00", course: "DSA101 Lab (1)", faculty: "FMAR", section: "1" },
        { start: "10:10", end: "11:40", course: "MIS7305 (1)", faculty: "ASM", section: "1" },
        { start: "11:50", end: "13:20", course: "MIS7305 (5)", faculty: "BHE", section: "5" },
        { start: "13:30", end: "15:00", course: "CE7227 Lab (3)", faculty: "JTH", section: "3" },
        { start: "16:50", end: "18:20", course: "EEE433 Lab (1)", faculty: "FMA", section: "1" }
      ],
      Monday: [
        { start: "08:00", end: "10:00", course: "PHS405 (1)", faculty: "AMINULI", section: "1" },
        { start: "10:10", end: "11:40", course: "CSE101 (1)", faculty: "MAR", section: "1" },
        { start: "11:50", end: "13:20", course: "MIS7101 (2)", faculty: "BHE", section: "2" },
        { start: "13:30", end: "15:00", course: "CE7227 Lab (1)", faculty: "DMKT", section: "1" },
        { start: "16:50", end: "18:20", course: "EEE304 Lab (1)", faculty: "DRAH", section: "1" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "EEE306 Lab (2)", faculty: "MMAI", section: "2" },
        { start: "10:10", end: "11:40", course: "EEE304 Lab (2)", faculty: "SMNP", section: "2" },
        { start: "11:50", end: "13:20", course: "MIS7305 (6)", faculty: "BHE", section: "6" },
        { start: "15:10", end: "16:40", course: "MIS7406 (1)", faculty: "MUNIRA", section: "1" },
        { start: "16:50", end: "18:20", course: "MIS7101 (17)", faculty: "ANMDS", section: "17" }
      ],
      Wednesday: [
        { start: "08:00", end: "10:00", course: "CS295 Lab (2)", faculty: "MAIS", section: "2" },
        { start: "10:10", end: "11:40", course: "PHS404 (1) / PHS7404 (1)", faculty: "AMINULI", section: "1" },
        { start: "11:50", end: "13:20", course: "CSE207 (1)", faculty: "MI", section: "1" },
        { start: "13:30", end: "15:00", course: "MIS7101 (3)", faculty: "BHE", section: "3" },
        { start: "15:10", end: "16:40", course: "MIS7305 (7)", faculty: "MUNIRA", section: "7" },
        { start: "16:50", end: "18:20", course: "MIS7305 (8)", faculty: "MUNIRA", section: "8" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "MATH411 Lab (1)", faculty: "APURBO", section: "1" },
        { start: "10:10", end: "11:40", course: "EEE204 Lab (1)", faculty: "RZS", section: "1" },
        { start: "13:30", end: "15:00", course: "GEB204 Lab (2)", faculty: "MANI", section: "2" },
        { start: "16:50", end: "18:20", course: "MIS7101 (4)", faculty: "MUNIRA", section: "4" }
      ],
      Friday: [],
      Saturday: []
    }
  },
  {
    id: "room530",
    roomNumber: "530",
    name: "ICSLAB # 2",
    shortName: "ICS Lab 530",
    floor: "5th Floor",
    building: "ICS Building",
    type: "Integrated Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "10:00", course: "EEE301 Lab (2)", faculty: "SMNP", section: "2" },
        { start: "10:10", end: "11:40", course: "MIS7421 (1)", faculty: "MARN", section: "1" },
        { start: "11:50", end: "13:20", course: "MIS7426 (1)", faculty: "TBA", section: "1" },
        { start: "13:30", end: "15:00", course: "CE7227 Lab (2)", faculty: "ALHAZ", section: "2" },
        { start: "16:50", end: "18:20", course: "MIS7101 (15)", faculty: "DNJN", section: "15" }
      ],
      Monday: [
        { start: "08:00", end: "10:00", course: "CSE101 (20)", faculty: "AMITM", section: "20" },
        { start: "10:10", end: "11:40", course: "MIS7305 (3)", faculty: "MARN", section: "3" },
        { start: "13:30", end: "15:00", course: "MATH478 (1)", faculty: "MAIS", section: "1" },
        { start: "15:10", end: "16:40", course: "MIS7101 (12)", faculty: "TBA", section: "12" },
        { start: "16:50", end: "18:20", course: "EEE436 (1)", faculty: "FMA", section: "1" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "EEE204 Lab (3)", faculty: "TBA", section: "3" },
        { start: "10:10", end: "11:40", course: "MIS7421 (1)", faculty: "MARN", section: "1" },
        { start: "11:50", end: "13:20", course: "MIS7426 (1)", faculty: "TBA", section: "1" },
        { start: "13:30", end: "15:00", course: "MIS7101 (1)", faculty: "MARN", section: "1" },
        { start: "15:10", end: "16:40", course: "CSE101 (9)", faculty: "SGA", section: "9" },
        { start: "16:50", end: "18:20", course: "CSE101 (8)", faculty: "AQUIB", section: "8" }
      ],
      Wednesday: [
        { start: "08:00", end: "10:00", course: "EEE204 Lab (2)", faculty: "RZS", section: "2" },
        { start: "10:10", end: "11:40", course: "CE7102 (1)", faculty: "TAJWAR", section: "1" },
        { start: "11:50", end: "13:20", course: "CE102 (1)", faculty: "TAJWAR", section: "1" },
        { start: "13:30", end: "15:00", course: "MATH478 (1)", faculty: "MAIS", section: "1" },
        { start: "15:10", end: "16:40", course: "MIS7305 (9)", faculty: "DMAHM", section: "9" },
        { start: "16:50", end: "18:20", course: "MIS7305 (10)", faculty: "DMAHM", section: "10" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "MATH212 Lab (1)", faculty: "AKMN", section: "1" },
        { start: "10:10", end: "11:40", course: "CS191 Lab (1)", faculty: "TARIQUL", section: "1" },
        { start: "13:30", end: "15:00", course: "CS295 Lab (1)", faculty: "DPCS", section: "1" },
        { start: "16:50", end: "18:20", course: "CE7102 (2) / CE102 (20)", faculty: "MNZ", section: "2/20" }
      ],
      Friday: [],
      Saturday: []
    }
  },
  {
    id: "room533",
    roomNumber: "533",
    name: "ICSLAB # 3",
    shortName: "ICS Lab 533",
    floor: "5th Floor",
    building: "ICS Building",
    type: "Integrated Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "10:00", course: "CS295 Lab (3)", faculty: "SDSS", section: "3" },
        { start: "10:10", end: "11:40", course: "SOC7206 (1)", faculty: "RPN", section: "1" },
        { start: "11:50", end: "13:20", course: "CSE475 (7)", faculty: "SAJID", section: "7" },
        { start: "13:30", end: "15:00", course: "EEE105 Lab (3)", faculty: "FMA", section: "3" },
        { start: "16:50", end: "18:20", course: "EEE105 Lab (2)", faculty: "RZS", section: "2" }
      ],
      Monday: [
        { start: "10:10", end: "11:40", course: "MIS7404 (10)", faculty: "MMRN", section: "10" },
        { start: "11:50", end: "13:20", course: "EHS7406 (1) / EHS406 (1)", faculty: "KNN", section: "1" },
        { start: "13:30", end: "15:00", course: "MIS7305 (2)", faculty: "MMRN", section: "2" },
        { start: "15:10", end: "16:40", course: "CS397 (2)", faculty: "SDSS", section: "2" },
        { start: "16:50", end: "18:20", course: "CSE101 (18)", faculty: "TBA", section: "18" }
      ],
      Tuesday: [
        { start: "10:10", end: "11:40", course: "EEE306 (1)", faculty: "MMAI", section: "1" },
        { start: "15:10", end: "16:40", course: "MIS7101 (16)", faculty: "ANMDS", section: "16" },
        { start: "16:50", end: "18:20", course: "CSE101 (6)", faculty: "TZE", section: "6" }
      ],
      Wednesday: [
        { start: "08:00", end: "10:00", course: "CS191 Lab (2)", faculty: "TARIQUL", section: "2" },
        { start: "10:10", end: "11:40", course: "MIS7404 (1)", faculty: "MMRN", section: "1" },
        { start: "11:50", end: "13:20", course: "EHS7406 (1) / EHS406 (1)", faculty: "KNN", section: "1" },
        { start: "13:30", end: "15:00", course: "EEE105 (3)", faculty: "FMA", section: "3" },
        { start: "15:10", end: "16:40", course: "CS397 (2)", faculty: "SDSS", section: "2" },
        { start: "16:50", end: "18:20", course: "MIS7101 (13)", faculty: "TBA", section: "13" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "EEE306 Lab (1)", faculty: "MMAI", section: "1" },
        { start: "10:10", end: "11:40", course: "CSE438 Lab (6)", faculty: "TTB", section: "6" },
        { start: "13:30", end: "15:00", course: "GEB204 Lab (1)", faculty: "DMHH", section: "1" },
        { start: "16:50", end: "18:20", course: "CSE101 (17)", faculty: "TBA", section: "17" }
      ],
      Friday: [],
      Saturday: [
        { start: "11:50", end: "13:20", course: "GEB406 (2)", faculty: "DMMB", section: "2" },
        { start: "15:10", end: "16:40", course: "MIS9527 (1)", faculty: "ASM", section: "1" }
      ]
    }
  },
  {
    id: "room534",
    roomNumber: "534",
    name: "ICSLAB # 4",
    shortName: "ICS Lab 534",
    floor: "5th Floor",
    building: "ICS Building",
    type: "Integrated Computer Science Lab",
    capacity: 40,
    schedule: {
      Sunday: [
        { start: "08:00", end: "10:00", course: "CS191 Lab (3)", faculty: "TARIQUL", section: "3" },
        { start: "10:10", end: "11:40", course: "MIS7101 (8)", faculty: "TBA", section: "8" },
        { start: "11:50", end: "13:20", course: "SOC7101 (6)", faculty: "SBZ", section: "6" },
        { start: "13:30", end: "15:00", course: "EEE204 (2)", faculty: "RZS", section: "2" },
        { start: "15:10", end: "16:40", course: "MIS7401 (1)", faculty: "MMRN", section: "1" },
        { start: "16:50", end: "18:20", course: "CSE200 (4)", faculty: "MAHCY", section: "4" }
      ],
      Monday: [
        { start: "10:10", end: "11:40", course: "HRM7417 (1)", faculty: "ADAS", section: "1" },
        { start: "11:50", end: "13:20", course: "SOC7206 (2)", faculty: "SBZ", section: "2" },
        { start: "13:30", end: "15:00", course: "MIS7305 (4)", faculty: "MARN", section: "4" },
        { start: "15:10", end: "16:40", course: "MIS7415 (1)", faculty: "ASM", section: "1" },
        { start: "16:50", end: "18:20", course: "MIS7101 (7)", faculty: "TBA", section: "7" }
      ],
      Tuesday: [
        { start: "08:00", end: "10:00", course: "CSE200 (3) / CS397 Lab (1)", faculty: "TBA / SDSS", section: "3/1" },
        { start: "10:10", end: "11:40", course: "EEE204 (1)", faculty: "RZS", section: "1" },
        { start: "11:50", end: "13:20", course: "GEN7203 (2)", faculty: "MRWS", section: "2" },
        { start: "13:30", end: "15:00", course: "MIS7101 (5)", faculty: "TBA", section: "5" },
        { start: "15:10", end: "16:40", course: "MIS7401 (1)", faculty: "MMRN", section: "1" }
      ],
      Wednesday: [
        { start: "08:00", end: "10:00", course: "CE412 (1)", faculty: "ALHAZ", section: "1" },
        { start: "10:10", end: "11:40", course: "HRM7417 (1)", faculty: "ADAS", section: "1" },
        { start: "11:50", end: "13:20", course: "SOC7206 (2)", faculty: "SBZ", section: "2" },
        { start: "13:30", end: "15:00", course: "GEB406 (1)", faculty: "DMHH", section: "1" },
        { start: "16:50", end: "18:20", course: "CSE101 (11)", faculty: "TBA-CSE06", section: "11" }
      ],
      Thursday: [
        { start: "08:00", end: "10:00", course: "CSE110 Lab (8)", faculty: "SUDDIN", section: "8" },
        { start: "10:10", end: "11:40", course: "PPHS208 (1) / PPHS7408 (1)", faculty: "MBH", section: "1" },
        { start: "11:50", end: "13:20", course: "CSE477 Lab (5)", faculty: "SADDAMPT", section: "5" },
        { start: "15:10", end: "16:40", course: "MIS7406 (1)", faculty: "MUNIRA", section: "1" },
        { start: "16:50", end: "18:20", course: "CSE102 (30)", faculty: "TBA", section: "30" }
      ],
      Friday: [],
      Saturday: []
    }
  }
];

// Helper Time Slots definitions
const STANDARD_TIME_SLOTS = [
  { id: "slot1", label: "08:00 AM - 10:00 AM", start: "08:00", end: "10:00", startMin: 480, endMin: 600 },
  { id: "slot2", label: "10:10 AM - 12:10 PM", start: "10:10", end: "12:10", startMin: 610, endMin: 730 },
  { id: "slot3", label: "12:20 PM - 01:20 PM", start: "12:20", end: "13:20", startMin: 740, endMin: 800 },
  { id: "slot4", label: "01:30 PM - 03:30 PM", start: "13:30", end: "15:30", startMin: 810, endMin: 930 },
  { id: "slot5", label: "03:40 PM - 04:40 PM", start: "15:40", end: "16:40", startMin: 940, endMin: 1000 },
  { id: "slot6", label: "04:50 PM - 06:50 PM", start: "16:50", end: "18:50", startMin: 1010, endMin: 1130 },
  { id: "slot7", label: "06:50 PM - 08:00 PM", start: "18:50", end: "20:00", startMin: 1130, endMin: 1200 }
];

const ICS_TIME_SLOTS = [
  { id: "ics1", label: "08:00 AM - 10:00 AM", start: "08:00", end: "10:00", startMin: 480, endMin: 600 },
  { id: "ics2", label: "10:10 AM - 11:40 AM", start: "10:10", end: "11:40", startMin: 610, endMin: 700 },
  { id: "ics3", label: "11:50 AM - 01:20 PM", start: "11:50", end: "13:20", startMin: 710, endMin: 800 },
  { id: "ics4", label: "01:30 PM - 03:00 PM", start: "13:30", end: "15:00", startMin: 810, endMin: 900 },
  { id: "ics5", label: "03:10 PM - 04:40 PM", start: "15:10", end: "16:40", startMin: 910, endMin: 1000 },
  { id: "ics6", label: "04:50 PM - 06:20 PM", start: "16:50", end: "18:20", startMin: 1010, endMin: 1100 },
  { id: "ics7", label: "06:30 PM - 08:00 PM", start: "18:30", end: "20:00", startMin: 1110, endMin: 1200 }
];

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.trim().split(":");
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function minutesToTime12(minutes) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const mStr = m < 10 ? "0" + m : m;
  const hStr = h12 < 10 ? "0" + h12 : h12;
  return `${hStr}:${mStr} ${period}`;
}
