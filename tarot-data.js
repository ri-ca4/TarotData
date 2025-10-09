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
            numerology: '0',
        },
        meanings: {
            general: 'You are at the beginning of a new chapter, a blank slate. It\'s time for a grand adventure',
            career:  'You may be getting ready to start a new job or career path, or you may find that you have a fresh burst of energy in an existing project. This is a time for innovative ideas and taking calculated risks.',
            love:    'You may be entering a new relationship, or there might be a need for playfulness or adventure in an existing relationship. It\'s a time to open your heart to love.',
            feelings:'You might be feeling optimistic and enthusiastic and have a strong desire for freedom and exploration. Are you feeling invigorated?',
            actions: 'This might be a time to embrace that spontaneity and trust your instincts. It could also be a time for travel.',
        },
        img: '',
        imgDescription: 'The bright sun shines down on the Fool, dressed in vibrant clothes stands on the edge of a cliff. His gaze is upwards, seemingly oblivious to the drop ahead. He carries his possessions on a stick and holds a single white rose. His companion, a small dog, nips at his heels.',
        reverse: {
            keywords: ['Recklessness', 'carelessness', 'Negligence', 'Naivete', 'Distraction', "Foolishness", 'Poor Judgement', 'Stagnation', 'Apathy', 'Wasted Potential', 'Irationality', 'Hesitation'],
            associations: {
                yesNo: 1,
                astrology: 'Uranus',
                element: 'Air',
                numerology: '0',
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

];

const yesNo = [
    'yes',
    'no',
    'maybe',
    'unclear',
]