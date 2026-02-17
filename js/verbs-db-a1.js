// verbs-db-a1.js - A1 Level (Beginner) - 100 essential verbs

const verbsA1 = [
  {
    base: "sein",
    past: "war",
    participle: "gewesen",
    translations: ["to be"],
    derived: ["bin", "bist", "ist", "sind", "seid", "sind"],
    varieties: [
      {
        variant: "sein + Adjektiv",
        prepositions: [],
        explanation: "To describe state or quality.",
        examples: ["Ich bin müde.", "Sie ist nett.", "Wir sind glücklich."]
      }
    ]
  },
  {
    base: "haben",
    past: "hatte",
    participle: "gehabt",
    translations: ["to have"],
    derived: ["habe", "hast", "hat", "haben", "habt", "haben"],
    varieties: [
      {
        variant: "haben + Akkusativ",
        prepositions: [],
        explanation: "To possess something.",
        examples: ["Ich habe einen Hund.", "Sie hat Zeit.", "Wir haben Hunger."]
      }
    ]
  },
  {
    base: "werden",
    past: "wurde",
    participle: "geworden",
    translations: ["to become", "will (future)"],
    derived: ["werde", "wirst", "wird", "werden", "werdet", "werden"],
    varieties: [
      {
        variant: "werden + Adjektiv",
        prepositions: [],
        explanation: "To become something.",
        examples: ["Es wird dunkel.", "Ich werde müde.", "Sie wird Ärztin."]
      }
    ]
  },
  {
    base: "gehen",
    past: "ging",
    participle: "gegangen",
    translations: ["to go", "to walk"],
    derived: ["gehe", "gehst", "geht", "gehen", "geht", "gehen"],
    varieties: [
      {
        variant: "gehen + in",
        prepositions: ["in"],
        explanation: "Use 'in' when going into a place.",
        examples: ["Ich gehe in die Schule.", "Er geht ins Kino."]
      },
      {
        variant: "gehen + nach",
        prepositions: ["nach"],
        explanation: "Use 'nach' when going to a city, country, or home.",
        examples: ["Er geht nach Hause.", "Wir gehen nach Berlin."]
      },
      {
        variant: "gehen + zu",
        prepositions: ["zu"],
        explanation: "Use 'zu' when going to a person or specific place.",
        examples: ["Ich gehe zum Arzt.", "Sie geht zur Schule."]
      },
      {
        variant: "ausgehen",
        prepositions: [],
        explanation: "Separable verb: to go out socially.",
        examples: ["Wir gehen heute Abend aus.", "Gehst du mit uns aus?"],
        derived: ["gehe aus", "gehst aus", "geht aus", "gehen aus"]
      },
      {
        variant: "zurückgehen",
        prepositions: [],
        explanation: "Separable verb: to go back.",
        examples: ["Er geht nach Hause zurück.", "Wir gehen zum Start zurück."],
        derived: ["gehe zurück", "gehst zurück", "geht zurück"]
      }
    ]
  },
  {
    base: "kommen",
    past: "kam",
    participle: "gekommen",
    translations: ["to come"],
    derived: ["komme", "kommst", "kommt", "kommen", "kommt", "kommen"],
    varieties: [
      {
        variant: "kommen + aus",
        prepositions: ["aus"],
        explanation: "To come from a place or origin.",
        examples: ["Ich komme aus Deutschland.", "Woher kommst du?"]
      },
      {
        variant: "kommen + zu",
        prepositions: ["zu"],
        explanation: "To come to someone or something.",
        examples: ["Kommst du zu mir?", "Er kommt zur Party."]
      },
      {
        variant: "ankommen",
        prepositions: [],
        explanation: "Separable verb: to arrive.",
        examples: ["Wir kommen um 5 Uhr an.", "Der Zug kommt pünktlich an."],
        derived: ["komme an", "kommst an", "kommt an"]
      }
    ]
  },
  {
    base: "machen",
    past: "machte",
    participle: "gemacht",
    translations: ["to do", "to make"],
    derived: ["mache", "machst", "macht", "machen", "macht", "machen"],
    varieties: [
      {
        variant: "machen + Akkusativ",
        prepositions: [],
        explanation: "To do or make something.",
        examples: ["Was machst du?", "Ich mache Hausaufgaben.", "Sie macht das Frühstück."]
      },
      {
        variant: "aufmachen",
        prepositions: [],
        explanation: "Separable verb: to open.",
        examples: ["Mach die Tür auf!", "Ich mache das Fenster auf."],
        derived: ["mache auf", "machst auf", "macht auf"]
      },
      {
        variant: "zumachen",
        prepositions: [],
        explanation: "Separable verb: to close.",
        examples: ["Mach die Tür zu!", "Er macht das Buch zu."],
        derived: ["mache zu", "machst zu", "macht zu"]
      }
    ]
  },
  {
    base: "sagen",
    past: "sagte",
    participle: "gesagt",
    translations: ["to say", "to tell"],
    derived: ["sage", "sagst", "sagt", "sagen", "sagt", "sagen"],
    varieties: [
      {
        variant: "sagen + zu",
        prepositions: ["zu"],
        explanation: "To say something to someone.",
        examples: ["Was sagst du zu mir?", "Er sagt etwas zu ihr."]
      }
    ]
  },
  {
    base: "können",
    past: "konnte",
    participle: "gekonnt",
    translations: ["can", "to be able to"],
    derived: ["kann", "kannst", "kann", "können", "könnt", "können"],
    varieties: [
      {
        variant: "können + Infinitiv",
        prepositions: [],
        explanation: "Modal verb: ability or possibility.",
        examples: ["Ich kann schwimmen.", "Kannst du Deutsch sprechen?"]
      }
    ]
  },
  {
    base: "müssen",
    past: "musste",
    participle: "gemusst",
    translations: ["must", "to have to"],
    derived: ["muss", "musst", "muss", "müssen", "müsst", "müssen"],
    varieties: [
      {
        variant: "müssen + Infinitiv",
        prepositions: [],
        explanation: "Modal verb: necessity or obligation.",
        examples: ["Ich muss arbeiten.", "Du musst früh aufstehen."]
      }
    ]
  },
  {
    base: "wollen",
    past: "wollte",
    participle: "gewollt",
    translations: ["to want"],
    derived: ["will", "willst", "will", "wollen", "wollt", "wollen"],
    varieties: [
      {
        variant: "wollen + Infinitiv",
        prepositions: [],
        explanation: "Modal verb: desire or intention.",
        examples: ["Ich will nach Hause gehen.", "Was willst du machen?"]
      }
    ]
  },
  {
    base: "sollen",
    past: "sollte",
    participle: "gesollt",
    translations: ["should", "to be supposed to"],
    derived: ["soll", "sollst", "soll", "sollen", "sollt", "sollen"],
    varieties: [
      {
        variant: "sollen + Infinitiv",
        prepositions: [],
        explanation: "Modal verb: obligation or recommendation.",
        examples: ["Du sollst lernen.", "Was soll ich machen?"]
      }
    ]
  },
  {
    base: "dürfen",
    past: "durfte",
    participle: "gedurft",
    translations: ["may", "to be allowed to"],
    derived: ["darf", "darfst", "darf", "dürfen", "dürft", "dürfen"],
    varieties: [
      {
        variant: "dürfen + Infinitiv",
        prepositions: [],
        explanation: "Modal verb: permission.",
        examples: ["Darf ich gehen?", "Du darfst hier nicht rauchen."]
      }
    ]
  },
  {
    base: "mögen",
    past: "mochte",
    participle: "gemocht",
    translations: ["to like"],
    derived: ["mag", "magst", "mag", "mögen", "mögt", "mögen"],
    varieties: [
      {
        variant: "mögen + Akkusativ",
        prepositions: [],
        explanation: "To like someone or something.",
        examples: ["Ich mag Pizza.", "Magst du Kaffee?"]
      },
      {
        variant: "möchten",
        prepositions: [],
        explanation: "Would like to (subjunctive form).",
        examples: ["Ich möchte ein Bier.", "Was möchten Sie?"],
        derived: ["möchte", "möchtest", "möchte", "möchten"]
      }
    ]
  },
  {
    base: "sehen",
    past: "sah",
    participle: "gesehen",
    translations: ["to see"],
    derived: ["sehe", "siehst", "sieht", "sehen", "seht", "sehen"],
    varieties: [
      {
        variant: "sehen + Akkusativ",
        prepositions: [],
        explanation: "To see someone or something.",
        examples: ["Ich sehe dich.", "Siehst du das?"]
      },
      {
        variant: "ansehen",
        prepositions: [],
        explanation: "Separable verb: to look at, to watch.",
        examples: ["Ich sehe mir den Film an.", "Sieh dir das an!"],
        derived: ["sehe an", "siehst an", "sieht an"]
      },
      {
        variant: "fernsehen",
        prepositions: [],
        explanation: "Separable verb: to watch TV.",
        examples: ["Wir sehen abends fern.", "Siehst du gern fern?"],
        derived: ["sehe fern", "siehst fern", "sieht fern"]
      }
    ]
  },
  {
    base: "geben",
    past: "gab",
    participle: "gegeben",
    translations: ["to give"],
    derived: ["gebe", "gibst", "gibt", "geben", "gebt", "geben"],
    varieties: [
      {
        variant: "geben + Dativ + Akkusativ",
        prepositions: [],
        explanation: "To give something to someone.",
        examples: ["Ich gebe dir das Buch.", "Gibst du mir einen Apfel?"]
      },
      {
        variant: "es gibt",
        prepositions: [],
        explanation: "There is/there are.",
        examples: ["Es gibt einen Park.", "Was gibt es zum Essen?"]
      }
    ]
  },
  {
    base: "nehmen",
    past: "nahm",
    participle: "genommen",
    translations: ["to take"],
    derived: ["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"],
    varieties: [
      {
        variant: "nehmen + Akkusativ",
        prepositions: [],
        explanation: "To take something.",
        examples: ["Ich nehme den Bus.", "Nimm einen Apfel!"]
      },
      {
        variant: "mitnehmen",
        prepositions: [],
        explanation: "Separable verb: to take along.",
        examples: ["Nimmst du mich mit?", "Ich nehme meinen Hund mit."],
        derived: ["nehme mit", "nimmst mit", "nimmt mit"]
      }
    ]
  },
  {
    base: "wissen",
    past: "wusste",
    participle: "gewusst",
    translations: ["to know (facts)"],
    derived: ["weiß", "weißt", "weiß", "wissen", "wisst", "wissen"],
    varieties: [
      {
        variant: "wissen + dass",
        prepositions: [],
        explanation: "To know that something is true.",
        examples: ["Ich weiß, dass du Recht hast.", "Weißt du, wo er ist?"]
      }
    ]
  },
  {
    base: "kennen",
    past: "kannte",
    participle: "gekannt",
    translations: ["to know (people/places)", "to be familiar with"],
    derived: ["kenne", "kennst", "kennt", "kennen", "kennt", "kennen"],
    varieties: [
      {
        variant: "kennen + Akkusativ",
        prepositions: [],
        explanation: "To know or be acquainted with someone or something.",
        examples: ["Ich kenne ihn.", "Kennst du Berlin?"]
      },
      {
        variant: "kennenlernen",
        prepositions: [],
        explanation: "Separable verb: to get to know, to meet.",
        examples: ["Ich möchte dich kennenlernen.", "Wir haben uns gestern kennengelernt."],
        derived: ["lerne kennen", "lernst kennen", "lernt kennen"]
      }
    ]
  },
  {
    base: "denken",
    past: "dachte",
    participle: "gedacht",
    translations: ["to think"],
    derived: ["denke", "denkst", "denkt", "denken", "denkt", "denken"],
    varieties: [
      {
        variant: "denken + an",
        prepositions: ["an"],
        explanation: "To think of or about someone or something.",
        examples: ["Ich denke an dich.", "Denkst du an die Prüfung?"]
      }
    ]
  },
  {
    base: "glauben",
    past: "glaubte",
    participle: "geglaubt",
    translations: ["to believe", "to think"],
    derived: ["glaube", "glaubst", "glaubt", "glauben", "glaubt", "glauben"],
    varieties: [
      {
        variant: "glauben + an",
        prepositions: ["an"],
        explanation: "To believe in something.",
        examples: ["Ich glaube an dich.", "Glaubst du an Gott?"]
      },
      {
        variant: "glauben + dass",
        prepositions: [],
        explanation: "To think that something is true.",
        examples: ["Ich glaube, dass es regnet.", "Glaubst du, dass er kommt?"]
      }
    ]
  },
  {
    base: "leben",
    past: "lebte",
    participle: "gelebt",
    translations: ["to live"],
    derived: ["lebe", "lebst", "lebt", "leben", "lebt", "leben"],
    varieties: [
      {
        variant: "leben + in",
        prepositions: ["in"],
        explanation: "To live in a place.",
        examples: ["Ich lebe in München.", "Wo lebst du?"]
      }
    ]
  },
  {
    base: "wohnen",
    past: "wohnte",
    participle: "gewohnt",
    translations: ["to reside", "to dwell"],
    derived: ["wohne", "wohnst", "wohnt", "wohnen", "wohnt", "wohnen"],
    varieties: [
      {
        variant: "wohnen + in",
        prepositions: ["in"],
        explanation: "To reside in a city or country.",
        examples: ["Ich wohne in Berlin.", "Wo wohnst du?"]
      },
      {
        variant: "wohnen + bei",
        prepositions: ["bei"],
        explanation: "To live with someone.",
        examples: ["Ich wohne bei meinen Eltern.", "Er wohnt bei einem Freund."]
      }
    ]
  },
  {
    base: "arbeiten",
    past: "arbeitete",
    participle: "gearbeitet",
    translations: ["to work"],
    derived: ["arbeite", "arbeitest", "arbeitet", "arbeiten", "arbeitet", "arbeiten"],
    varieties: [
      {
        variant: "arbeiten + bei",
        prepositions: ["bei"],
        explanation: "To work at a company.",
        examples: ["Ich arbeite bei Siemens.", "Sie arbeitet bei einer Bank."]
      },
      {
        variant: "arbeiten + als",
        prepositions: ["als"],
        explanation: "To work as something.",
        examples: ["Ich arbeite als Lehrer.", "Er arbeitet als Arzt."]
      }
    ]
  },
  {
    base: "lernen",
    past: "lernte",
    participle: "gelernt",
    translations: ["to learn", "to study"],
    derived: ["lerne", "lernst", "lernt", "lernen", "lernt", "lernen"],
    varieties: [
      {
        variant: "lernen + Akkusativ",
        prepositions: [],
        explanation: "To learn something.",
        examples: ["Ich lerne Deutsch.", "Was lernst du?"]
      },
      {
        variant: "lernen + für",
        prepositions: ["für"],
        explanation: "To study for something.",
        examples: ["Ich lerne für die Prüfung.", "Lernst du für die Schule?"]
      }
    ]
  },
  {
    base: "studieren",
    past: "studierte",
    participle: "studiert",
    translations: ["to study (at university)"],
    derived: ["studiere", "studierst", "studiert", "studieren", "studiert", "studieren"],
    varieties: [
      {
        variant: "studieren + Akkusativ",
        prepositions: [],
        explanation: "To study a subject at university.",
        examples: ["Ich studiere Medizin.", "Was studierst du?"]
      },
      {
        variant: "studieren + an",
        prepositions: ["an"],
        explanation: "To study at a university.",
        examples: ["Ich studiere an der Universität Berlin."]
      }
    ]
  },
  {
    base: "lehren",
    past: "lehrte",
    participle: "gelehrt",
    translations: ["to teach"],
    derived: ["lehre", "lehrst", "lehrt", "lehren", "lehrt", "lehren"],
    varieties: [
      {
        variant: "lehren + Akkusativ",
        prepositions: [],
        explanation: "To teach something.",
        examples: ["Er lehrt Mathematik.", "Sie lehrt Deutsch."]
      }
    ]
  },
  {
    base: "zeigen",
    past: "zeigte",
    participle: "gezeigt",
    translations: ["to show"],
    derived: ["zeige", "zeigst", "zeigt", "zeigen", "zeigt", "zeigen"],
    varieties: [
      {
        variant: "zeigen + Dativ + Akkusativ",
        prepositions: [],
        explanation: "To show something to someone.",
        examples: ["Ich zeige dir das Foto.", "Zeig mir dein Zimmer!"]
      }
    ]
  },
  {
    base: "fragen",
    past: "fragte",
    participle: "gefragt",
    translations: ["to ask"],
    derived: ["frage", "fragst", "fragt", "fragen", "fragt", "fragen"],
    varieties: [
      {
        variant: "fragen + nach",
        prepositions: ["nach"],
        explanation: "To ask about something.",
        examples: ["Ich frage nach dem Weg.", "Frag nach dem Preis!"]
      }
    ]
  },
  {
    base: "antworten",
    past: "antwortete",
    participle: "geantwortet",
    translations: ["to answer"],
    derived: ["antworte", "antwortest", "antwortet", "antworten", "antwortet", "antworten"],
    varieties: [
      {
        variant: "antworten + auf",
        prepositions: ["auf"],
        explanation: "To answer to something.",
        examples: ["Ich antworte auf die Frage.", "Antworte auf meine Email!"]
      }
    ]
  },
  {
    base: "sprechen",
    past: "sprach",
    participle: "gesprochen",
    translations: ["to speak", "to talk"],
    derived: ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"],
    varieties: [
      {
        variant: "sprechen + mit",
        prepositions: ["mit"],
        explanation: "To speak with someone.",
        examples: ["Ich spreche mit meinem Lehrer.", "Sprich mit mir!"]
      },
      {
        variant: "sprechen + über",
        prepositions: ["über"],
        explanation: "To talk about something.",
        examples: ["Wir sprechen über das Wetter.", "Worüber sprechen Sie?"]
      }
    ]
  },
  {
    base: "reden",
    past: "redete",
    participle: "geredet",
    translations: ["to talk", "to speak"],
    derived: ["rede", "redest", "redet", "reden", "redet", "reden"],
    varieties: [
      {
        variant: "reden + mit",
        prepositions: ["mit"],
        explanation: "To talk with someone.",
        examples: ["Ich rede mit dir.", "Red nicht so laut!"]
      },
      {
        variant: "reden + über",
        prepositions: ["über"],
        explanation: "To talk about something.",
        examples: ["Wir reden über Politik.", "Worüber redet ihr?"]
      }
    ]
  },
  {
    base: "hören",
    past: "hörte",
    participle: "gehört",
    translations: ["to hear", "to listen"],
    derived: ["höre", "hörst", "hört", "hören", "hört", "hören"],
    varieties: [
      {
        variant: "hören + Akkusativ",
        prepositions: [],
        explanation: "To hear something.",
        examples: ["Ich höre Musik.", "Hörst du das?"]
      },
      {
        variant: "zuhören",
        prepositions: [],
        explanation: "Separable verb: to listen carefully.",
        examples: ["Hör mir zu!", "Ich höre dir zu."],
        derived: ["höre zu", "hörst zu", "hört zu"]
      }
    ]
  },
  {
    base: "verstehen",
    past: "verstand",
    participle: "verstanden",
    translations: ["to understand"],
    derived: ["verstehe", "verstehst", "versteht", "verstehen", "versteht", "verstehen"],
    varieties: [
      {
        variant: "verstehen + Akkusativ",
        prepositions: [],
        explanation: "To understand someone or something.",
        examples: ["Ich verstehe dich.", "Verstehst du die Frage?"]
      }
    ]
  },
  {
    base: "meinen",
    past: "meinte",
    participle: "gemeint",
    translations: ["to mean", "to think"],
    derived: ["meine", "meinst", "meint", "meinen", "meint", "meinen"],
    varieties: [
      {
        variant: "meinen + dass",
        prepositions: [],
        explanation: "To think or be of the opinion that.",
        examples: ["Ich meine, dass es wichtig ist.", "Was meinst du?"]
      }
    ]
  },
  {
    base: "heißen",
    past: "hieß",
    participle: "geheißen",
    translations: ["to be called", "to be named"],
    derived: ["heiße", "heißt", "heißt", "heißen", "heißt", "heißen"],
    varieties: [
      {
        variant: "heißen + Nominativ",
        prepositions: [],
        explanation: "To be called or named something.",
        examples: ["Ich heiße Anna.", "Wie heißt du?", "Das heißt 'Hallo'."]
      }
    ]
  },
  {
    base: "finden",
    past: "fand",
    participle: "gefunden",
    translations: ["to find", "to think (opinion)"],
    derived: ["finde", "findest", "findet", "finden", "findet", "finden"],
    varieties: [
      {
        variant: "finden + Akkusativ",
        prepositions: [],
        explanation: "To find something.",
        examples: ["Ich finde den Schlüssel.", "Findest du das gut?"]
      }
    ]
  },
  {
    base: "suchen",
    past: "suchte",
    participle: "gesucht",
    translations: ["to search", "to look for"],
    derived: ["suche", "suchst", "sucht", "suchen", "sucht", "suchen"],
    varieties: [
      {
        variant: "suchen + nach",
        prepositions: ["nach"],
        explanation: "To search for something.",
        examples: ["Ich suche nach meinem Handy.", "Wonach suchst du?"]
      }
    ]
  },
  {
    base: "bekommen",
    past: "bekam",
    participle: "bekommen",
    translations: ["to get", "to receive"],
    derived: ["bekomme", "bekommst", "bekommt", "bekommen", "bekommt", "bekommen"],
    varieties: [
      {
        variant: "bekommen + Akkusativ",
        prepositions: [],
        explanation: "To receive something.",
        examples: ["Ich bekomme ein Geschenk.", "Was bekommst du?"]
      },
      {
        variant: "bekommen + von",
        prepositions: ["von"],
        explanation: "To get something from someone.",
        examples: ["Ich bekomme Geld von meinen Eltern."]
      }
    ]
  },
  {
    base: "kriegen",
    past: "kriegte",
    participle: "gekriegt",
    translations: ["to get (informal)", "to receive"],
    derived: ["kriege", "kriegst", "kriegt", "kriegen", "kriegt", "kriegen"],
    varieties: [
      {
        variant: "kriegen + Akkusativ",
        prepositions: [],
        explanation: "To get something (colloquial).",
        examples: ["Ich kriege ein Eis.", "Kriegst du das hin?"]
      }
    ]
  },
  {
    base: "bringen",
    past: "brachte",
    participle: "gebracht",
    translations: ["to bring"],
    derived: ["bringe", "bringst", "bringt", "bringen", "bringt", "bringen"],
    varieties: [
      {
        variant: "bringen + Dativ + Akkusativ",
        prepositions: [],
        explanation: "To bring something to someone.",
        examples: ["Ich bringe dir das Buch.", "Bring mir Wasser!"]
      },
      {
        variant: "mitbringen",
        prepositions: [],
        explanation: "Separable verb: to bring along.",
        examples: ["Bring deine Freunde mit!", "Ich bringe Kuchen mit."],
        derived: ["bringe mit", "bringst mit", "bringt mit"]
      }
    ]
  },
  {
    base: "holen",
    past: "holte",
    participle: "geholt",
    translations: ["to fetch", "to get"],
    derived: ["hole", "holst", "holt", "holen", "holt", "holen"],
    varieties: [
      {
        variant: "holen + Akkusativ",
        prepositions: [],
        explanation: "To fetch or get something.",
        examples: ["Ich hole das Buch.", "Hol mir einen Kaffee!"]
      },
      {
        variant: "abholen",
        prepositions: [],
        explanation: "Separable verb: to pick up.",
        examples: ["Ich hole dich ab.", "Wann holst du mich ab?"],
        derived: ["hole ab", "holst ab", "holt ab"]
      }
    ]
  },
  {
    base: "tragen",
    past: "trug",
    participle: "getragen",
    translations: ["to carry", "to wear"],
    derived: ["trage", "trägst", "trägt", "tragen", "tragt", "tragen"],
    varieties: [
      {
        variant: "tragen + Akkusativ",
        prepositions: [],
        explanation: "To carry or wear something.",
        examples: ["Ich trage eine Tasche.", "Sie trägt ein rotes Kleid."]
      }
    ]
  },
  {
    base: "legen",
    past: "legte",
    participle: "gelegt",
    translations: ["to lay", "to put (horizontal)"],
    derived: ["lege", "legst", "legt", "legen", "legt", "legen"],
    varieties: [
      {
        variant: "legen + Akkusativ + Präposition",
        prepositions: ["auf", "in", "unter"],
        explanation: "To lay something somewhere.",
        examples: ["Ich lege das Buch auf den Tisch.", "Leg die Jacke auf das Bett!"]
      }
    ]
  },
  {
    base: "stellen",
    past: "stellte",
    participle: "gestellt",
    translations: ["to put", "to place (vertical)"],
    derived: ["stelle", "stellst", "stellt", "stellen", "stellt", "stellen"],
    varieties: [
      {
        variant: "stellen + Akkusativ + Präposition",
        prepositions: ["auf", "in", "neben"],
        explanation: "To put something somewhere upright.",
        examples: ["Ich stelle die Flasche auf den Tisch.", "Stell die Tasche in die Ecke!"]
      }
    ]
  },
  {
    base: "setzen",
    past: "setzte",
    participle: "gesetzt",
    translations: ["to set", "to put (sitting)"],
    derived: ["setze", "setzt", "setzt", "setzen", "setzt", "setzen"],
    varieties: [
      {
        variant: "sich setzen",
        prepositions: [],
        explanation: "Reflexive: to sit down.",
        examples: ["Ich setze mich.", "Setz dich!"],
        derived: ["setze mich", "setzt dich", "setzt sich"]
      }
    ]
  },
  {
    base: "liegen",
    past: "lag",
    participle: "gelegen",
    translations: ["to lie", "to be lying"],
    derived: ["liege", "liegst", "liegt", "liegen", "liegt", "liegen"],
    varieties: [
      {
        variant: "liegen + Präposition",
        prepositions: ["auf", "in", "unter"],
        explanation: "To be in a lying position.",
        examples: ["Das Buch liegt auf dem Tisch.", "Ich liege im Bett."]
      }
    ]
  },
  {
    base: "stehen",
    past: "stand",
    participle: "gestanden",
    translations: ["to stand"],
    derived: ["stehe", "stehst", "steht", "stehen", "steht", "stehen"],
    varieties: [
      {
        variant: "stehen + Präposition",
        prepositions: ["vor", "neben", "hinter"],
        explanation: "To be standing somewhere.",
        examples: ["Er steht vor der Tür.", "Das Auto steht in der Garage."]
      },
      {
        variant: "aufstehen",
        prepositions: [],
        explanation: "Separable verb: to get up, to stand up.",
        examples: ["Ich stehe früh auf.", "Wann stehst du auf?"],
        derived: ["stehe auf", "stehst auf", "steht auf"]
      }
    ]
  },
  {
    base: "sitzen",
    past: "saß",
    participle: "gesessen",
    translations: ["to sit"],
    derived: ["sitze", "sitzt", "sitzt", "sitzen", "sitzt", "sitzen"],
    varieties: [
      {
        variant: "sitzen + Präposition",
        prepositions: ["auf", "an", "in"],
        explanation: "To be sitting somewhere.",
        examples: ["Ich sitze auf dem Stuhl.", "Sie sitzt am Tisch."]
      }
    ]
  },
  {
    base: "fahren",
    past: "fuhr",
    participle: "gefahren",
    translations: ["to drive", "to go (by vehicle)", "to ride"],
    derived: ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"],
    varieties: [
      {
        variant: "fahren + nach",
        prepositions: ["nach"],
        explanation: "To go to a place by vehicle.",
        examples: ["Ich fahre nach Berlin.", "Wir fahren nach Hause."]
      },
      {
        variant: "fahren + mit",
        prepositions: ["mit"],
        explanation: "To go by means of transport.",
        examples: ["Ich fahre mit dem Bus.", "Fährst du mit dem Auto?"]
      },
      {
        variant: "abfahren",
        prepositions: [],
        explanation: "Separable verb: to depart, to leave.",
        examples: ["Der Zug fährt um 10 Uhr ab.", "Wann fährst du ab?"],
        derived: ["fahre ab", "fährst ab", "fährt ab"]
      }
    ]
  },
  {
    base: "laufen",
    past: "lief",
    participle: "gelaufen",
    translations: ["to run", "to walk"],
    derived: ["laufe", "läufst", "läuft", "laufen", "lauft", "laufen"],
    varieties: [
      {
        variant: "laufen + Präposition",
        prepositions: ["durch", "zu"],
        explanation: "To run or walk somewhere.",
        examples: ["Ich laufe durch den Park.", "Er läuft zur Schule."]
      }
    ]
  },
  {
    base: "rennen",
    past: "rannte",
    participle: "gerannt",
    translations: ["to run (fast)"],
    derived: ["renne", "rennst", "rennt", "rennen", "rennt", "rennen"],
    varieties: [
      {
        variant: "rennen + Präposition",
        prepositions: ["zu", "nach"],
        explanation: "To run quickly somewhere.",
        examples: ["Ich renne nach Hause.", "Er rennt zum Bus."]
      }
    ]
  },
  {
    base: "fliegen",
    past: "flog",
    participle: "geflogen",
    translations: ["to fly"],
    derived: ["fliege", "fliegst", "fliegt", "fliegen", "fliegt", "fliegen"],
    varieties: [
      {
        variant: "fliegen + nach",
        prepositions: ["nach"],
        explanation: "To fly to a place.",
        examples: ["Ich fliege nach Paris.", "Wir fliegen nach Spanien."]
      }
    ]
  },
  {
    base: "schwimmen",
    past: "schwamm",
    participle: "geschwommen",
    translations: ["to swim"],
    derived: ["schwimme", "schwimmst", "schwimmt", "schwimmen", "schwimmt", "schwimmen"],
    varieties: [
      {
        variant: "schwimmen + in",
        prepositions: ["in"],
        explanation: "To swim in a place.",
        examples: ["Ich schwimme im Meer.", "Schwimmst du gern im Pool?"]
      }
    ]
  },
  {
    base: "springen",
    past: "sprang",
    participle: "gesprungen",
    translations: ["to jump"],
    derived: ["springe", "springst", "springt", "springen", "springt", "springen"],
    varieties: [
      {
        variant: "springen + über",
        prepositions: ["über"],
        explanation: "To jump over something.",
        examples: ["Ich springe über den Zaun.", "Spring über die Pfütze!"]
      }
    ]
  },
  {
    base: "fallen",
    past: "fiel",
    participle: "gefallen",
    translations: ["to fall"],
    derived: ["falle", "fällst", "fällt", "fallen", "fallt", "fallen"],
    varieties: [
      {
        variant: "fallen + von",
        prepositions: ["von"],
        explanation: "To fall from something.",
        examples: ["Das Buch fällt vom Tisch.", "Pass auf, dass du nicht fällst!"]
      }
    ]
  },
  {
    base: "steigen",
    past: "stieg",
    participle: "gestiegen",
    translations: ["to climb", "to rise"],
    derived: ["steige", "steigst", "steigt", "steigen", "steigt", "steigen"],
    varieties: [
      {
        variant: "steigen + auf",
        prepositions: ["auf"],
        explanation: "To climb onto something.",
        examples: ["Ich steige auf den Berg.", "Steig auf das Fahrrad!"]
      },
      {
        variant: "einsteigen",
        prepositions: [],
        explanation: "Separable verb: to get in, to board.",
        examples: ["Steig ein!", "Wir steigen in den Bus ein."],
        derived: ["steige ein", "steigst ein", "steigt ein"]
      }
    ]
  },
  {
    base: "ziehen",
    past: "zog",
    participle: "gezogen",
    translations: ["to pull", "to move (residence)"],
    derived: ["ziehe", "ziehst", "zieht", "ziehen", "zieht", "ziehen"],
    varieties: [
      {
        variant: "ziehen + Akkusativ",
        prepositions: [],
        explanation: "To pull something.",
        examples: ["Ich ziehe die Tür auf.", "Zieh am Seil!"]
      },
      {
        variant: "umziehen",
        prepositions: [],
        explanation: "Separable verb: to move (house).",
        examples: ["Wir ziehen nächste Woche um.", "Ziehst du bald um?"],
        derived: ["ziehe um", "ziehst um", "zieht um"]
      }
    ]
  },
  {
    base: "drücken",
    past: "drückte",
    participle: "gedrückt",
    translations: ["to push", "to press"],
    derived: ["drücke", "drückst", "drückt", "drücken", "drückt", "drücken"],
    varieties: [
      {
        variant: "drücken + Akkusativ",
        prepositions: [],
        explanation: "To push or press something.",
        examples: ["Drück den Knopf!", "Ich drücke die Tür auf."]
      }
    ]
  },
  {
    base: "öffnen",
    past: "öffnete",
    participle: "geöffnet",
    translations: ["to open"],
    derived: ["öffne", "öffnest", "öffnet", "öffnen", "öffnet", "öffnen"],
    varieties: [
      {
        variant: "öffnen + Akkusativ",
        prepositions: [],
        explanation: "To open something.",
        examples: ["Ich öffne die Tür.", "Öffne das Fenster!"]
      }
    ]
  },
  {
    base: "schließen",
    past: "schloss",
    participle: "geschlossen",
    translations: ["to close"],
    derived: ["schließe", "schließt", "schließt", "schließen", "schließt", "schließen"],
    varieties: [
      {
        variant: "schließen + Akkusativ",
        prepositions: [],
        explanation: "To close something.",
        examples: ["Ich schließe die Tür.", "Schließ das Fenster!"]
      }
    ]
  },
  {
    base: "essen",
    past: "aß",
    participle: "gegessen",
    translations: ["to eat"],
    derived: ["esse", "isst", "isst", "essen", "esst", "essen"],
    varieties: [
      {
        variant: "essen + Akkusativ",
        prepositions: [],
        explanation: "To eat something.",
        examples: ["Ich esse einen Apfel.", "Was isst du gern?"]
      }
    ]
  },
  {
    base: "trinken",
    past: "trank",
    participle: "getrunken",
    translations: ["to drink"],
    derived: ["trinke", "trinkst", "trinkt", "trinken", "trinkt", "trinken"],
    varieties: [
      {
        variant: "trinken + Akkusativ",
        prepositions: [],
        explanation: "To drink something.",
        examples: ["Ich trinke Wasser.", "Was trinkst du?"]
      }
    ]
  },
  {
    base: "kochen",
    past: "kochte",
    participle: "gekocht",
    translations: ["to cook"],
    derived: ["koche", "kochst", "kocht", "kochen", "kocht", "kochen"],
    varieties: [
      {
        variant: "kochen + Akkusativ",
        prepositions: [],
        explanation: "To cook something.",
        examples: ["Ich koche Nudeln.", "Was kochst du heute?"]
      }
    ]
  },
  {
    base: "backen",
    past: "backte",
    participle: "gebacken",
    translations: ["to bake"],
    derived: ["backe", "backst", "backt", "backen", "backt", "backen"],
    varieties: [
      {
        variant: "backen + Akkusativ",
        prepositions: [],
        explanation: "To bake something.",
        examples: ["Ich backe einen Kuchen.", "Backst du gern?"]
      }
    ]
  },
  {
    base: "braten",
    past: "briet",
    participle: "gebraten",
    translations: ["to fry", "to roast"],
    derived: ["brate", "brätst", "brät", "braten", "bratet", "braten"],
    varieties: [
      {
        variant: "braten + Akkusativ",
        prepositions: [],
        explanation: "To fry or roast something.",
        examples: ["Ich brate ein Steak.", "Sie brät Kartoffeln."]
      }
    ]
  },
  {
    base: "schneiden",
    past: "schnitt",
    participle: "geschnitten",
    translations: ["to cut"],
    derived: ["schneide", "schneidest", "schneidet", "schneiden", "schneidet", "schneiden"],
    varieties: [
      {
        variant: "schneiden + Akkusativ",
        prepositions: [],
        explanation: "To cut something.",
        examples: ["Ich schneide das Brot.", "Schneid die Tomaten!"]
      }
    ]
  },
  {
    base: "waschen",
    past: "wusch",
    participle: "gewaschen",
    translations: ["to wash"],
    derived: ["wasche", "wäschst", "wäscht", "waschen", "wascht", "waschen"],
    varieties: [
      {
        variant: "waschen + Akkusativ",
        prepositions: [],
        explanation: "To wash something.",
        examples: ["Ich wasche meine Hände.", "Wäschst du das Auto?"]
      },
      {
        variant: "sich waschen",
        prepositions: [],
        explanation: "Reflexive: to wash oneself.",
        examples: ["Ich wasche mich.", "Wasch dich!"],
        derived: ["wasche mich", "wäschst dich", "wäscht sich"]
      }
    ]
  },
  {
    base: "putzen",
    past: "putzte",
    participle: "geputzt",
    translations: ["to clean"],
    derived: ["putze", "putzt", "putzt", "putzen", "putzt", "putzen"],
    varieties: [
      {
        variant: "putzen + Akkusativ",
        prepositions: [],
        explanation: "To clean something.",
        examples: ["Ich putze das Zimmer.", "Putz deine Zähne!"]
      }
    ]
  },
  {
    base: "räumen",
    past: "räumte",
    participle: "geräumt",
    translations: ["to clear", "to tidy"],
    derived: ["räume", "räumst", "räumt", "räumen", "räumt", "räumen"],
    varieties: [
      {
        variant: "aufräumen",
        prepositions: [],
        explanation: "Separable verb: to tidy up.",
        examples: ["Ich räume mein Zimmer auf.", "Räum auf!"],
        derived: ["räume auf", "räumst auf", "räumt auf"]
      }
    ]
  },
  {
    base: "kaufen",
    past: "kaufte",
    participle: "gekauft",
    translations: ["to buy"],
    derived: ["kaufe", "kaufst", "kauft", "kaufen", "kauft", "kaufen"],
    varieties: [
      {
        variant: "kaufen + Akkusativ",
        prepositions: [],
        explanation: "To buy something.",
        examples: ["Ich kaufe ein Buch.", "Was kaufst du?"]
      },
      {
        variant: "einkaufen",
        prepositions: [],
        explanation: "Separable verb: to shop.",
        examples: ["Ich kaufe ein.", "Gehst du einkaufen?"],
        derived: ["kaufe ein", "kaufst ein", "kauft ein"]
      }
    ]
  },
  {
    base: "verkaufen",
    past: "verkaufte",
    participle: "verkauft",
    translations: ["to sell"],
    derived: ["verkaufe", "verkaufst", "verkauft", "verkaufen", "verkauft", "verkaufen"],
    varieties: [
      {
        variant: "verkaufen + Akkusativ",
        prepositions: [],
        explanation: "To sell something.",
        examples: ["Ich verkaufe mein Auto.", "Verkaufst du dein Fahrrad?"]
      }
    ]
  },
  {
    base: "bezahlen",
    past: "bezahlte",
    participle: "bezahlt",
    translations: ["to pay"],
    derived: ["bezahle", "bezahlst", "bezahlt", "bezahlen", "bezahlt", "bezahlen"],
    varieties: [
      {
        variant: "bezahlen + Akkusativ",
        prepositions: [],
        explanation: "To pay for something.",
        examples: ["Ich bezahle die Rechnung.", "Bezahlst du das Essen?"]
      }
    ]
  },
  {
    base: "kosten",
    past: "kostete",
    participle: "gekostet",
    translations: ["to cost"],
    derived: ["koste", "kostest", "kostet", "kosten", "kostet", "kosten"],
    varieties: [
      {
        variant: "kosten + Akkusativ",
        prepositions: [],
        explanation: "To cost an amount.",
        examples: ["Das kostet 10 Euro.", "Was kostet das?"]
      }
    ]
  },
  {
    base: "brauchen",
    past: "brauchte",
    participle: "gebraucht",
    translations: ["to need"],
    derived: ["brauche", "brauchst", "braucht", "brauchen", "braucht", "brauchen"],
    varieties: [
      {
        variant: "brauchen + Akkusativ",
        prepositions: [],
        explanation: "To need something.",
        examples: ["Ich brauche Hilfe.", "Was brauchst du?"]
      }
    ]
  },
  {
    base: "warten",
    past: "wartete",
    participle: "gewartet",
    translations: ["to wait"],
    derived: ["warte", "wartest", "wartet", "warten", "wartet", "warten"],
    varieties: [
      {
        variant: "warten + auf",
        prepositions: ["auf"],
        explanation: "To wait for someone or something.",
        examples: ["Ich warte auf dich.", "Worauf wartest du?"]
      }
    ]
  },
  {
    base: "dauern",
    past: "dauerte",
    participle: "gedauert",
    translations: ["to last", "to take (time)"],
    derived: ["dauere", "dauerst", "dauert", "dauern", "dauert", "dauern"],
    varieties: [
      {
        variant: "dauern + Akkusativ",
        prepositions: [],
        explanation: "To last for a period of time.",
        examples: ["Der Film dauert zwei Stunden.", "Wie lange dauert das?"]
      }
    ]
  },
  {
    base: "beginnen",
    past: "begann",
    participle: "begonnen",
    translations: ["to begin", "to start"],
    derived: ["beginne", "beginnst", "beginnt", "beginnen", "beginnt", "beginnen"],
    varieties: [
      {
        variant: "beginnen + mit",
        prepositions: ["mit"],
        explanation: "To begin with something.",
        examples: ["Ich beginne mit der Arbeit.", "Wann beginnt der Film?"]
      }
    ]
  },
  {
    base: "anfangen",
    past: "fing an",
    participle: "angefangen",
    translations: ["to start", "to begin"],
    derived: ["fange an", "fängst an", "fängt an", "fangen an", "fangt an"],
    varieties: [
      {
        variant: "anfangen + mit",
        prepositions: ["mit"],
        explanation: "Separable verb: to start with something.",
        examples: ["Ich fange mit der Arbeit an.", "Fang an!"]
      }
    ]
  },
  {
    base: "aufhören",
    past: "hörte auf",
    participle: "aufgehört",
    translations: ["to stop", "to cease"],
    derived: ["höre auf", "hörst auf", "hört auf", "hören auf"],
    varieties: [
      {
        variant: "aufhören + mit",
        prepositions: ["mit"],
        explanation: "Separable verb: to stop doing something.",
        examples: ["Ich höre mit dem Rauchen auf.", "Hör auf!"]
      }
    ]
  },
  {
    base: "enden",
    past: "endete",
    participle: "geendet",
    translations: ["to end"],
    derived: ["ende", "endest", "endet", "enden", "endet", "enden"],
    varieties: [
      {
        variant: "enden + mit",
        prepositions: ["mit"],
        explanation: "To end with something.",
        examples: ["Der Film endet gut.", "Wann endet die Schule?"]
      }
    ]
  },
  {
    base: "bleiben",
    past: "blieb",
    participle: "geblieben",
    translations: ["to stay", "to remain"],
    derived: ["bleibe", "bleibst", "bleibt", "bleiben", "bleibt", "bleiben"],
    varieties: [
      {
        variant: "bleiben + Präposition",
        prepositions: ["in", "bei"],
        explanation: "To stay somewhere.",
        examples: ["Ich bleibe zu Hause.", "Bleib bei mir!"]
      }
    ]
  },
  {
    base: "passieren",
    past: "passierte",
    participle: "passiert",
    translations: ["to happen"],
    derived: ["passiere", "passierst", "passiert", "passieren", "passiert", "passieren"],
    varieties: [
      {
        variant: "passieren",
        prepositions: [],
        explanation: "To happen or occur.",
        examples: ["Was ist passiert?", "Das passiert oft."]
      }
    ]
  },
  {
    base: "geschehen",
    past: "geschah",
    participle: "geschehen",
    translations: ["to happen", "to occur"],
    derived: ["geschehe", "geschieht", "geschieht", "geschehen"],
    varieties: [
      {
        variant: "geschehen",
        prepositions: [],
        explanation: "To happen (more formal than passieren).",
        examples: ["Was ist geschehen?", "Es geschah gestern."]
      }
    ]
  },
  {
    base: "spielen",
    past: "spielte",
    participle: "gespielt",
    translations: ["to play"],
    derived: ["spiele", "spielst", "spielt", "spielen", "spielt", "spielen"],
    varieties: [
      {
        variant: "spielen + Akkusativ",
        prepositions: [],
        explanation: "To play a game or instrument.",
        examples: ["Ich spiele Fußball.", "Spielst du Gitarre?"]
      }
    ]
  },
  {
    base: "tanzen",
    past: "tanzte",
    participle: "getanzt",
    translations: ["to dance"],
    derived: ["tanze", "tanzt", "tanzt", "tanzen", "tanzt", "tanzen"],
    varieties: [
      {
        variant: "tanzen + mit",
        prepositions: ["mit"],
        explanation: "To dance with someone.",
        examples: ["Ich tanze mit dir.", "Tanzt du gern?"]
      }
    ]
  },
  {
    base: "singen",
    past: "sang",
    participle: "gesungen",
    translations: ["to sing"],
    derived: ["singe", "singst", "singt", "singen", "singt", "singen"],
    varieties: [
      {
        variant: "singen + Akkusativ",
        prepositions: [],
        explanation: "To sing something.",
        examples: ["Ich singe ein Lied.", "Singst du gern?"]
      }
    ]
  },
  {
    base: "lachen",
    past: "lachte",
    participle: "gelacht",
    translations: ["to laugh"],
    derived: ["lache", "lachst", "lacht", "lachen", "lacht", "lachen"],
    varieties: [
      {
        variant: "lachen + über",
        prepositions: ["über"],
        explanation: "To laugh about something.",
        examples: ["Ich lache über den Witz.", "Worüber lachst du?"]
      }
    ]
  },
  {
    base: "weinen",
    past: "weinte",
    participle: "geweint",
    translations: ["to cry"],
    derived: ["weine", "weinst", "weint", "weinen", "weint", "weinen"],
    varieties: [
      {
        variant: "weinen + über",
        prepositions: ["über"],
        explanation: "To cry about something.",
        examples: ["Sie weint über den Film.", "Warum weinst du?"]
      }
    ]
  },
  {
    base: "lächeln",
    past: "lächelte",
    participle: "gelächelt",
    translations: ["to smile"],
    derived: ["lächle", "lächelst", "lächelt", "lächeln", "lächelt", "lächeln"],
    varieties: [
      {
        variant: "lächeln",
        prepositions: [],
        explanation: "To smile.",
        examples: ["Sie lächelt.", "Er lächelt freundlich."]
      }
    ]
  },
  {
    base: "sich freuen",
    past: "freute sich",
    participle: "gefreut",
    translations: ["to be happy", "to be glad"],
    reflexive: true,
    derived: ["freue mich", "freust dich", "freut sich", "freuen uns"],
    varieties: [
      {
        variant: "sich freuen auf",
        prepositions: ["auf"],
        explanation: "To look forward to something.",
        examples: ["Ich freue mich auf das Wochenende.", "Worauf freust du dich?"]
      },
      {
        variant: "sich freuen über",
        prepositions: ["über"],
        explanation: "To be happy about something that happened.",
        examples: ["Ich freue mich über das Geschenk.", "Sie freut sich über die Nachricht."]
      }
    ]
  },
  {
    base: "hoffen",
    past: "hoffte",
    participle: "gehofft",
    translations: ["to hope"],
    derived: ["hoffe", "hoffst", "hofft", "hoffen", "hofft", "hoffen"],
    varieties: [
      {
        variant: "hoffen + auf",
        prepositions: ["auf"],
        explanation: "To hope for something.",
        examples: ["Ich hoffe auf gutes Wetter.", "Worauf hoffst du?"]
      }
    ]
  },
  {
    base: "wünschen",
    past: "wünschte",
    participle: "gewünscht",
    translations: ["to wish"],
    derived: ["wünsche", "wünschst", "wünscht", "wünschen", "wünscht", "wünschen"],
    varieties: [
      {
        variant: "wünschen + Dativ + Akkusativ",
        prepositions: [],
        explanation: "To wish something to someone.",
        examples: ["Ich wünsche dir viel Glück!", "Was wünschst du dir?"]
      },
      {
        variant: "sich wünschen",
        prepositions: [],
        explanation: "Reflexive: to wish for oneself.",
        examples: ["Ich wünsche mir ein Fahrrad.", "Was wünschst du dir zum Geburtstag?"],
        derived: ["wünsche mir", "wünschst dir", "wünscht sich"]
      }
    ]
  },
  {
    base: "lieben",
    past: "liebte",
    participle: "geliebt",
    translations: ["to love"],
    derived: ["liebe", "liebst", "liebt", "lieben", "liebt", "lieben"],
    varieties: [
      {
        variant: "lieben + Akkusativ",
        prepositions: [],
        explanation: "To love someone or something.",
        examples: ["Ich liebe dich.", "Sie liebt Musik."]
      }
    ]
  },
  {
    base: "hassen",
    past: "hasste",
    participle: "gehasst",
    translations: ["to hate"],
    derived: ["hasse", "hasst", "hasst", "hassen", "hasst", "hassen"],
    varieties: [
      {
        variant: "hassen + Akkusativ",
        prepositions: [],
        explanation: "To hate someone or something.",
        examples: ["Ich hasse Spinnen.", "Er hasst den Regen."]
      }
    ]
  },
  {
    base: "helfen",
    past: "half",
    participle: "geholfen",
    translations: ["to help"],
    derived: ["helfe", "hilfst", "hilft", "helfen", "helft", "helfen"],
    varieties: [
      {
        variant: "helfen + Dativ",
        prepositions: [],
        explanation: "To help someone.",
        examples: ["Ich helfe dir.", "Hilfst du mir?"]
      },
      {
        variant: "helfen + bei",
        prepositions: ["bei"],
        explanation: "To help with something.",
        examples: ["Ich helfe dir bei den Hausaufgaben.", "Kannst du mir beim Umzug helfen?"]
      }
    ]
  },
  {
    base: "danken",
    past: "dankte",
    participle: "gedankt",
    translations: ["to thank"],
    derived: ["danke", "dankst", "dankt", "danken", "dankt", "danken"],
    varieties: [
      {
        variant: "danken + Dativ",
        prepositions: [],
        explanation: "To thank someone.",
        examples: ["Ich danke dir.", "Danke für die Hilfe!"]
      },
      {
        variant: "danken + für",
        prepositions: ["für"],
        explanation: "To thank for something.",
        examples: ["Ich danke dir für das Geschenk.", "Wofür dankst du mir?"]
      }
    ]
  },
  {
    base: "grüßen",
    past: "grüßte",
    participle: "gegrüßt",
    translations: ["to greet"],
    derived: ["grüße", "grüßt", "grüßt", "grüßen", "grüßt", "grüßen"],
    varieties: [
      {
        variant: "grüßen + Akkusativ",
        prepositions: [],
        explanation: "To greet someone.",
        examples: ["Ich grüße dich.", "Grüß deine Eltern!"]
      }
    ]
  },
  {
    base: "treffen",
    past: "traf",
    participle: "getroffen",
    translations: ["to meet"],
    derived: ["treffe", "triffst", "trifft", "treffen", "trefft", "treffen"],
    varieties: [
      {
        variant: "treffen + Akkusativ",
        prepositions: [],
        explanation: "To meet someone.",
        examples: ["Ich treffe meine Freunde.", "Wen triffst du heute?"]
      },
      {
        variant: "sich treffen",
        prepositions: [],
        explanation: "Reflexive: to meet (each other).",
        examples: ["Wir treffen uns um 5 Uhr.", "Wo treffen wir uns?"],
        derived: ["treffe mich", "triffst dich", "trifft sich"]
      }
    ]
  },
  {
    base: "besuchen",
    past: "besuchte",
    participle: "besucht",
    translations: ["to visit"],
    derived: ["besuche", "besuchst", "besucht", "besuchen", "besucht", "besuchen"],
    varieties: [
      {
        variant: "besuchen + Akkusativ",
        prepositions: [],
        explanation: "To visit someone or someplace.",
        examples: ["Ich besuche meine Oma.", "Besuchst du das Museum?"]
      }
    ]
  },
  {
    base: "einladen",
    past: "lud ein",
    participle: "eingeladen",
    translations: ["to invite"],
    derived: ["lade ein", "lädst ein", "lädt ein", "laden ein"],
    varieties: [
      {
        variant: "einladen + Akkusativ + zu",
        prepositions: ["zu"],
        explanation: "Separable verb: to invite someone to something.",
        examples: ["Ich lade dich zur Party ein.", "Lädst du mich ein?"]
      }
    ]
  },
  {
    base: "schlafen",
    past: "schlief",
    participle: "geschlafen",
    translations: ["to sleep"],
    derived: ["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"],
    varieties: [
      {
        variant: "schlafen + in",
        prepositions: ["in"],
        explanation: "To sleep in a place.",
        examples: ["Ich schlafe im Bett.", "Schläfst du gut?"]
      },
      {
        variant: "einschlafen",
        prepositions: [],
        explanation: "Separable verb: to fall asleep.",
        examples: ["Ich schlafe schnell ein.", "Wann schläfst du ein?"],
        derived: ["schlafe ein", "schläfst ein", "schläft ein"]
      }
    ]
  },
  {
    base: "aufwachen",
    past: "wachte auf",
    participle: "aufgewacht",
    translations: ["to wake up"],
    derived: ["wache auf", "wachst auf", "wacht auf", "wachen auf"],
    varieties: [
      {
        variant: "aufwachen",
        prepositions: [],
        explanation: "Separable verb: to wake up.",
        examples: ["Ich wache früh auf.", "Wann wachst du auf?"]
      }
    ]
  },
  {
    base: "träumen",
    past: "träumte",
    participle: "geträumt",
    translations: ["to dream"],
    derived: ["träume", "träumst", "träumt", "träumen", "träumt", "träumen"],
    varieties: [
      {
        variant: "träumen + von",
        prepositions: ["von"],
        explanation: "To dream of or about something.",
        examples: ["Ich träume von dir.", "Wovon träumst du?"]
      }
    ]
  },
  {
    base: "rufen",
    past: "rief",
    participle: "gerufen",
    translations: ["to call", "to shout"],
    derived: ["rufe", "rufst", "ruft", "rufen", "ruft", "rufen"],
    varieties: [
      {
        variant: "rufen + Akkusativ",
        prepositions: [],
        explanation: "To call someone.",
        examples: ["Ich rufe dich.", "Ruf mich an!"]
      },
      {
        variant: "anrufen",
        prepositions: [],
        explanation: "Separable verb: to call on the phone.",
        examples: ["Ich rufe dich an.", "Rufst du mich an?"],
        derived: ["rufe an", "rufst an", "ruft an"]
      }
    ]
  },
  {
    base: "schreiben",
    past: "schrieb",
    participle: "geschrieben",
    translations: ["to write"],
    derived: ["schreibe", "schreibst", "schreibt", "schreiben", "schreibt", "schreiben"],
    varieties: [
      {
        variant: "schreiben + Akkusativ",
        prepositions: [],
        explanation: "To write something.",
        examples: ["Ich schreibe einen Brief.", "Was schreibst du?"]
      },
      {
        variant: "schreiben + an",
        prepositions: ["an"],
        explanation: "To write to someone.",
        examples: ["Ich schreibe an meine Oma.", "Schreibst du an deinen Freund?"]
      }
    ]
  },
  {
    base: "lesen",
    past: "las",
    participle: "gelesen",
    translations: ["to read"],
    derived: ["lese", "liest", "liest", "lesen", "lest", "lesen"],
    varieties: [
      {
        variant: "lesen + Akkusativ",
        prepositions: [],
        explanation: "To read something.",
        examples: ["Ich lese ein Buch.", "Was liest du?"]
      }
    ]
  },
  {
    base: "schicken",
    past: "schickte",
    participle: "geschickt",
    translations: ["to send"],
    derived: ["schicke", "schickst", "schickt", "schicken", "schickt", "schicken"],
    varieties: [
      {
        variant: "schicken + Dativ + Akkusativ",
        prepositions: [],
        explanation: "To send something to someone.",
        examples: ["Ich schicke dir eine Email.", "Schickst du mir das Foto?"]
      }
    ]
  },
  {
    base: "empfangen",
    past: "empfing",
    participle: "empfangen",
    translations: ["to receive"],
    derived: ["empfange", "empfängst", "empfängt", "empfangen", "empfangt", "empfangen"],
    varieties: [
      {
        variant: "empfangen + Akkusativ",
        prepositions: [],
        explanation: "To receive something or someone.",
        examples: ["Ich empfange Gäste.", "Hast du meine Nachricht empfangen?"]
      }
    ]
  },
  {
    base: "vergessen",
    past: "vergaß",
    participle: "vergessen",
    translations: ["to forget"],
    derived: ["vergesse", "vergisst", "vergisst", "vergessen", "vergesst", "vergessen"],
    varieties: [
      {
        variant: "vergessen + Akkusativ",
        prepositions: [],
        explanation: "To forget something.",
        examples: ["Ich vergesse oft Namen.", "Vergiss das nicht!"]
      }
    ]
  },
  {
    base: "erinnern",
    past: "erinnerte",
    participle: "erinnert",
    translations: ["to remember", "to remind"],
    derived: ["erinnere", "erinnerst", "erinnert", "erinnern", "erinnert", "erinnern"],
    varieties: [
      {
        variant: "sich erinnern an",
        prepositions: ["an"],
        explanation: "Reflexive: to remember something.",
        examples: ["Ich erinnere mich an dich.", "Erinnerst du dich an gestern?"],
        derived: ["erinnere mich", "erinnerst dich", "erinnert sich"]
      },
      {
        variant: "erinnern + Akkusativ + an",
        prepositions: ["an"],
        explanation: "To remind someone of something.",
        examples: ["Ich erinnere dich an den Termin.", "Erinner mich daran!"]
      }
    ]
  }
];

export default verbsA1;
