# TarotData- Rules for creating tarot-data.js
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
        imgDescription: '',        
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
            numerology: [],
        },
        meanings: {
            general: '',
            career:  '',
            love:    '',
            feelings:'',
            actions: '',
        },
        img: '',
        imgDescription: '',
        reverse: {
            keywords: [],
            associations: {
                yesNo: 0,
                astrology: '',
                element: '',
                numerology: [],
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
## Prompts for AI:
I will be using Google Gemini's 2.5 Flash version to research card meanings.
### Purpose for using AI:
- To ensure consistency in data referenced across all cards
- To summarize various predetermined tarot websites into a single summary which saves time and energy in the research phase
- To provide bulletpoints instead of full descriptions in order to ensure the end result is in my own words instead of the AI's. (I will use AI for research but not for generative purposes. All descriptions will be written in my own voice with my own words.)
### Reference Websites:
Below are a list of websites I regularly reference and would like the AI to reference.
-Biddy Tarot: https://biddytarot.com
-Labyrinthos: https://labrynthos.co
-Tarot.com:   https://www.tarot.com
I will also ask the AI to use it's own knowledge base to fill in the gaps.
### The prompt:

Your job is to search for interpretations of the [insert card name here] card on the following websites: https://biddytarot.com, https://labrynthos.co, https://www.tarot.com. You may supplement the information gathered with your own general information about tarot card interpretations. Please return the following information in bullet point form, capturing the ideas as concisely as possible without forming full sentences:
1. Keywords- Return 8-12 keywords. These should be general keywords used to interpret the cards (for example: “new beginnings” could be a key word for The Fool card.)
2. Yes/No/Maybe/Unsure interpretations- give the interpretation and a brief explanation of why it could be interpreted that way. If more than one interpretation exists please give all possible interpretations and list sources for each.
3. The astrological element associated with the card.
4. The elemental association for the card.
5. The numbers associated with the card’s numerology. Include all numbers associated with the card. Please just include the numbers and not the meaning of the numbers.
6. Meanings for the following types of readings: General, Career, Love, Feelings (internal experiences), and Actions (external circumstances/advice)
7. Repeat 1-6 for reversed interpretations.
8. Give the visual descriptive elements for the Rider Waite deck.

Organize this information into clear headings (ie. “Keywords (Upright)”, “Meanings (Reversed): General:... Career:... …”, etc.) for quick reference and clarity.

