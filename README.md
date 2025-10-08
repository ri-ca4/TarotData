# TarotData
## Templates for Card structures:
>Notes: 
>   yesNo property values are as follows- 0-yes, 1-no, 2-maybe, 3-unclear.
>   a placeholder of 0 has been added for all numeric values to indicate value type
### Major Arcana:
>Naming pattern: 
>   cardName property should follow this pattern: '[card number] + [card name]'
>Id pattern:
>   id property should consist of the card name minus the word "the" in all lowercase (ie. 'fool', 'magician', etc.)
#### The Template
`    
    {
        index: 0,
        id: '',
        arcana: '',
        number: 0,
        cardName: '',
        keywords: [],
        associations: {
            yesNo: 0,
            astrology: '',
            element: '',
            numerology: '',
        },
        meanings: {
            general: '',
            career:  '',
            love:    '',
            feelings:'',
            actions: '',
        },
        img: '',
        reverse: {
            keywords: [],
            associations: {
                yesNo: 0,
                astrology: '',
                element: '',
                numerology: '',
            },
            meanings: {
                general: '',
                career:  '',
                love:    '',
                feelings:'',
                actions: '',
        },
            img: '',
        },
    },
`
### Minor Arcana:
>Naming pattern: 
>   cardName property should follow this pattern: '[number (or name for aces and court cards)] + of + [suit]'
>   id property should consist of the card number for pip cards or the first letter of the court name for court cards, an underscore, and the first letter of the suit (ie 'a_w' for ace of wands, '2_c' for two of cups, etc)
#### The Template
`
    {
        index: 0,
        id: '',
        arcana: '',
        suit: '',
        number: 0,
        rank: '',
        cardName: '',
        keywords: [],
        associations: {
            yesNo: 0,
            astrology: '',
            element: '',
            numerology: '',
        },
        meanings: {
            general: '',
            career:  '',
            love:    '',
            feelings:'',
            actions: '',
        },
        img: '',
        reverse: {
            keywords: [],
            associations: {
                yesNo: 0,
                astrology: '',
                element: '',
                numerology: '',
            },
            meanings: {
                general: '',
                career:  '',
                love:    '',
                feelings:'',
                actions: '',
        },
            img: '',
        },
    }
`
