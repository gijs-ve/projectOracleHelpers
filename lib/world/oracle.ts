const oracleTypes: {
    topic: OracleTopic;
    properties: string[];
    characteristics: OracleCharacteristic[];
}[] = [
    {
        topic: 'history',
        properties: [
            'Knowledgeable about past events and timelines',
            'Analytical understanding of cause and effect',
            'Strong storytelling ability',
            'Interest in archives and preservation',
        ],
        characteristics: ['Curious', 'Reflective', 'Detail-oriented'],
    },
    {
        topic: 'science',
        properties: [
            'Logical and empirical thinker',
            'Passion for experimentation and discovery',
            'Curious about natural phenomena',
            'Adaptability to new findings',
        ],
        characteristics: ['Analytical', 'Innovative', 'Resourceful'],
    },
    {
        topic: 'technology',
        properties: [
            'Innovative and forward-thinking',
            'Skilled in problem-solving and systems design',
            'Interested in machines and digital tools',
            'Focused on efficiency and functionality',
        ],
        characteristics: ['Creative', 'Strategic', 'Logical'],
    },
    {
        topic: 'mythology',
        properties: [
            'Rich imagination and symbolic interpretation',
            'Deep understanding of archetypes and folklore',
            'Storyteller with an interest in ancient narratives',
            'Connection to cultural origins and shared beliefs',
        ],
        characteristics: ['Imaginative', 'Reflective', 'Observant'],
    },
    {
        topic: 'philosophy',
        properties: [
            'Reflective and contemplative',
            'Adept in critical thinking and ethical reasoning',
            'Passion for abstract ideas and big questions',
            'Engages in debates and seeks clarity',
        ],
        characteristics: ['Ethical', 'Curious', 'Critical thinker'],
    },
    {
        topic: 'astrology',
        properties: [
            'Intuitive and pattern-oriented',
            'Understands human emotions and cosmic connections',
            'Empathetic and mystical',
            'Skilled in symbolic language',
        ],
        characteristics: ['Intuitive', 'Empathetic', 'Creative'],
    },
    {
        topic: 'psychology',
        properties: [
            'Observant and empathetic',
            'Knowledgeable about human behavior and mental processes',
            'Skilled at communication and interpretation of emotions',
            'Focused on personal growth and relationships',
        ],
        characteristics: ['Empathetic', 'Observant', 'Reflective'],
    },
    {
        topic: 'sociology',
        properties: [
            'Insightful about social dynamics and trends',
            'Analytical thinker with a focus on communities',
            'Understands cultural practices and societal change',
            'Interested in equality and justice',
        ],
        characteristics: ['Analytical', 'Open-minded', 'Ethical'],
    },
    {
        topic: 'literature',
        properties: [
            'Creative and expressive',
            'Skilled at interpreting texts and themes',
            'Strong appreciation for storytelling',
            'Emotionally resonant and introspective',
        ],
        characteristics: ['Creative', 'Introspective', 'Expressive'],
    },
    {
        topic: 'art',
        properties: [
            'Visually creative and design-focused',
            'Skilled in aesthetic judgment',
            'Sensitive to emotions and cultural trends',
            'Expresses ideas through visual or performative mediums',
        ],
        characteristics: ['Creative', 'Expressive', 'Observant'],
    },
    {
        topic: 'religion',
        properties: [
            'Deep sense of faith and spirituality',
            'Ethical and community-focused',
            'Knowledgeable about sacred texts and rituals',
            'Philosophically inclined',
        ],
        characteristics: ['Spiritual', 'Ethical', 'Reflective'],
    },
    {
        topic: 'politics',
        properties: [
            'Strategic and persuasive',
            'Analytical about power dynamics and governance',
            'Interested in societal change and diplomacy',
            'Engaged with current events',
        ],
        characteristics: ['Strategic', 'Persuasive', 'Engaged'],
    },
    {
        topic: 'economics',
        properties: [
            'Quantitative and analytical thinker',
            'Skilled in resource management',
            'Understands market trends and financial systems',
            'Focused on sustainability and growth',
        ],
        characteristics: ['Analytical', 'Resourceful', 'Strategic'],
    },
    {
        topic: 'astronomy',
        properties: [
            'Curious about the cosmos and the universe',
            'Analytical and data-driven',
            'Interested in technology and exploration',
            'Imaginative and theoretical',
        ],
        characteristics: ['Curious', 'Imaginative', 'Analytical'],
    },
    {
        topic: 'geography',
        properties: [
            'Observant of landscapes and natural systems',
            'Knowledgeable about cultural and physical geography',
            'Skilled in navigation and mapping',
            'Interested in environmental impact',
        ],
        characteristics: ['Observant', 'Detail-oriented', 'Curious'],
    },
    {
        topic: 'environment',
        properties: [
            'Passionate about nature and conservation',
            'Knowledgeable about sustainability',
            'Ethical and forward-thinking',
            'Advocates for ecological balance',
        ],
        characteristics: ['Passionate', 'Ethical', 'Forward-thinking'],
    },
    {
        topic: 'health',
        properties: [
            'Empathetic and caring',
            'Knowledgeable about anatomy and well-being',
            'Skilled in communication and teaching healthy habits',
            'Focused on preventive care',
        ],
        characteristics: ['Empathetic', 'Caring', 'Detail-oriented'],
    },
    {
        topic: 'education',
        properties: [
            'Patient and nurturing',
            'Passionate about teaching and sharing knowledge',
            'Skilled in communication and curriculum design',
            'Lifelong learner',
        ],
        characteristics: ['Patient', 'Passionate', 'Communicative'],
    },
    {
        topic: 'law',
        properties: [
            'Logical and detail-oriented',
            'Skilled in argumentation and interpretation',
            'Knowledgeable about justice systems',
            'Committed to fairness and ethics',
        ],
        characteristics: ['Logical', 'Ethical', 'Detail-oriented'],
    },
    {
        topic: 'culture',
        properties: [
            'Observant of societal norms and traditions',
            'Knowledgeable about global diversity',
            'Open-minded and inclusive',
            'Interested in heritage and innovation',
        ],
        characteristics: ['Open-minded', 'Inclusive', 'Observant'],
    },
    {
        topic: 'entertainment',
        properties: [
            'Creative and engaging',
            'Skilled in performance and storytelling',
            'Observant of trends and audience interests',
            'High emotional intelligence',
        ],
        characteristics: ['Creative', 'Engaging', 'Expressive'],
    },
    {
        topic: 'sports',
        properties: [
            'Competitive and disciplined',
            'Skilled in teamwork and strategy',
            'Focused on physical fitness',
            'Resilient and determined',
        ],
        characteristics: ['Competitive', 'Disciplined', 'Resilient'],
    },
    {
        topic: 'travel',
        properties: [
            'Adventurous and curious',
            'Knowledgeable about global destinations',
            'Skilled in adaptability and planning',
            'Appreciates cultural exchange',
        ],
        characteristics: ['Adventurous', 'Curious', 'Adaptable'],
    },
    {
        topic: 'music',
        properties: [
            'Rhythmic and expressive',
            'Skilled in sound and composition',
            'Emotionally attuned to audiences',
            'Interested in history and innovation of music',
        ],
        characteristics: ['Expressive', 'Creative', 'Emotionally attuned'],
    },
    {
        topic: 'cuisine',
        properties: [
            'Creative and sensory-driven',
            'Skilled in blending flavors and textures',
            'Appreciative of cultural diversity',
            'Focused on hospitality and community',
        ],
        characteristics: ['Creative', 'Sensory-driven', 'Hospitable'],
    },
] as const;
export type OracleType = (typeof oracleTypes)[number];

const topics = [
    'history',
    'science',
    'technology',
    'mythology',
    'philosophy',
    'astrology',
    'psychology',
    'sociology',
    'literature',
    'art',
    'religion',
    'politics',
    'economics',
    'astronomy',
    'geography',
    'environment',
    'health',
    'education',
    'law',
    'culture',
    'entertainment',
    'sports',
    'travel',
    'music',
    'cuisine',
] as const;
export type OracleTopic = (typeof topics)[number];

const characteristics = [
    'Curious',
    'Reflective',
    'Detail-oriented',
    'Analytical',
    'Innovative',
    'Resourceful',
    'Creative',
    'Strategic',
    'Logical',
    'Imaginative',
    'Observant',
    'Ethical',
    'Critical thinker',
    'Intuitive',
    'Empathetic',
    'Expressive',
    'Introspective',
    'Spiritual',
    'Persuasive',
    'Engaged',
    'Passionate',
    'Forward-thinking',
    'Caring',
    'Patient',
    'Communicative',
    'Inclusive',
    'Engaging',
    'Competitive',
    'Disciplined',
    'Resilient',
    'Adventurous',
    'Adaptable',
    'Emotionally attuned',
    'Sensory-driven',
    'Hospitable',
    'Open-minded',
] as const;

export type OracleCharacteristic = (typeof characteristics)[number];
