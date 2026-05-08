const BASE_URL = import.meta.env.BASE_URL;

export const experiments = [
  {
    id: "zil-devresi",
    title: "Zil Devresi",
    description: "Malzemeleri doğru sıraya yerleştir. Doğru bağlantıda zil çalar.",
    components: [
      {
        id: "power",
        name: "Güç Kaynağı",
        image: `${BASE_URL}images/power.png`,
      },
      {
        id: "button",
        name: "Buton",
        image: `${BASE_URL}images/button.png`,
      },
      {
        id: "bell",
        name: "Zil",
        image: `${BASE_URL}images/bell.png`,
        sound: `${BASE_URL}sounds/bell.mp3`,
      },
    ],
    slots: [
      {
        id: "slot-1",
        label: "1. Boşluk",
      },
      {
        id: "slot-2",
        label: "2. Boşluk",
      },
      {
        id: "slot-3",
        label: "3. Boşluk",
      },
    ],
    correctOrder: ["power", "button", "bell"],
    successAction: "bell",
  },

  {
    id: "dimmer-lamba-devresi",
    title: "Dimmer Anahtar ile Lamba Kontrolü",
    description:
      "Devre elemanlarını doğru sırada bağla. Doğru bağlantıda lamba yanar ve dimmer ile parlaklığı ayarlayabilirsin.",
    components: [
      {
        id: "power",
        name: "Güç Kaynağı",
        image: `${BASE_URL}images/power.png`,
      },
      {
        id: "fuse",
        name: "Sigorta",
        image: `${BASE_URL}images/fuse.png`,
      },
      {
        id: "meter",
        name: "Elektrik Sayacı",
        image: `${BASE_URL}images/meter.png`,
      },
      {
        id: "dimmer",
        name: "Dimmer Anahtar",
        image: `${BASE_URL}images/dimmer.png`,
      },
      {
        id: "lamp",
        name: "Lamba",
        image: `${BASE_URL}images/lamp-off.png`,
        activeImage: `${BASE_URL}images/lamp-on.png`,
      },
    ],
    slots: [
      {
        id: "slot-1",
        label: "1. Boşluk",
      },
      {
        id: "slot-2",
        label: "2. Boşluk",
      },
      {
        id: "slot-3",
        label: "3. Boşluk",
      },
      {
        id: "slot-4",
        label: "4. Boşluk",
      },
      {
        id: "slot-5",
        label: "5. Boşluk",
      },
    ],
    correctOrder: ["power", "fuse", "meter", "dimmer", "lamp"],
    successAction: "lamp",
  },
];