export const experiments = [
  {
    id: "zil-devresi",
    title: "Zil Devresi",
    description: "Malzemeleri doğru sıraya yerleştir. Doğru bağlantıda zil çalar.",
    components: [
      {
        id: "power",
        name: "Güç Kaynağı",
        image: "/images/power.png",
      },
      {
        id: "button",
        name: "Buton",
        image: "/images/button.png",
      },
      {
        id: "bell",
        name: "Zil",
        image: "/images/bell.png",
        sound: "/sounds/bell.mp3",
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
        image: "/images/power.png",
      },
      {
        id: "fuse",
        name: "Sigorta",
        image: "/images/fuse.png",
      },
      {
        id: "meter",
        name: "Elektrik Sayacı",
        image: "/images/meter.png",
      },
      {
        id: "dimmer",
        name: "Dimmer Anahtar",
        image: "/images/dimmer.png",
      },
      {
        id: "lamp",
        name: "Lamba",
        image: "/images/lamp-off.png",
        activeImage: "/images/lamp-on.png",
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