const WORLDS = ["Willow Creek", "Oasis Springs", "Newcrest", "Magnolia Promenade", "Windenburg", "Granite Falls", "San Myshuno", "Forgotten Hollow", "Brindleton Bay", "Del Sol Valley", "StrangerVille", "Sulani", "Glimmerbrook", "Britechester", "Evergreen Harbor", "Mt. Komorebi", "Henford-On-Bagley", "Tartosa", "Moonwood Mill", "Copperdale", "San Sequoia"];
const LOT_DIMENSIONS = ["20x15", "30x20", "40x30", "50x40", "64x64", "20x20", "30x30", "40x40", "50x50", "60x40", "64x64", "20x15", "30x20", "40x30", "50x40"];
const BUDGET_RANGE = ["20k","35k","50k","75k","100k"];
const SIM_RANGE = [1,2,3,5,6,8];
const BUILD_STYLE = ["colonial","ranch","mid-century","mediterranean","victorian","modern","craftsman"];
const COLORS = ["neutral","bright","cool","warm&cozy","black&white"];
const EXPANSION_PACKS = ["Get to Work", "Get Together", "City Living", "Cats & Dogs", "Seasons", "Get Famous", "Island Living", "Discover University", "Eco Lifestyle", "Snowy Escape", "Growing Together", "High School Years", "Cottage Living"];
const GAME_PACKS = ["Outdoor Retreat", "Spa Day", "Dine Out", "Vampires", "Parenthood", "Jungle Adventure", "StrangerVille", "Realm of Magic", "Journey to Batuu", "My Wedding Stories", "Dream Home Decorator", "Spa Day", "Werewolves"];
const LIMITATIONS = ["base game only","1 pack","3 packs","least favorite pack","all packs"];
const STUFF_PACKS = ["Luxury Party Stuff", "Perfect Patio Stuff", "Cool Kitchen Stuff", "Spooky Stuff", "Movie Hangout Stuff", "Romantic Garden Stuff", "Kids Room Stuff", "Backyard Stuff", "Vintage Glamour Stuff", "Bowling Night Stuff", "Fitness Stuff", "Toddler Stuff", "Laundry Day Stuff", "My First Pet Stuff", "Moschino Stuff", "Tiny Living Stuff", "Nifty Knitting Stuff", "Paranormal Stuff"];
const ROOMS = ["home gym","art studio","kids playroom","music room","bar","study","garden","pool area","outdoor entertainment"];
const FIELDS = {
    "lotSize": LOT_DIMENSIONS,
    "world": WORLDS,
    "budget": BUDGET_RANGE,
    "sims": SIM_RANGE,
    "style": BUILD_STYLE,
    "colorScheme": COLORS,
    "packLimitations": LIMITATIONS,
    "expansionPack": EXPANSION_PACKS,
    "gamePack": GAME_PACKS,
    "stuffPack": STUFF_PACKS,
    "funkyRoom": ROOMS
}

$(buildTable);

function buildTable() {
    for (f in FIELDS) {
        let tr = document.createElement("tr");
        let fieldTd = document.createElement("td");
        $(fieldTd).prop("scope", "row").prop("textContent", f);
        $(tr).append(fieldTd);

        let resultTd = document.createElement("td");
        let result = document.createElement("p");
        result.id = f;
        $(resultTd).append(result);
        $(resultTd).addClass("result");
        $(tr).append(resultTd);

        let buttonTd = document.createElement("td");
        let btn = document.createElement("button");
        $(btn).addClass("btn btn-sm btn-secondary");
        btn.id = f;
        btn.textContent = "spin";
        $(buttonTd).append(btn);
        $(tr).append(buttonTd);
        $("tbody:last-child").append(tr);
    }
    for (f in FIELDS) {
        let field = f;
        let btn = $(`button#${f}`);
        let result = $(`p#${f}`);
        $(btn).on("click", function() {
            $(result).prop("textContent", randomizeList(FIELDS[field]));
        });
    }
    let spinAllBtn = document.createElement("button");
    $(spinAllBtn).prop("textContent","spin all");
    $(spinAllBtn).addClass("btn btn-primary");
    $(spinAllBtn).on("click", function() {
        for (f in FIELDS) {
            let field = f;
            let result = randomizeList(FIELDS[field]);
            $(`p#${f}`).prop("textContent", result);
        }
    })
    $(".spin-all").append(spinAllBtn);
}

function randomizeList(list) {
    return list[Math.floor(Math.random() * list.length)];
}