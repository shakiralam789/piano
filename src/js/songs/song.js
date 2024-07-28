let speed = 300;
let baseCord = 3; 

let songs = [
    {
        name: 'Für Elise',
        notes: [
            { octave: `c${baseCord+1}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord+1}_d_sharp`, duration: speed, letter: 'D#' },
            { octave: `c${baseCord+1}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord+1}_d_sharp`, duration: speed, letter: 'D#' },
            { octave: `c${baseCord+1}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord}_b`, duration: speed, letter: 'B' },
            { octave: `c${baseCord+1}_d`, duration: speed, letter: 'D' },
            { octave: `c${baseCord+1}_c`, duration: speed, letter: 'C' },
            { octave: `c${baseCord}_a`, duration: speed * 2, letter: 'A' },
            { octave: `c${baseCord}_c`, duration: speed, letter: 'C' },
            { octave: `c${baseCord}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord}_a`, duration: speed, letter: 'A' },
            { octave: `c${baseCord}_b`, duration: speed, letter: 'B' },
            { octave: `c${baseCord}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord+1}_g_sharp`, duration: speed, letter: 'G#' },
            { octave: `c${baseCord}_b`, duration: speed, letter: 'B' },
            { octave: `c${baseCord}_c`, duration: speed, letter: 'C' },
            { octave: `c${baseCord}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord+1}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord+1}_d_sharp`, duration: speed, letter: 'D#' },
            { octave: `c${baseCord+1}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord+1}_d_sharp`, duration: speed, letter: 'D#' },
            { octave: `c${baseCord+1}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord}_b`, duration: speed, letter: 'B' },
            { octave: `c${baseCord+1}_d`, duration: speed, letter: 'D' },
            { octave: `c${baseCord+1}_c`, duration: speed, letter: 'C' },
            { octave: `c${baseCord}_a`, duration: speed * 2, letter: 'A' },
            { octave: `c${baseCord}_c`, duration: speed, letter: 'C' },
            { octave: `c${baseCord}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord}_a`, duration: speed, letter: 'A' },
            { octave: `c${baseCord}_b`, duration: speed, letter: 'B' },
            { octave: `c${baseCord}_e`, duration: speed, letter: 'E' },
            { octave: `c${baseCord}_c`, duration: speed, letter: 'C' },
            { octave: `c${baseCord}_b`, duration: speed, letter: 'B' },
            { octave: `c${baseCord}_a`, duration: speed * 2, letter: 'A' }
        ]
    },
    {
        name: "Twinkle Twinkle Little Star",
        notes: [
            { octave: `c${baseCord}_c`, duration: speed*2.5, letter: 'Twinkle' },
            { octave: `c${baseCord}_c`, duration: speed*2.5, letter: 'Twinkle' },
            { octave: `c${baseCord}_g`, duration: speed*2.5, letter: 'Little' },
            { octave: `c${baseCord}_g`, duration: speed*2.5, letter: 'Star' },
            { octave: `c${baseCord}_a`, duration: speed*2.5, letter: 'How' },
            { octave: `c${baseCord}_a`, duration: speed*2.5, letter: 'I' },
            { octave: `c${baseCord}_g`, duration: speed*2.5 * 2, letter: 'Wonder' },
            { octave: `c${baseCord}_f`, duration: speed*2.5, letter: 'What' },
            { octave: `c${baseCord}_f`, duration: speed*2.5, letter: 'You' },
            { octave: `c${baseCord}_e`, duration: speed*2.5, letter: 'Are' },
            { octave: `c${baseCord}_e`, duration: speed*2.5, letter: 'Up' },
            { octave: `c${baseCord}_d`, duration: speed*2.5, letter: 'Above' },
            { octave: `c${baseCord}_d`, duration: speed*2.5, letter: 'The' },
            { octave: `c${baseCord}_c`, duration: speed*2.5 * 2, letter: 'World' }
        ]
    },
    {
        name: 'Ektara Tui Desher Kotha',

        notes: [
            {
                octave:   `c${baseCord}_d_sharp`,
                duration: speed*3,
                letter: 'e k'
            },
            {
                octave:   `c${baseCord}_g_sharp`,
                duration: speed ,
                letter: 'ta'
            },
            {
                octave:   `c${baseCord}_g`,
                duration: speed*2,
                letter: 'ra'
            },
            {
                octave:   `c${baseCord}_g_sharp`,
                duration: speed * 2,
                letter:'tu i'

            },
            {
                octave:   `c${baseCord}_d_sharp`,
                duration: speed*2,
                letter:'she'

            },
            {
                octave:   `c${baseCord}_d_sharp`,
                duration: speed,
                letter:'she'

            },
            {
                octave:   `c${baseCord}_f_sharp`,
                duration: speed,
                letter:'r'

            },
            {
                octave:   `c${baseCord}_f`,
                duration: speed*2,
                letter:'k'

            },
            {
                octave:   `c${baseCord}_f_sharp`,
                duration: speed*2,
                letter:'tha'
            },
            {
                octave:   `c${baseCord}_c_sharp`,
                duration: speed*3,
                letter:'bol '
            },
            {
                octave:   `c${baseCord}_f`,
                duration: speed,
                letter:'re'
            },
            {
                octave:   `c${baseCord}_d_sharp`,
                duration: speed*2,
                letter:'e'
            },
            {
                octave:   `c${baseCord}_f`,
                duration: speed*2,
                letter:'bar'
            },
            {
                octave:   `c${baseCord}_d_sharp`,
                duration: speed*4,
                letter:'bol'
            },
        ]
    }
]