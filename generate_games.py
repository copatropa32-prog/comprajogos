import json

jogos = [
    # --- Gratuitos e F2P Populares ---
    {
        "name": "Counter-Strike 2",
        "genre": "FPS",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
    },
    {
        "name": "Dota 2",
        "genre": "MOBA",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg"
    },
    {
        "name": "Team Fortress 2",
        "genre": "FPS",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg"
    },
    {
        "name": "Warframe",
        "genre": "RPG",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg"
    },
    {
        "name": "Path of Exile",
        "genre": "RPG",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg"
    },
    {
        "name": "Apex Legends",
        "genre": "FPS",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg"
    },
    {
        "name": "Destiny 2",
        "genre": "FPS",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg"
    },
    {
        "name": "Rocket League",
        "genre": "Racing",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg"
    },
    {
        "name": "Brawlhalla",
        "genre": "Fighting",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/291550/header.jpg"
    },
    {
        "name": "Paladins",
        "genre": "FPS",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/444090/header.jpg"
    },
    {
        "name": "SMITE",
        "genre": "MOBA",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/386360/header.jpg"
    },
    {
        "name": "Albion Online",
        "genre": "RPG",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/761890/header.jpg"
    },
    {
        "name": "Lost Ark",
        "genre": "RPG",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/header.jpg"
    },
    {
        "name": "Unturned",
        "genre": "Survival",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg"
    },
    {
        "name": "Portal Stories: Mel",
        "genre": "Puzzle",
        "price": "Gratuito",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/317400/header.jpg"
    },
    {
        "name": "Valorant",
        "genre": "FPS",
        "price": "Gratuito",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80"
    },
    {
        "name": "League of Legends",
        "genre": "MOBA",
        "price": "Gratuito",
        "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80"
    },
    {
        "name": "Genshin Impact",
        "genre": "RPG",
        "price": "Gratuito",
        "image": "https://images.unsplash.com/photo-1612287233002-ef2f1c849646?w=400&q=80"
    },
    {
        "name": "Fortnite",
        "genre": "Adventure",
        "price": "Gratuito",
        "image": "https://images.unsplash.com/photo-1589241062272-c0a000071dfa?w=400&q=80"
    },

    # --- Jogos Baratos e Indies Aclamados ---
    {
        "name": "Vampire Survivors",
        "genre": "Action",
        "price": "R$ 10,69",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1794680/header.jpg"
    },
    {
        "name": "Among Us",
        "genre": "Casual",
        "price": "R$ 10,89",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg"
    },
    {
        "name": "Half-Life 2",
        "genre": "FPS",
        "price": "R$ 22,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg"
    },
    {
        "name": "Portal",
        "genre": "Puzzle",
        "price": "R$ 22,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg"
    },
    {
        "name": "Fallout: New Vegas",
        "genre": "RPG",
        "price": "R$ 24,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/22380/header.jpg"
    },
    {
        "name": "Stardew Valley",
        "genre": "Simulator",
        "price": "R$ 24,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
    },
    {
        "name": "Garry's Mod",
        "genre": "Sandbox",
        "price": "R$ 25,00",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg"
    },
    {
        "name": "Euro Truck Simulator",
        "genre": "Simulator",
        "price": "R$ 25,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/232030/header.jpg"
    },
    {
        "name": "Don't Starve",
        "genre": "Survival",
        "price": "R$ 27,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/219740/header.jpg"
    },
    {
        "name": "Keep Talking and Nobody Explodes",
        "genre": "Puzzle",
        "price": "R$ 27,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/238090/header.jpg"
    },
    {
        "name": "Undertale",
        "genre": "RPG",
        "price": "R$ 28,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg"
    },
    {
        "name": "Left 4 Dead 2",
        "genre": "FPS",
        "price": "R$ 32,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg"
    },
    {
        "name": "Portal 2",
        "genre": "Puzzle",
        "price": "R$ 32,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg"
    },
    {
        "name": "Terraria",
        "genre": "Adventure",
        "price": "R$ 32,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
    },
    {
        "name": "BioShock Remastered",
        "genre": "FPS",
        "price": "R$ 35,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/409710/header.jpg"
    },
    {
        "name": "Batman: Arkham Asylum",
        "genre": "Action",
        "price": "R$ 36,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/35140/header.jpg"
    },
    {
        "name": "Batman: Arkham City",
        "genre": "Action",
        "price": "R$ 36,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/200260/header.jpg"
    },
    {
        "name": "Cuphead",
        "genre": "Action",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg"
    },
    {
        "name": "Celeste",
        "genre": "Adventure",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg"
    },
    {
        "name": "The Forest",
        "genre": "Survival",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg"
    },
    {
        "name": "Raft",
        "genre": "Survival",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/648800/header.jpg"
    },
    {
        "name": "Bloons TD 6",
        "genre": "Strategy",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/960090/header.jpg"
    },
    {
        "name": "Valheim",
        "genre": "Survival",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg"
    },
    {
        "name": "Assetto Corsa",
        "genre": "Racing",
        "price": "R$ 37,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/244210/header.jpg"
    },
    {
        "name": "Hollow Knight",
        "genre": "Adventure",
        "price": "R$ 46,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg"
    },
    {
        "name": "Phasmophobia",
        "genre": "Horror",
        "price": "R$ 46,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg"
    },
    {
        "name": "Dead Cells",
        "genre": "Action",
        "price": "R$ 47,49",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg"
    },

    # --- Grandes Jogos e Lançamentos ---
    {
        "name": "Borderlands 2",
        "genre": "FPS",
        "price": "R$ 65,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg"
    },
    {
        "name": "Subnautica",
        "genre": "Survival",
        "price": "R$ 59,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg"
    },
    {
        "name": "BeamNG.drive",
        "genre": "Simulator",
        "price": "R$ 59,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/284160/header.jpg"
    },
    {
        "name": "Overcooked! 2",
        "genre": "Casual",
        "price": "R$ 59,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/728880/header.jpg"
    },
    {
        "name": "Middle-earth: Shadow of Mordor",
        "genre": "Action",
        "price": "R$ 59,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/241930/header.jpg"
    },
    {
        "name": "Hades",
        "genre": "Action",
        "price": "R$ 73,49",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg"
    },
    {
        "name": "Slay the Spire",
        "genre": "Strategy",
        "price": "R$ 73,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg"
    },
    {
        "name": "Risk of Rain 2",
        "genre": "Action",
        "price": "R$ 73,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg"
    },
    {
        "name": "Tomb Raider",
        "genre": "Adventure",
        "price": "R$ 74,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg"
    },
    {
        "name": "The Witcher 3: Wild Hunt",
        "genre": "RPG",
        "price": "R$ 79,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg"
    },
    {
        "name": "Age of Empires II: Definitive Edition",
        "genre": "Strategy",
        "price": "R$ 79,00",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg"
    },
    {
        "name": "Fallout 4",
        "genre": "RPG",
        "price": "R$ 82,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg"
    },
    {
        "name": "Grand Theft Auto V",
        "genre": "Adventure",
        "price": "R$ 83,00",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"
    },
    {
        "name": "Euro Truck Simulator 2",
        "genre": "Simulator",
        "price": "R$ 83,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg"
    },
    {
        "name": "Cities: Skylines",
        "genre": "Simulator",
        "price": "R$ 88,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg"
    },
    {
        "name": "Sons of The Forest",
        "genre": "Survival",
        "price": "R$ 88,99",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg"
    },
    {
        "name": "Devil May Cry 5",
        "genre": "Action",
        "price": "R$ 99,00",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg"
    },
    {
        "name": "Monster Hunter: World",
        "genre": "Action",
        "price": "R$ 99,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg"
    },
    {
        "name": "Civilization VI",
        "genre": "Strategy",
        "price": "R$ 129,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg"
    },
    {
        "name": "Skyrim Special Edition",
        "genre": "RPG",
        "price": "R$ 149,00",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg"
    },
    {
        "name": "Dark Souls III",
        "genre": "RPG",
        "price": "R$ 159,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg"
    },
    {
        "name": "Cyberpunk 2077",
        "genre": "RPG",
        "price": "R$ 199,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
        "name": "Baldur's Gate 3",
        "genre": "RPG",
        "price": "R$ 199,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
    },
    {
        "name": "God of War",
        "genre": "Adventure",
        "price": "R$ 199,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg"
    },
    {
        "name": "Horizon Zero Dawn",
        "genre": "RPG",
        "price": "R$ 199,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg"
    },
    {
        "name": "Elden Ring",
        "genre": "RPG",
        "price": "R$ 229,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
        "name": "Sekiro: Shadows Die Twice",
        "genre": "Action",
        "price": "R$ 229,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg"
    },
    {
        "name": "Red Dead Redemption 2",
        "genre": "Adventure",
        "price": "R$ 249,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
    },
    {
        "name": "Starfield",
        "genre": "RPG",
        "price": "R$ 249,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg"
    },
    {
        "name": "Hogwarts Legacy",
        "genre": "RPG",
        "price": "R$ 249,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"
    },
    {
        "name": "Resident Evil 4",
        "genre": "Adventure",
        "price": "R$ 249,90",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"
    }
]

with open('jogos.json', 'w', encoding='utf-8') as f:
    json.dump(jogos, f, indent=4, ensure_ascii=False)

print(f"Total de jogos gerados: {len(jogos)}")
