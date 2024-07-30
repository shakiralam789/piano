function allSongs(speed = 300, baseCord = 3) {
  let songs = [
    {
      name: "Für Elise",
      notes: [
        { octave: `c${baseCord + 1}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord + 1}_d_sharp`, duration: speed, letter: "D#" },
        { octave: `c${baseCord + 1}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord + 1}_d_sharp`, duration: speed, letter: "D#" },
        { octave: `c${baseCord + 1}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord}_b`, duration: speed, letter: "B" },
        { octave: `c${baseCord + 1}_d`, duration: speed, letter: "D" },
        { octave: `c${baseCord + 1}_c`, duration: speed, letter: "C" },
        { octave: `c${baseCord}_a`, duration: speed * 2, letter: "A" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "C" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord}_a`, duration: speed, letter: "A" },
        { octave: `c${baseCord}_b`, duration: speed, letter: "B" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord + 1}_g_sharp`, duration: speed, letter: "G#" },
        { octave: `c${baseCord}_b`, duration: speed, letter: "B" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "C" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord + 1}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord + 1}_d_sharp`, duration: speed, letter: "D#" },
        { octave: `c${baseCord + 1}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord + 1}_d_sharp`, duration: speed, letter: "D#" },
        { octave: `c${baseCord + 1}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord}_b`, duration: speed, letter: "B" },
        { octave: `c${baseCord + 1}_d`, duration: speed, letter: "D" },
        { octave: `c${baseCord + 1}_c`, duration: speed, letter: "C" },
        { octave: `c${baseCord}_a`, duration: speed * 2, letter: "A" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "C" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord}_a`, duration: speed, letter: "A" },
        { octave: `c${baseCord}_b`, duration: speed, letter: "B" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "E" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "C" },
        { octave: `c${baseCord}_b`, duration: speed, letter: "B" },
        { octave: `c${baseCord}_a`, duration: speed * 2, letter: "A" },
      ],
    },
    {
      name: "Twinkle Twinkle Little Star",
      notes: [
        { octave: `c${baseCord}_c`, duration: speed * 2, letter: "Twinkle" },
        { octave: `c${baseCord}_c`, duration: speed * 2, letter: "Twinkle" },
        { octave: `c${baseCord}_g`, duration: speed * 2, letter: "Little" },
        { octave: `c${baseCord}_g`, duration: speed * 2, letter: "Star" },
        { octave: `c${baseCord}_a`, duration: speed * 2, letter: "How" },
        { octave: `c${baseCord}_a`, duration: speed * 2, letter: "I" },
        { octave: `c${baseCord}_g`, duration: speed * 2 * 2, letter: "Wonder" },
        { octave: `c${baseCord}_f`, duration: speed * 2, letter: "What" },
        { octave: `c${baseCord}_f`, duration: speed * 2, letter: "You" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Are" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Up" },
        { octave: `c${baseCord}_d`, duration: speed * 2, letter: "Above" },
        { octave: `c${baseCord}_d`, duration: speed * 2, letter: "The" },
        { octave: `c${baseCord}_c`, duration: speed * 2, letter: "World" },
      ],
    },
    {
      name: "Jingle Bells",
      notes: [
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_g`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 4, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 0.5, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 0.5, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_d`, duration: speed * 2, letter: "Jingle" },
        { octave: `c${baseCord}_g`, duration: speed * 2, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_g`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 4, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 0.5, letter: "Jingle" },
        { octave: `c${baseCord}_e`, duration: speed * 0.5, letter: "Jingle" },
        { octave: `c${baseCord}_g`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_g`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_f`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Jingle" },
        { octave: `c${baseCord}_c`, duration: speed * 4, letter: "Jingle" },
      ],
    },
    {
      name: "Mary Had a Little Lamb",
      notes: [
        { octave: `c${baseCord}_e`, duration: speed, letter: "Mary" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Had" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "A" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Lamb" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Lamb" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Lamb" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Lamb" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Lamb" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Lamb" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Lamb" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Lamb" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "Mary" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Had" },
        { octave: `c${baseCord}_c`, duration: speed, letter: "A" },
        { octave: `c${baseCord}_d`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Lamb" },
        { octave: `c${baseCord}_e`, duration: speed, letter: "Little" },
        { octave: `c${baseCord}_e`, duration: speed * 2, letter: "Lamb" },
      ],
    },
    {
      name: "Ektara Tui Desher Kotha",

      notes: [
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed * 3,
          letter: "e k",
        },
        {
          octave: `c${baseCord}_g_sharp`,
          duration: speed,
          letter: "ta",
        },
        {
          octave: `c${baseCord}_g`,
          duration: speed * 2,
          letter: "ra",
        },
        {
          octave: `c${baseCord}_g_sharp`,
          duration: speed * 2,
          letter: "tu i",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed * 2,
          letter: "de",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed,
          letter: "she",
        },
        {
          octave: `c${baseCord}_f_sharp`,
          duration: speed,
          letter: "r",
        },
        {
          octave: `c${baseCord}_f`,
          duration: speed * 2,
          letter: "k",
        },
        {
          octave: `c${baseCord}_f_sharp`,
          duration: speed * 2,
          letter: "tha",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 3,
          letter: "bol ",
        },
        {
          octave: `c${baseCord}_f`,
          duration: speed,
          letter: "re",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed * 2,
          letter: "e",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed,
          letter: "bar",
        },
        {
          octave: `c${baseCord}_f`,
          duration: speed,
          letter: "r",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 0.25,
          letter: "b",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed * 4,
          letter: "bol",
        },
      ],
    },
    {
      name: "KGF Theme Music",
      notes: [
        // phase 1 circle1
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.125,
          letter: "",
        },
        {
          octave: `c${baseCord - 1}_a_sharp`,
          duration: speed * 2.25,
          letter: "",
        },

        // phase 1 circle2
        // 2nd
        {
          octave: `c${baseCord}_c`,
          duration: speed,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.125,
          letter: "",
        },
        {
          octave: `c${baseCord - 1}_a_sharp`,
          duration: speed * 2.25,
          letter: "",
        },

        // phase 1 circle1
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.125,
          letter: "",
        },
        {
          octave: `c${baseCord - 1}_a_sharp`,
          duration: speed * 2,
          letter: "",
        },
        // core
        // 3rd
        {
          octave: `c${baseCord}_c`,
          duration: speed,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_e`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 1.125,
          letter: "",
        },

        // phase1 circle1
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.125,
          letter: "",
        },
        {
          octave: `c${baseCord - 1}_a_sharp`,
          duration: speed * 2.25,
          letter: "",
        },

        // phase 1 circle2
        // 2nd
        {
          octave: `c${baseCord}_c`,
          duration: speed,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed * 1.125,
          letter: "",
        },
        {
          octave: `c${baseCord - 1}_a_sharp`,
          duration: speed * 2.25,
          letter: "",
        },

           // phase1 circle1
           {
            octave: `c${baseCord}_c`,
            duration: speed * 2,
            letter: "",
          },
          {
            octave: `c${baseCord}_c`,
            duration: speed * 2,
            letter: "",
          },
          {
            octave: `c${baseCord}_c`,
            duration: speed * 1.5,
            letter: "",
          },
          {
            octave: `c${baseCord}_c_sharp`,
            duration: speed * 0.5,
            letter: "",
          },
          {
            octave: `c${baseCord}_c`,
            duration: speed * 1.125,
            letter: "",
          },
          {
            octave: `c${baseCord - 1}_a_sharp`,
            duration: speed * 2.25,
            letter: "",
          },

        // 5rd
        {
          octave: `c${baseCord}_c`,
          duration: speed,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 2,
          letter: "",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed * 1.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_e`,
          duration: speed * 0.5,
          letter: "",
        },
        {
          octave: `c${baseCord}_d_sharp`,
          duration: speed,
          letter: "",
        },
        {
          octave: `c${baseCord}_c_sharp`,
          duration: speed * 1.125,
          letter: "",
        },
        {
          octave: `c${baseCord}_c`,
          duration: speed,
          letter: "",
        },
      ],
    },
  ];

  return songs;
}
