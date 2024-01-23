

function create(){

    const moviesList = JSON.parse(`[
        {
        "title":"The Sword of Doom",
        "year":"1966",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BMzhjY2UxNjctNTBjMC00ZTNiLTg5YzktNDBhNDdlNzQxZDY3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX190_CR0,2,190,281_.jpg",
        "director":"Kihachi Okamoto",
        "description": "Through his unconscionable actions against others, a sociopath samurai builds a trail of vendettas that follow him closely.",
        "rating": "7.9",
        "actors": "['Tatsuya Nakadai','Michiyo Aratama','Yûzô Kayama']"
        },
        {
        "title":"Samurai Assassin",
        "year":"1965",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BMzE4OWJmODgtMDNjYy00Njg5LTllN2YtNTFmYzNlMTk5MDMxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY281_CR4,0,190,281_.jpg",
        "rating":"7.4",
        "description":"February 17 to March 3, 1860, inside Edo castle. A group of assassins wait by Sakurada Gate to kill the lord of the House of Ii, a powerful man in the Tokugawa government, which has ruled Japan for 300 years. They suspect a traitor in their midst, and their suspicions fall on Niiro, an impoverished ronin who dreams of samurai status, and Kurihara, an aristocratic samu...",
        "director":"Kihachi Okamoto",
        "actors":"['Toshirô Mifune','Keiju Kobayashi','Michiyo Aratama']"
        },
        {
        "title":"Goyokin",
        "year":"1969",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BMGYyNmJlYjYtM2U3NS00OWFlLTlkZmQtMTUyYWRjZGM4NTE5XkEyXkFqcGdeQXVyMjM3MDE4Njc@._V1_QL75_UY281_CR6,0,190,281_.jpg",
        "rating":"7.6",
        "description":"A guilt-haunted samurai warrior attempts to stop a massacre taking place.",
        "director":"Hideo Gosha",
        "actors":"['Tatsuya Nakadai','Tetsurô Tanba','Yôko Tsukasa']"
        },
        {
        "title":"Sword of the Beast",
        "year":"1965",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BODhmNTJlODYtZTMwZi00MTA2LTg3NzEtM2JiMDRmYzk4NGJlXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UY281_CR6,0,190,281_.jpg",
        "rating":"7.5",
        "description":"After killing a counselor of his clan, a fugitive samurai befriends a couple poaching the shogun's gold in the mountains.",
        "director":"Hideo Gosha",
        "actors":"['Mikijirô Hira', 'Gô Katô', 'Shima Iwashita']"
        },
        {
        "title":"Three Outlaw Samurai",
        "year":"1964",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNGEwMmE4NzItNjVkMC00MDRlLTg2ZjctMmU0MDZkMDZmMDI1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY281_CR4,0,190,281_.jpg",
        "rating":"7.6",
        "description":"When poor peasants kidnap a magistrate's daughter to coerce him into reducing their unfair taxes, a wandering ronin decides to give them some help.",
        "director":"Hideo Gosha",
        "actors":"['Keiichi Abe', 'Hideo Gosha', 'Gin ichi Kishimoto']"
        },
        {
        "title":"Kill!",
        "year":"1968",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BODc0ZDIyNDEtZjQ0MC00NTM5LTgyMGUtMzRmNTYyYzkzODIyXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX190_CR0,2,190,281_.jpg",
        "rating":"7.4",
        "description":"Two ronin - an ex-samurai and an ex-farmer - get caught up in a local official's complex game of murder and betrayal.",
        "director":"Kihachi Okamoto",
        "actors":"['Tatsuya Nakadai','Etsushi Takahashi','Yuriko Hoshi']"
        },
        {
        "title":"Hitokiri",
        "year":"1969",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BZmU0YzEyOWUtNjgwZS00MDdmLWFkMzAtOTM5N2RjYzYzMjllXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_QL75_UY281_CR9,0,190,281_.jpg",
        "rating":"7.4",
        "description":"A destitute ronin allies himself with an established clan, but its ruthless leader tries to turn him into a mindless killer.",
        "director":"Hideo Gosha",
        "actors":"['Shintarô Katsu','Tatsuya Nakadai','Yukio Mishima']"
        },
        {
        "title":"Shussho iwai",
        "year":"1971",
        "genre":"Crime",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BYjcxNTNiNWYtYWM2Mi00ZDA3LWIxODEtNjU2YTRiNDMyYTQyXkEyXkFqcGdeQXVyMzY1MzQyOTY@._V1_QL75_UY281_CR5,0,190,281_.jpg",
        "rating":"7.2",
        "description":"After going to prison for killing the boss of the Kanno gang, a gangster gets released early - only to find that his ex-gang has merged with the Kannos. But with bitter resentments lingering on both sides, bloodshed is bound to begin anew.",
        "director":"Hideo Gosha",
        "actors":"['Rumi Aiki','Hideyo Amamoto','Noboru Andô']"
        },
        {
        "title":"Hunter in the Dark",
        "year":"1979",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BZmQ5YWQyZjAtYmU4Yi00NjQ0LTg0NTAtY2RlNTk0YzU2NDljXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_QL75_UY281_CR4,0,190,281_.jpg",
        "rating":"7.0",
        "description":"An aging Yakuza boss in the the late 18th century runs a thriving lantern and silk dying business. However, he is also a Hunter in the Dark, an shady underworld figure who unravels a mystery about a rival clan. His wife tries to protect what he wants to throw away. His new bodyguard has a missing memory. The truth lies within the code of the Yakuza, where honor and sa...",
        "director":"Hideo Gosha",
        "actors":"['Tatsuya Nakadai','Tetsurô Tanba','Yoshio Harada']"
        },
        {
        "title":"Demons",
        "year":"1971",
        "genre":"Drama",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BYWNhMzU1ZTctOWRkMi00MmI1LTg1ZjYtOTY1NjI2MzNjY2EwXkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_QL75_UY281_CR5,0,190,281_.jpg",
        "rating":"8.0",
        "description":"After being robbed by a geisha, a ronin warrior carves a bloody path to seek revenge.",
        "director":"Toshio Matsumoto",
        "actors":"['Katsuo Nakamura','Juro Kara','Yasuko Sanjo']"
        },
        {
        "title":"Revenge",
        "year":"1964",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BMjk4ODA0NTcxMF5BMl5BanBnXkFtZTgwMzEyOTk1MDE@._V1_QL75_UY281_CR3,0,190,281_.jpg",
        "rating":"7.6",
        "description":"After killing a high-ranking officer in an illegal duel, a low-ranking samurai is declared insane and challenged to a fixed duel by the vengeful clan to which his dead opponent belonged to.",
        "director":"Tadashi Imai",
        "actors":"['Kinnosuke Nakamura','Tetsurô Tanba','Yoshiko Mita']"
        },
        {
        "title":"Violent Streets",
        "year":"1974",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNWEyNWFmOTAtYjBhMi00NzdjLTg1YzEtZWVkYWIwMTExNjFhXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_QL75_UY281_CR2,0,190,281_.jpg",
        "rating":"6.9",
        "description":"A retired yakuza is caught in the middle of a growing conflict between two rival clans.",
        "director":"Hideo Gosha",
        "actors":"['Noboru Andô','Akira Kobayashi','Isao Natsuyagi']"
        },
        {
        "title":"Samurai Wolf",
        "year":"1966",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BZDQ5MjM3MTYtODIzYy00YjU2LWFmMGMtZWM1YTEzNDdkM2QwXkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_QL75_UY281_CR3,0,190,281_.jpg",
        "rating":"7.0",
        "description":"A charismatic ronin gets snared into a conflict between officials at a waystation, and gains the enmity of a group of thugs.",
        "director":"Hideo Gosha",
        "actors":"['Isao Natsuyagi','Ryôhei Uchida','Junko Miyazono']"
        },
        {
        "title":"Samurai Wolf II",
        "year":"1967",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNWFlMDM4MWYtYTJlMi00NTk2LWEyMDctZmZiYWI3ZjkxN2ZjXkEyXkFqcGdeQXVyMjkyMDY3MzY@._V1_QL75_UY281_CR4,0,190,281_.jpg",
        "rating":"6.9",
        "description":"Kiba is caught in the intrigue between a crooked goldmine owner, a cynical, betrayed swordsman, a manipulative lady and an arrogant dojo master.",
        "director":"Hideo Gosha",
        "actors":"['Hideo Gosha','Norifumi Suzuki','Kei Tasaka']"
        },
        {
        "title":"Seven Samurai",
        "year":"1954",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNTkwY2I5NWMtMjNlNi00ZThjLWI4NzQtNDI4M2I4OGM1YjAzXkEyXkFqcGdeQXVyNzYxODE3NTQ@._V1_QL75_UY281_CR5,0,190,281_.jpg",
        "rating":"8.6",
        "description":"Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.",
        "director":"Akira Kurosawa",
        "actors":"['Toshirô Mifune','Takashi Shimura','Keiko Tsushima']"
        },
        {
        "title":"Harakiri",
        "year":"1962",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BM2FiMzJiMTYtY2RiNS00Y2ExLWJkMTYtNzJhMmZmMDlhMDQzXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_QL75_UY281_CR3,0,190,281_.jpg",
        "rating":"8.6",
        "description":"When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
        "director":"Masaki Kobayashi",
        "actors":"['Tatsuya Nakadai','Akira Ishihama','Shima Iwashita']"
        },
        {
        "title":"Yojimbo",
        "year":"1961",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX190_CR0,2,190,281_.jpg",
        "rating":"8.2",
        "description":"A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.",
        "director":"Akira Kurosawa",
        "actors":"['Toshirô Mifune','Eijirô Tôno','Tatsuya Nakadai']"
        },
        {
        "title":"Ran",
        "year":"1985",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BMmU1NGYwZWYtOWExNi00ZTEyLTgwMmUtM2ZlMDVjNWM4YjVlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX190_CR0,4,190,281_.jpg",
        "rating":"8.2",
        "description":"In Medieval Japan, an elderly warlord retires, handing over his empire to his three sons. However, he vastly underestimates how the new-found power will corrupt them and cause them to turn on each other...and him.",
        "director":"Akira Kurosawa",
        "actors":"['Tatsuya Nakadai','Akira Terao','Jinpachi Nezu']"
        },
        {
        "title":"Sanjuro",
        "year":"1962",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BZmY3MDlmODctYTY3Yi00NzYyLWIxNTUtYjVlZWZjMmMwZTBkXkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_QL75_UX190_CR0,3,190,281_.jpg",
        "rating":"8.0",
        "description":"A crafty samurai helps a young man and his fellow clansmen trying to save his uncle, who has been framed and imprisoned by a corrupt superintendent.",
        "director":"Akira Kurosawa",
        "actors":"['Toshirô Mifune','Tatsuya Nakadai','Keiju Kobayashi']"
        },
        {
        "title":"Rashomon",
        "year":"1950",
        "genre":"Crime",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        "rating":"8.2",
        "description":"The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai's ghost and a woodcutter.",
        "director":"Akira Kurosawa",
        "actors":"['Toshirô Mifune','Machiko Kyô','Masayuki Mori']"
        },
        {
        "title":"The Hidden Fortress",
        "year":"1958",
        "genre":"Action",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BYjJkN2Y5MTktZDRhOS00NTUwLWFiMzEtMTVlNWU4ODM0Y2E5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY281_CR4,0,190,281_.jpg",
        "rating":"8.1",
        "description":"Lured by gold, two greedy peasants unknowingly escort a princess and her general across enemy lines.",
        "director":"Akira Kurosawa",
        "actors":"['Ryûzô Kikushima','Hideo Oguni','Shinobu Hashimoto']"
        },
        {
        "title":"Throne of Blood",
        "year":"1957",
        "genre":"Drama",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNGYxZjA2M2ItYTRmNS00NzRmLWJkYzgtYTdiNGFlZDI5ZjNmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_QL75_UY281_CR2,0,190,281_.jpg",
        "rating":"8.1",
        "description":"A war-hardened general, egged on by his ambitious wife, works to fulfill a prophecy that he would become lord of Spider's Web Castle.",
        "director":"Akira Kurosawa",
        "actors":"['Hideo Oguni','Shinobu Hashimoto','Ryûzô Kikushima']"
        },
        {
        "title":"Red Beard",
        "year":"1965",
        "genre":"Drama",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNDU5ZjE1OWUtZjcxNS00NjAzLThhZTQtOWY0MDc3NDQ1YTE2XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_QL75_UY281_CR3,0,190,281_.jpg",
        "rating":"8.3",
        "description":"In 19th-century Japan, a rough-tempered yet charitable town doctor trains a young intern.",
        "director":"Akira Kurosawa",
        "actors":"['Masato Ide','Hideo Oguni','Ryûzô Kikushima']"
        },
        {
        "title":"Samurai Rebellion",
        "year":"1967",
        "genre":"Drama",
        "imgSource":"https://m.media-amazon.com/images/M/MV5BNzNjODU5YmQtYTIwNS00ZDA5LTg5NWEtZjExMWU4OTNjZjQyXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_QL75_UX190_CR0,2,190,281_.jpg",
        "rating":"8.3",
        "description":"The mother of a feudal lord's only heir is kidnapped away from her husband by the lord. The husband and his samurai father must decide whether to accept the unjust decision, or risk death to get her back.",
        "director":"Masaki Kobayashi",
        "actors":"['Toshirô Mifune','Yôko Tsukasa','Gô Katô']"
        }
        ]`);


        let fullQuery = '';

        moviesList.forEach(async (m) => {
            var title, year, genre, rating, imgSource, description, director, actors;
            var actorsList;

            actors = m.actors.replaceAll("'","\"");
            actors[0] = "'";
            actors[actors.length] = "'";

            actorsList = JSON.parse(actors);

            title  = m.title;
            year = m.year;
            genre = m.genre;
            rating = m.rating;
            imgSource = m.imgSource;
            description = m.description;
            director = m.director;

            let query = `merge (m:Movie {title: "${title}", year: "${year}", genre: "${genre}", rating: "${rating}", imgSource: "${imgSource}", description: "${description}"}) 
                 merge (d:Director {name: "${director}"}) 
                 merge (d)-[:DIRECTED]->(m)-[:DIRECTED_BY]->(d)`;
    
            actorsList.forEach((a, index) => {
                query += ` merge (a${index}:Actor {name: "${a}"}) 
                  merge (a${index})-[:ACTED_IN]->(m)-[:HAS_ACTOR]->(a${index})`
            })
            query += " return m;";
            console.log(query);
        });

}

create();