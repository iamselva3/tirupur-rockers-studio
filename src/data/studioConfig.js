/**
 * THIRUPUR ROCKERS STUDIO — Central Master Configuration
 * All imagery, copy, contact details, pricing, and portfolio data.
 * Pure English editorial content (no Tamil text except the single hero subtitle).
 */

export const STUDIO_CONFIG = {
  // Brand Identity
  brandName: 'THIRUPUR ROCKERS',
  studioFullName: 'Thirupur Rockers Studio',
  tagline: 'Moments pass today. Memories stay forever.',
  heroTamilTagline: 'நேற்றைய நொடிகள், இன்றைய நினைவுகள், என்றென்றும் நிலைத்திருக்கும்.', // Allowed ONLY in hero
  establishedYear: '2012',
  location: {
    city: 'Tiruppur',
    state: 'Tamil Nadu',
    country: 'India',
    address: 'Near Old Bus Stand & Kumaran Road, Tiruppur, Tamil Nadu 641601',
    regionTag: 'Kongu Region & South India',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173117462!2d77.2798226!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b01b69e5d9%3A0xc32579dfddc54d3!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  // Contact Channels
  contact: {
    phone: '+91 90803 35174',
    phoneRaw: '919080335174',
    whatsapp: '919080335174',
    email: 'tirupurrockersstudio@gmail.com',
    instagram: 'https://www.instagram.com/tirupur_rockerss_studio/',
    instagramHandle: '@tirupur_rockerss_studio',
    youtube: 'https://youtube.com/@thirupurrockersstudio',
    facebook: 'https://facebook.com/thirupurrockers',
  },

  // Logo Assets
  logos: {
    transparent: '/assets/logo-transparent.png',
    originalPure: '/assets/thirupr rockers studio-pure.png',
    circleBadge: '/assets/thirupr rockers studio-circle.png',
    highResPng: '/assets/thirupr-rockers-transparent.png',
  },

  // Statistics / Credibility (Pure English)
  stats: [
    { number: 750, suffix: '+', label: 'Heirloom Weddings Shot', sublabel: 'Ceremonial Archives' },
    { number: 12, suffix: '+', label: 'Years of Visual Artistry', sublabel: 'Prime Glass Craft' },
    { number: 1200, suffix: '+', label: 'Happy Families', sublabel: 'Generational Bonds' },
    { number: 24, suffix: '+', label: 'South Indian Cities', sublabel: 'Destination Coverage' },
  ],

  // Services / Specialities
  services: [
    {
      id: '01',
      title: 'Candid Wedding Photography',
      slug: 'candid-wedding',
      shortDesc: 'Unscripted laughter, sacred tears, and subtle glances documented with quiet reverence.',
      fullDesc: 'We step back to let your emotions breathe. No robotic poses or interrupted rituals—just genuine warmth, golden temple courtyard light, and the raw poetry of two souls intertwining.',
      image: '/assets/photos/marriage/marriage-3.jpg',
      highlights: ['Dual Master Photographers', 'Natural Golden Hour Coverage', 'High-Res Curated Proofs', 'Custom Leather Fine-Art Book'],
    },
    {
      id: '02',
      title: 'Cinematic Wedding Films',
      slug: 'wedding-cinema',
      shortDesc: '24-frame motion pictures scored with bespoke sound design and organic atmosphere.',
      fullDesc: 'Shot with prime cinema glass and fluid gimbal movement. We preserve the rhythm of sacred drums, the vibration of family blessings, and the quiet private conversations between vows.',
      image: '/assets/photos/marriage/marriage-2.jpg',
      highlights: ['4K Cinema Sensor Mastery', 'Licensed Soundtrack Scoring', 'Drone Aerial Perspectives', 'Narrative Featurette'],
    },
    {
      id: '03',
      title: 'Baby, Kids & Newborn Shoots',
      slug: 'baby-and-kids',
      shortDesc: 'Gentle, temperature-regulated sessions preserving tiny fingers and angelic giggles.',
      fullDesc: 'Safety-certified newborn poses and playful outdoor sessions. We capture the innocent wonder and generational love that brings your home to life.',
      image: '/assets/photos/baby/baby-1.jpg',
      highlights: ['Sanitized Props & Warm Studio', 'Baby-Led Pacing (No Rush)', 'Cake Smash Thematics', 'Heirloom Keepsake Folio'],
    },
    {
      id: '04',
      title: 'Maternity & New Life Grace',
      slug: 'maternity',
      shortDesc: 'Poetic, sculptured light celebrating the divine journey of motherhood.',
      fullDesc: 'Tasteful, empowering portraits draped in soft silk, handwoven textures, and warm sunlight. An ode to the miraculous bond before your little one arrives.',
      image: '/assets/photos/maternity/maternity-1.webp',
      highlights: ['Gown & Saree Draping Guidance', 'Intimate Partner Portraits', 'Golden Dusk Natural Light', 'Retouched Fine-Art Canvas'],
    },
    {
      id: '05',
      title: 'High-Fashion & Model Portfolios',
      slug: 'model-and-fashion',
      shortDesc: 'Contemporary garment drape, haute editorial lighting, and brand campaigns.',
      fullDesc: 'Tailored for luxury fashion labels, models, and textile exporters. Precision lighting and international aesthetic direction.',
      image: '/assets/photos/model/model-1.webp',
      highlights: ['Creative Editorial Direction', 'Studio & Location Setup', 'Lookbook Curation', 'Commercial High-Res Files'],
    },
    {
      id: '06',
      title: 'Traditional Ceremonies & Heritage',
      slug: 'traditional-ceremonies',
      shortDesc: 'Complete ceremonial archive honoring every elder, blessing, and ancestral custom.',
      fullDesc: 'From engagement to reception, Nichayathartham and Muhurtham. Every elder blessing and intricate custom is captured with flawless lighting and dignity.',
      image: '/assets/photos/marriage/marriage-1.jpg',
      highlights: ['Full Ceremony Documentation', 'Studio Flash Balanced Rig', 'VIP Stage Portraits', 'Fast-Track Family Gallery'],
    },
  ],

  // Featured Work Stories
  featuredStories: [
    {
      id: 'f1',
      title: 'The Sacred Silk & Golden Vows',
      subtitle: 'Traditional Muhurtham Ceremony',
      location: 'Kongu Heritage Courtyard',
      category: 'Candid Wedding',
      image: '/assets/photos/marriage/marriage-3.jpg',
      aspect: '3/4',
      quote: '“They did not ask us to pose once. Yet every photo looks like a page from an antique poetry book.”',
      year: '2025',
    },
    {
      id: 'f2',
      title: 'Little Miracles in Golden Light',
      subtitle: 'Pure Wonder & First Steps',
      location: 'Rockers Atelier, Tiruppur',
      category: 'Baby & Kids',
      image: '/assets/photos/baby/baby-2.jpg',
      aspect: '4/5',
      quote: '“Gentle patience, warm studio blankets, and memories our family will cherish for generations.”',
      year: '2026',
    },
    {
      id: 'f3',
      title: 'Grace of New Beginnings',
      subtitle: 'Sculptured Natural Light',
      location: 'Private Garden Estate',
      category: 'Maternity',
      image: '/assets/photos/maternity/maternity-2.jpg',
      aspect: '4/5',
      quote: '“Soft morning glow, peaceful drapes, and the warmth of expecting our first child.”',
      year: '2026',
    },
    {
      id: 'f4',
      title: 'Haute Editorial & Silhouette',
      subtitle: 'Contemporary Lookbook Campaign',
      location: 'Studio Atelier',
      category: 'Model & Editorial',
      image: '/assets/photos/model/model-2.jpg',
      aspect: '3/4',
      quote: '“Striking poise, modern lighting, and an editorial finish that stands out internationally.”',
      year: '2026',
    },
    {
      id: 'f5',
      title: 'The Eternal Vow & Laughter',
      subtitle: 'Unscripted Mandapam Candids',
      location: 'Tiruppur Grand Hall',
      category: 'Candid Wedding',
      image: '/assets/photos/marriage/marriage-1.jpg',
      aspect: '16/10',
      quote: '“Every tear and smile captured without stage directions. Pure visual poetry.”',
      year: '2025',
    },
  ],

  // Gallery: Dedicated categories with user's new photos + minimum 5 photos for Baby
  gallery: [
    // Baby & Kids Section (5 photos minimum as requested)
    {
      id: 'b1',
      title: 'Angelic Giggles & Sunshine',
      category: 'Baby',
      subtitle: 'Milestone Portrait Session',
      image: '/assets/photos/baby/baby-1.jpg',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'b2',
      title: 'Little Explorer’s First Birthday',
      category: 'Baby',
      subtitle: 'Playful Studio Moments',
      image: '/assets/photos/baby/baby-2.jpg',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'b3',
      title: 'Sweet Slumber & Tiny Hands',
      category: 'Baby',
      subtitle: 'Warm Blanket Newborn Art',
      image: '/assets/photos/baby/baby-3.jpg',
      year: '2026',
      aspect: 'square',
    },
    {
      id: 'b4',
      title: 'The Cake Smash Celebration',
      category: 'Baby',
      subtitle: 'Pure Joy & Laughter',
      image: '/assets/photos/baby/baby-4.webp',
      year: '2025',
      aspect: 'square',
    },
    {
      id: 'b5',
      title: 'Newborn Angel Dreamscape',
      category: 'Baby',
      subtitle: 'Heirloom Keepsake Frame',
      image: '/assets/photos/baby/baby-5.webp',
      year: '2025',
      aspect: 'vertical',
    },

    // Marriage Section (marriage-3.jpg high clarity + marriage-1.jpg swapped)
    {
      id: 'm1',
      title: 'The Sacred Muhurtham Light',
      category: 'Marriage',
      subtitle: 'Ancestral Vows & Blessings',
      image: '/assets/photos/marriage/marriage-3.jpg',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'm2',
      title: 'Unscripted Mandapam Smiles',
      category: 'Marriage',
      subtitle: 'Candid Couple Radiance',
      image: '/assets/photos/marriage/marriage-2.jpg',
      year: '2026',
      aspect: 'horizontal',
    },
    {
      id: 'm3',
      title: 'The Sacred Thali Knots',
      category: 'Marriage',
      subtitle: 'A Lifetime of Devotion',
      image: '/assets/photos/marriage/marriage-1.jpg',
      year: '2025',
      aspect: 'vertical',
    },
    {
      id: 'm4',
      title: 'The Timeless Saree Drape',
      category: 'Marriage',
      subtitle: 'Heirloom Silk & Jasmine',
      image: '/assets/photos/marriage/marriage-6.webp',
      year: '2025',
      aspect: 'vertical',
    },

    // Maternity Section
    {
      id: 'mat1',
      title: 'Divine Maternal Grace',
      category: 'Maternity',
      subtitle: 'Golden Hour Serenity',
      image: '/assets/photos/maternity/maternity-1.webp',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'mat2',
      title: 'A New Chapter Begins',
      category: 'Maternity',
      subtitle: 'Sculptured Directional Light',
      image: '/assets/photos/maternity/maternity-2.jpg',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'mat3',
      title: 'Maternal Solitude by the Courtyard',
      category: 'Maternity',
      subtitle: 'Timeless Family Milestone',
      image: '/assets/photos/maternity/maternity-3.webp',
      year: '2025',
      aspect: 'square',
    },

    // Model & Fashion Section
    {
      id: 'mod1',
      title: 'Contemporary Haute Editorial',
      category: 'Model',
      subtitle: 'Studio Light Exploration',
      image: '/assets/photos/model/model-1.webp',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'mod2',
      title: 'Classic Poise & Elegance',
      category: 'Model',
      subtitle: 'Editorial Campaign Lookbook',
      image: '/assets/photos/model/model-2.jpg',
      year: '2026',
      aspect: 'vertical',
    },
    {
      id: 'mod3',
      title: 'Monochrome Dramatic Shadow',
      category: 'Model',
      subtitle: 'Cinematic Fashion Portrait',
      image: '/assets/photos/model/model-3.jpg',
      year: '2025',
      aspect: 'square',
    },
    {
      id: 'mod4',
      title: 'Textile Drape & Movement',
      category: 'Model',
      subtitle: 'Commercial Lookbook Series',
      image: '/assets/photos/model/model-4.jpg',
      year: '2026',
      aspect: 'horizontal',
    },
  ],

  // Process / Workflow (Pure English)
  processSteps: [
    {
      step: '01',
      title: 'The First Conversation & Filter Coffee',
      desc: 'We invite you to our Tiruppur studio or meet over a call. We talk about your families, how you met, your wedding traditions, and what matters most to your hearts.',
      timeframe: 'Initial Consultation',
    },
    {
      step: '02',
      title: 'Custom Storyboard & Lighting Blueprint',
      desc: 'We map your venue, sunlight angles, ceremonial timings, and family dynamics to ensure zero rushed moments and optimum golden light.',
      timeframe: '2 Weeks Prior',
    },
    {
      step: '03',
      title: 'The Unobtrusive Shoot',
      desc: 'On your sacred day, our cameras blend into the background. We never yell directions; we anticipate emotion, tears, laughter, and sacred vows as they unfold.',
      timeframe: 'Event Day',
    },
    {
      step: '04',
      title: 'Artisanal Color Grade & Audio Polish',
      desc: 'Every single frame receives individual color calibration for skin tone warmth and rich silk textures. Audio tracks are cleaned to preserve acoustic resonance.',
      timeframe: '3 to 4 Weeks Post',
    },
    {
      step: '05',
      title: 'Heirloom Delivery & Leather Folio',
      desc: 'You receive your 4K Cinema cut, private cloud vault, and our signature handcrafted Italian-leather heirloom album designed to last centuries.',
      timeframe: 'Final Handover',
    },
  ],

  // Investment / Packages (Pure English)
  packages: [
    {
      id: 'p1',
      tier: 'COLLECTION 01',
      name: 'The Intimate Vows',
      tagline: 'Crafted for close-knit ceremonies, temple rituals, and meaningful family moments.',
      investment: 'Custom Quote on Request',
      includes: [
        '1 Senior Candid Wedding Photographer',
        '1 Traditional Photography Specialist',
        '1 Cinematographer for Highlights Reel',
        'Full Day Rituals Coverage',
        'Handcrafted 40-Page Layflat Linen Album',
        'Complete Master Color-Graded Digital Gallery',
        '3-Minute Emotional Cinematic Trailer',
      ],
      badge: 'Popular for Intimate Vows',
      recommended: false,
    },
    {
      id: 'p2',
      tier: 'COLLECTION 02',
      name: 'The Signature Heritage Cinema',
      tagline: 'Our signature full-scale wedding experience for grand celebrations across Tamil Nadu.',
      investment: 'Custom Quote on Request',
      includes: [
        '2 Master Candid Photographers (Dual Angle)',
        '2 Traditional Photographers & Stage Flash Rig',
        '2 4K Cinema Cinematographers + Gimbal Operator',
        'Licensed Drone Pilot for Aerial Grandeur',
        'Pre-Wedding Outdoor Romance Shoot (1 Full Day)',
        'Two 50-Page Italian Leather Heirloom Albums',
        '10-Minute Narrative Cinema Feature Film',
        '60-Second Instant Same-Day Instagram Reel',
        'Private Cloud Gallery with High-Speed Downloads',
      ],
      badge: 'Studio Signature • Most Chosen',
      recommended: true,
    },
    {
      id: 'p3',
      tier: 'COLLECTION 03',
      name: 'The Bespoke Royal Atelier',
      tagline: 'Multi-day destination celebrations, luxury heritage estates, and legacy family sagas.',
      investment: 'Custom Quote on Request',
      includes: [
        'Dedicated 7-Member Master Visualist Crew',
        'Engagement, Sangeet, Muhurtham & Reception',
        'Cinematic Drone & Anamorphic Prime Lenses',
        'Creative Director on Site Throughout',
        'Three Fine-Art Albums (Couple + Both Parents)',
        '20-Minute Master Documentary Film + Teasers',
        'Custom Wooden Keepsake Box with Framed Prints',
        'Lifetime Archival Cloud Backup Guarantee',
      ],
      badge: 'Multi-Day Celebrations',
      recommended: false,
    },
  ],

  // Client Testimonials / Reviews (Pure English)
  testimonials: [
    {
      id: 't1',
      client: 'Dr. Keerthana & Vigneshwar',
      weddingType: 'Traditional Muhurtham',
      location: 'Tiruppur Royal Hall',
      year: '2025',
      image: '/assets/photos/marriage/marriage-3.jpg',
      rating: 5,
      headline: '“They captured the soul of our wedding day.”',
      quote: '“They never once made us feel conscious in front of the lens. When we watched our wedding film, my mother and grandmother were in tears. Thirupur Rockers captured every sacred ritual with breathtaking grace.”',
    },
    {
      id: 't2',
      client: 'Aishwarya & Gokulraj',
      weddingType: 'Outdoor Romance & Grand Reception',
      location: 'Green Valley Resort',
      year: '2025',
      image: '/assets/photos/marriage/marriage-2.jpg',
      rating: 5,
      headline: '“Warmth, patience, and unmatched visual depth.”',
      quote: '“The team arrived at 5 AM without hesitation to catch the early morning mist. The warmth, patience, and artistic composition they bring is unmatched in South India.”',
    },
    {
      id: 't3',
      client: 'Divya & Manoj Kumar',
      weddingType: 'Maternity & Baby Session',
      location: 'Rockers Atelier, Tiruppur',
      year: '2026',
      image: '/assets/photos/baby/baby-1.jpg',
      rating: 5,
      headline: '“Our family photographers for life.”',
      quote: '“From our maternity portraits to our baby’s first birthday session, they treat our family like their own. The photos will be cherished by our children for decades to come.”',
    },
  ],

  // Behind the Lens (Creative Team)
  team: [
    {
      name: 'R. Soundararajan',
      role: 'Founder & Principal Visual Director',
      bio: '14 years behind prime glass. Passionate about heritage architecture, natural golden light, and preserving genuine human emotion.',
      specialty: 'Candid Frames & Visual Storytelling',
      image: '/assets/photos/model/model-3.jpg',
    },
    {
      name: 'K. Manoj Kumar',
      role: 'Master Cinematographer & Colorist',
      bio: 'Trained in narrative cinema. Treats every film like a timeless short feature with custom musical score integration.',
      specialty: '24fps Motion & Emotional Pacing',
      image: '/assets/photos/marriage/marriage-3.jpg',
    },
    {
      name: 'P. Subhashree',
      role: 'Artistic Director & Album Curator',
      bio: 'Specialist in bridal aesthetics, baby portrait comfort, and artisanal Italian layflat album design.',
      specialty: 'Editorial Direction & Color Harmony',
      image: '/assets/photos/model/model-1.webp',
    },
  ],

  // Instagram / Social Reels Grid
  socialReels: [
    { id: 'r1', title: 'Golden Hour Bridal Glow', tag: '#WeddingMoments', image: '/assets/photos/marriage/marriage-3.jpg' },
    { id: 'r2', title: 'Sweet Angelic First Giggles', tag: '#BabyRockers', image: '/assets/photos/baby/baby-1.jpg' },
    { id: 'r3', title: 'Maternal Grace & Sunlight', tag: '#MaternityAtelier', image: '/assets/photos/maternity/maternity-1.webp' },
    { id: 'r4', title: 'Haute Fashion Lookbook', tag: '#EditorialSeries', image: '/assets/photos/model/model-1.webp' },
    { id: 'r5', title: 'Playful Toddler Cake Smash', tag: '#BabyMilestones', image: '/assets/photos/baby/baby-2.jpg' },
    { id: 'r6', title: 'Mandapam Sacred Vows', tag: '#HeirloomWeddings', image: '/assets/photos/marriage/marriage-2.jpg' },
  ],

  // FAQs
  faqs: [
    {
      question: 'How far in advance should we reserve our wedding date?',
      answer: 'Because our principal team personally shoots each wedding and we never outsource our primary artists, our calendar fills 6 to 9 months in advance during peak wedding seasons. We recommend inquiring as soon as your date is finalized.',
    },
    {
      question: 'Do you travel outside Tiruppur for weddings and shoots?',
      answer: 'Yes! While Tiruppur is our home atelier, over 60% of our assignments take place across Coimbatore, Pollachi, Erode, Salem, Chennai, Bengaluru, Madurai, Chettinad, and scenic destinations like Ooty and Kodaikanal. Travel and stay logistics are organized transparently.',
    },
    {
      question: 'What is your photography philosophy? Are your photos really candid?',
      answer: 'Our philosophy is quiet luxury: observational and unobtrusive. We believe the most beautiful photos are the ones where you forget the camera exists. We guide you gently during portrait sessions so you feel natural, but during rituals, we let the sacred moments happen untouched.',
    },
    {
      question: 'When will we receive our photos, video films, and albums?',
      answer: 'We provide a 50-image curated "Sneak Peek Teaser Gallery" within 72 hours of your wedding for WhatsApp and Instagram sharing. The complete color-graded digital gallery is delivered within 3 to 4 weeks. Handcrafted fine-art albums and cinematic feature films are ready within 6 to 8 weeks after your photo selection.',
    },
    {
      question: 'Do you offer custom packages for combined Pre-Wedding and Baby Shoots?',
      answer: 'Yes. Many families choose our ongoing "Family Heirloom" relationship plan, which covers their engagement, pre-wedding romance, grand wedding, and later maternity and newborn chapters with consistent artistic continuity.',
    },
  ],
};
