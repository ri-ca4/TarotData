const tarotDeck = [
    {
//Major Arcana
//The Fool
        index: 0,
        id: 'fool',
        arcana: 'major',
        number: 0,
        cardName: '0 The Fool',
        keywords: ['New Beginnings', 'Leap of Faith', 'Innocence', 'Spontaneity', 'Optimism', 'Freedom', 'Adventure', 'Unlimited Potential', 'Beginner\'s Mind', 'Risk-Taking', 'Trust', 'Living in the Moment'],
        associations: {
            yesNo: 0,
            astrology: 'Uranus',
            element: 'Air',
            numerology: [0],
        },
        meanings: {
            general: 'You are at the beginning of a new chapter, a blank slate. It\'s time for a grand adventure',
            career:  'You may be getting ready to start a new job or career path, or you may find that you have a fresh burst of energy in an existing project. This is a time for innovative ideas and taking calculated risks.',
            love:    'You may be entering a new relationship, or there might be a need for playfulness or adventure in an existing relationship. It\'s a time to open your heart to love.',
            feelings:'You might be feeling optimistic and enthusiastic and have a strong desire for freedom and exploration. Are you feeling invigorated?',
            actions: 'This might be a time to embrace that spontaneity and trust your instincts. It could also be a time for travel.',
        },
        img: '',
        imgDescription: 'The bright sun shines down on the Fool who is dressed in vibrant clothes and stands on the edge of a cliff. His gaze is upwards, seemingly oblivious to the drop ahead. He carries his possessions on a stick and holds a single white rose. His companion, a small dog, nips at his heels.',
        reverse: {
            keywords: ['Recklessness', 'carelessness', 'Negligence', 'Naivete', 'Distraction', "Foolishness", 'Poor Judgement', 'Stagnation', 'Apathy', 'Wasted Potential', 'Irationality', 'Hesitation'],
            associations: {
                yesNo: 1,
                astrology: 'Uranus',
                element: 'Air',
                numerology: [0],
            },
            meanings: {
                general: 'You\'re potential may be blocked or is being wasted, or perhaps you are refusing to move forward. You could also be willfully naive or oblivious to impending danger',
                career:  'You may be in a job that feels stale or feel blocked from starting a new project or making a change. Perhaps you are taking risks without considering the consequences, or you are feeling directionless in your work',
                love:    'You may be feeling fear or uncertainty about a new partner or a change in your existing relationship. Perhaps you are being reckless in love.',
                feelings:'You could be feeling hesitation or a fear of failure that\'s keeping you from starting a new endevour. Are you self-conscious or putting up walls because you fear the unknown?',
                actions: 'Slow down, practice self-awareness, and take a look at the bigger picture. Maybe try to find a safe outlet for that playful spirit.',
        },
            img: '',
        },
    },
//The Magician
    {
        index: 1,
        id: 'magician',
        arcana: 'major',
        number: 1,
        cardName: '1 The Magician',
        keywords: ['Manifestation', 'Willpower', 'Resourcefulness', 'Inspired Action', 'Skill and Talent', 'Creation and Initiative', 'Focus and Concentration', 'Alignment', 'Mastery', 'Logic', 'Taking Control'],
        associations: {
            yesNo: 0,
            astrology: 'Mercury',
            element: 'Air',
            numerology: [1, 10],
        },
        meanings: {
            general: 'Everything you need is at your fingertips. It\'s time to turn your thoughts into reality by taking action.',
            career:  'You can use your skills and entrepreneurial spirit effectively. This is a time for clear communication and sucessful negotiations.',
            love:    'Take the initiative in your romantic life. Focus on forming a committed connetion with clear intent.',
            feelings:'You\'re probably feeling confident, inspired and self-assured. Are you ready to take control of the situation?',
            actions: 'It\'s time to start that project, to plan and execute your ideas. Use your resources and connections consciously and communicate clearly.',
        },
        img: '',
        imgDescription: 'With a wand in his right hand pointing to the heavens, the Magician stands before the elements (symbolized by a Cup, a Pentacle, a Sword, and a Wand) surrounded by lush greenery. An infinity symbol rests above his head.',        
        reverse: {
            keywords: ['Manipulation', 'Deciet and Trickery', 'Misuse of Power', 'Wasted Talent', 'Lack of Direction', 'Blocked Creativity', 'Unfocused or Clumsy', 'Insecurity', 'Illusions', 'Self-Doubt', 'Poor Planning'],
            associations: {
                yesNo: 1,
                astrology: 'Mercury',
                element: 'Air',
                numerology: [1,10],
            },
            meanings: {
                general: 'You could be feeling blocked or powerless right now, or a lack of focus could be leading toward failure. It\'s possible that deceit is playing a role.',
                career:  'Communication breakdowns can lead to failed negotiations. Poor leadership or being/feeling underutilized may be preventing progress.',
                love:    'Relationships may feel one sided and there could be an inibility to attract or commit. Self doubt may be preventing connection or there could be an element of control or emotional manipulation.',
                feelings:'Are you frustrated with creative blocks or doubting your power? You might be feeling confused or insecure at this time.',
                actions: 'Stop trying to manipulate the situation and just take a step back to refocus your efforts. You may need to develop your skills before acting, and remember to check for hidden motives.',
        },
            img: '',
        },
    },
//The High Priestess
{
        index: 2,
        id: 'priestess',
        arcana: 'major',
        number: 2,
        cardName: '2 The High Priestess',
        keywords: ['Intuition and Inner Voice', 'Sacred Knowledge and Wisdom', "Subconscious Mind", 'Mystery and Secrets', 'Duality', 'Divine Feminine', 'Patience and Passivity', 'Unrevealed Potential', 'Inner Illumination', 'Stillness and Calm'],
        associations: {
            yesNo: 3,
            astrology: 'The Moon',
            element: 'Water',
            numerology: [2],
        },
        meanings: {
            general: 'Trust your instincts and listen to your inner voice. During this period of quiet contemplation, look beneath the surface and access higher wisdom.',
            career:  'This might be a time to work alone, to listen to your intuition about your business situation, or to seek advice from an intuitive mentor. Hold back your plans for the moment and seek clarity.',
            love:    'You might be feeling a deep spiritual or soul-level connection or there could be hidden or unexpressed feelings between you and your partner. You may be waiting for a declairation or perhaps there is a secret waiting to be revealed.',
            feelings:'You could be feeling confident in your inner knowledge and that calm sense of inner knowing. Perhaps you feel especially receptive to the hidden truths.',
            actions: 'Follow your intuition; listen to your dreams; meditate. Seek out a quiet space for reflection and trust your gut feelings.',
        },
        img: '',
        imgDescription: 'The Priestess sits between a black pillar and a white pillar wearing a simple blue robe and crown. A crescent moon rests at her feet and in her lap is a partially covered scroll. Behind her a veil is decorated with pomegranets and palm trees.',        
        reverse: {
            keywords: ['Disconnected from Intuition', 'Secrets (Exposed or Kept)', 'Lack of Inner Guidance', 'Over-thinking or Rationalizing', 'Gossip or Hidden Agendas', 'Ignoring Inner Voice', 'Superficial Knowledge', 'Emotional Upheaval', 'Blocked Creative Flow', 'Feeling Powerless'],
            associations: {
                yesNo: 1,
                astrology: 'The Moon',
                element: 'Water',
                numerology: [2],
            },
            meanings: {
                general: 'Are you ignoring your intuition or finding yourself influenced by external opinions? Perhaps you are in information overload or secrets are being revealed, or maybe you are just feeling detached.',
                career:  'You might not be working with the full picture right now and the incomplete information can lead to poor communication. It\'s also possible you ar ebeing influenced in your decision or you\'re failing to trust your gut in a professional decision.',
                love:    'Hidden secrets may come to light, or there may be difficulty in expressing one\'s true feelings. Is it hard to connect emotionally right now?',
                feelings:'Confusion, insecurity, and anxiety may stem from a lack of clarity. Emotions may feel overwhelming right now leading to feeling ungrounded',
                actions: 'Take a step back from the drama and confront any hidden agendas directly. This is a reminder to feel your feelings and to seek clarity or outside help to access your truest self.',
        },
            img: '',
        },
    },

];

const yesNo = [
    'yes',
    'no',
    'maybe',
    'unclear',
]