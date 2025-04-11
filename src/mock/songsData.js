const songsData = [
  {
    id: 1,
    title: "Grande es tu fidelidad",
    artist: "Generación 12",
    chords: {
      american: ["C", "G", "Am", "F"],
      degrees: ["I", "V", "vi", "IV"]
    },
    key: "C",
    bpm: 75,
    lyrics: [
      {
        sectionName: "Verso 1",
        lines: [
          {
            chords: [0, null, null, null, 1, null],
            text: "Grande es tu fidelidad, oh Dios"
          },
          {
            chords: [2, null, 3, null],
            text: "Nunca me dejarás"
          }
        ]
      },
      {
        sectionName: "Coro",
        lines: [
          {
            chords: [0, null, 1, null, 2, null],
            text: "Tu amor nunca se acaba"
          },
          {
            chords: [3, null, 0, null],
            text: "Tu compasión es real"
          }
        ]
      }
    ]
  }
];

export default songsData;