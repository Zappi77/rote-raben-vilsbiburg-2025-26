const teamBadges = {
  "DSHS SnowTrex Köln": {
    "short": "DSK",
    "color": "#0D6FB8",
    "text": "#FFFFFF"
  },
  "Eintracht Spontent Düsseldorf": {
    "short": "ESD",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "ESA Grimma Volleys": {
    "short": "EGV",
    "color": "#C3C3C3",
    "text": "#111111"
  },
  "BayerVolleys Leverkusen": {
    "short": "BVL",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "NawaRo Straubing": {
    "short": "STR",
    "color": "#EE7101",
    "text": "#FFFFFF"
  },
  "Neuseenland-Volleys Markkleeberg": {
    "short": "NVM",
    "color": "#65B32E",
    "text": "#FFFFFF"
  },
  "Sparkassen Wildcats Stralsund": {
    "short": "SWS",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "TV Planegg-Krailling": {
    "short": "TVP",
    "color": "#A4CFA1",
    "text": "#111111"
  },
  "TV Waldgirmes": {
    "short": "TVW",
    "color": "#3898CF",
    "text": "#FFFFFF"
  },
  "VCO Dresden": {
    "short": "VCO",
    "color": "#009CD0",
    "text": "#FFFFFF"
  },
  "VfL Oythe": {
    "short": "OYT",
    "color": "#E31825",
    "text": "#FFFFFF"
  },
  "Rote Raben Vilsbiburg": {
    "short": "RRV",
    "color": "#E20010",
    "text": "#FFFFFF"
  },
  "BBSC Berlin": {
    "short": "BER",
    "color": "#D70079",
    "text": "#FFFFFF"
  },
  "TV Dingolfing": {
    "short": "TVD",
    "color": "#E0B187",
    "text": "#111111"
  },
  "TV Hörde": {
    "short": "TVH",
    "color": "#111111",
    "text": "#FFFFFF"
  }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const youtubeViewsDate = "26.06.2026";

const youtubeViews = {
  "3007": 1736,
  "3013": 1895,
  "3020": 1364,
  "3025": 2577,
  "3034": 1804,
  "3037": 1709,
  "3048": 1412,
  "3056": 906,
  "3062": 1345,
  "3068": 1181,
  "3076": 1811,
  "3080": 1064,
  "3090": 2060,
  "3098": 1641,
  "3104": 1515,
  "3111": 887,
  "3116": 1609,
  "3125": 1887,
  "3128": 1931,
  "3139": 1013,
  "3147": 934,
  "3153": 947,
  "3159": 2278,
  "3167": 3811,
  "3171": 1243,
  "3181": 1275,
  "3194": 2006,
  "3208": 2001
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  "overall": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 28,
      "wins": 26,
      "sets": "80:11",
      "balls": "2215:1651",
      "points": 79
    },
    {
      "rank": 2,
      "team": "NawaRo Straubing",
      "played": 28,
      "wins": 24,
      "sets": "76:28",
      "balls": "2439:1973",
      "points": 72
    },
    {
      "rank": 3,
      "team": "VfL Oythe",
      "played": 28,
      "wins": 24,
      "sets": "75:32",
      "balls": "2485:2184",
      "points": 69
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 28,
      "wins": 22,
      "sets": "71:30",
      "balls": "2327:2023",
      "points": 63
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 28,
      "wins": 17,
      "sets": "65:45",
      "balls": "2422:2341",
      "points": 52
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 28,
      "wins": 15,
      "sets": "56:52",
      "balls": "2357:2400",
      "points": 45
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 28,
      "wins": 15,
      "sets": "55:53",
      "balls": "2358:2293",
      "points": 44
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 28,
      "wins": 14,
      "sets": "54:49",
      "balls": "2258:2248",
      "points": 42
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 28,
      "wins": 13,
      "sets": "49:59",
      "balls": "2282:2309",
      "points": 35
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 28,
      "wins": 11,
      "sets": "49:63",
      "balls": "2332:2464",
      "points": 35
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 28,
      "wins": 9,
      "sets": "43:67",
      "balls": "2284:2456",
      "points": 27
    },
    {
      "rank": 12,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 28,
      "wins": 7,
      "sets": "34:70",
      "balls": "2128:2386",
      "points": 21
    },
    {
      "rank": 13,
      "team": "TV Dingolfing",
      "played": 28,
      "wins": 5,
      "sets": "32:75",
      "balls": "2134:2493",
      "points": 18
    },
    {
      "rank": 14,
      "team": "TV Hörde",
      "played": 28,
      "wins": 4,
      "sets": "26:77",
      "balls": "2067:2405",
      "points": 16
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 28,
      "wins": 4,
      "sets": "24:78",
      "balls": "1968:2430",
      "points": 12
    }
  ],
  "home": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 14,
      "sets": "42:3",
      "balls": "1108:803",
      "points": 42
    },
    {
      "rank": 2,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 13,
      "sets": "41:10",
      "balls": "1229:1000",
      "points": 40
    },
    {
      "rank": 3,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1215:1018",
      "points": 35
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "34:15",
      "balls": "1121:975",
      "points": 31
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 8,
      "sets": "32:24",
      "balls": "1243:1190",
      "points": 24
    },
    {
      "rank": 6,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 8,
      "sets": "31:26",
      "balls": "1245:1165",
      "points": 24
    },
    {
      "rank": 7,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 8,
      "sets": "28:24",
      "balls": "1143:1119",
      "points": 23
    },
    {
      "rank": 8,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 7,
      "sets": "29:28",
      "balls": "1205:1241",
      "points": 21
    },
    {
      "rank": 9,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1162:1199",
      "points": 20
    },
    {
      "rank": 10,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1201:1165",
      "points": 19
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 5,
      "sets": "25:30",
      "balls": "1196:1187",
      "points": 18
    },
    {
      "rank": 12,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 5,
      "sets": "20:33",
      "balls": "1078:1210",
      "points": 14
    },
    {
      "rank": 13,
      "team": "TV Hörde",
      "played": 14,
      "wins": 4,
      "sets": "17:35",
      "balls": "1093:1199",
      "points": 13
    },
    {
      "rank": 14,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 4,
      "sets": "16:34",
      "balls": "1023:1145",
      "points": 11
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:38",
      "balls": "983:1195",
      "points": 7
    }
  ],
  "away": [
    {
      "rank": 1,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 13,
      "sets": "39:13",
      "balls": "1224:955",
      "points": 37
    },
    {
      "rank": 2,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 12,
      "sets": "38:8",
      "balls": "1107:848",
      "points": 37
    },
    {
      "rank": 3,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1206:1048",
      "points": 32
    },
    {
      "rank": 4,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 11,
      "sets": "34:22",
      "balls": "1256:1184",
      "points": 29
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 9,
      "sets": "33:21",
      "balls": "1179:1151",
      "points": 28
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 8,
      "sets": "29:24",
      "balls": "1195:1201",
      "points": 25
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 7,
      "sets": "24:27",
      "balls": "1113:1128",
      "points": 20
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 6,
      "sets": "26:25",
      "balls": "1115:1129",
      "points": 19
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 6,
      "sets": "22:31",
      "balls": "1081:1144",
      "points": 16
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 4,
      "sets": "20:35",
      "balls": "1127:1223",
      "points": 14
    },
    {
      "rank": 11,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 3,
      "sets": "18:36",
      "balls": "1105:1241",
      "points": 10
    },
    {
      "rank": 12,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 4,
      "sets": "18:37",
      "balls": "1088:1269",
      "points": 9
    },
    {
      "rank": 13,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:40",
      "balls": "985:1235",
      "points": 5
    },
    {
      "rank": 14,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 0,
      "sets": "12:42",
      "balls": "1056:1283",
      "points": 4
    },
    {
      "rank": 15,
      "team": "TV Hörde",
      "played": 14,
      "wins": 0,
      "sets": "9:42",
      "balls": "974:1206",
      "points": 3
    }
  ]
};

const playerProfileUrls = {
  "Franziska Nitsche": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921",
  "Crystal Burk": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=771634116",
  "Pia Fernau": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889",
  "Emma Carlotta Dogu": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=685275014",
  "Paula Reinisch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655",
  "Gesa Brandstrup": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134",
  "Valbona Ismaili": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735",
  "Nora Harner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=767130990",
  "Anni Tändler": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767229487",
  "Hannah Mörke": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70203755",
  "Cheyenne Dolarian Hlady": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954890",
  "Frauke Böcker": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=8173",
  "Sally Marie Marong": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=760900352",
  "Anne Marie Hatch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056897",
  "Tina De Groot": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545",
  "Lara Drölle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117",
  "Cara Beine": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=771435747",
  "Jeannette Huskic": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=745078242",
  "Emely Brodowski": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=760515928",
  "Georgia McGovern": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387",
  "Pauline Meyer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770990166",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234",
  "Zoe Albert": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233",
  "Joana Huber": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=762602031",
  "Emelie Siegner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100",
  "Nadine Burbrink": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=36213842",
  "Franziska Koob": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854",
  "Emma Neukirchen": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481",
  "Sydney Moore": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=778381936",
  "Jenni Liu": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=59195178",
  "Alayna Beth Crabtree": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056865",
  "Clara Wübbeke": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=678885032",
  "Maria Petkova": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333"
};

const gameSummaries = {};

const games = [
  {
    number: 3007,
    matchId: 777353330,
    weekday: "Samstag",
    date: "20.09.2025",
    time: "18:00",
    home: "Neuseenland-Volleys Markkleeberg",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "48:75",
    sets: [
      "14:25",
      "18:25",
      "16:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/b53d41d0-af1f-430e-89d6-64d359b5bf9c/3007",
    rankAfter: 1,
    venue: "Neuseenlandhalle",
    spectators: 230,
    duration: 61,
    mvps: [
      {
        team: "Neuseenland-Volleys Markkleeberg",
        name: "Franziska Nitsche",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Crystal Burk",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=771634116"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778401249",
    summary: [
      "Das war es nun, das erste (Heim-)Spiel in der für die jungen Damen der Neuseenland-Volleys Markkleeberg \"neuen\" Liga. 230 Fans waren in die Neuseenlandhalle gekommen und sorgten für tolle Stimmung."
    ],
    videoUrl: "https://www.youtube.com/live/cDpIX6kI_9w?si=HSXqUtQAFW7Le6de",
    youtubeViews: 1736
  },
  {
    number: 3013,
    matchId: 777353373,
    weekday: "Samstag",
    date: "27.09.2025",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "TV Waldgirmes",
    score: "3:1",
    ballPoints: "98:86",
    sets: [
      "23:25",
      "25:21",
      "25:18",
      "25:22"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/79a714ce-3713-423d-ae1a-e2ce60824a0d/3013",
    rankAfter: 2,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 583,
    duration: 100,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "TV Waldgirmes",
        name: "Emma Carlotta Dogu",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=685275014"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778486623",
    summary: [
      "Vilsbiburg. Es war ein hartes Stück Arbeit, bis die Roten Raben, ihren 3:1-Sieg in ihrem ersten Heimspiel der Saison 2025/26 gegen den Aufsteiger TV Waldgirmes eintüten konnten."
    ],
    videoUrl: "https://www.youtube.com/live/L8OjY6OCCwM?si=mZwtjTdO1zpVtxfs",
    youtubeViews: 1895
  },
  {
    number: 3020,
    matchId: 777353410,
    weekday: "Samstag",
    date: "04.10.2025",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "BBSC Berlin",
    score: "3:0",
    ballPoints: "75:41",
    sets: [
      "25:15",
      "25:9",
      "25:17"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/2ca0f57b-e894-4094-bfa1-4df6243cfbf5/3020",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 446,
    duration: 56,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "BBSC Berlin",
        name: "Paula Reinisch",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778579260",
    summary: [
      "Mit nur 9 einsatzfähigen Spielerinnen machte sich Manuel Müller am Samstag auf die Reise nach Vilsbiburg. Nach dem klaren 3:0 Sieg der Raben war die Stimmung nicht von großer Euphorie geprägt."
    ],
    videoUrl: "https://www.youtube.com/live/sAbCao2XO0A?si=GU1Tt33NNG3IOExJ",
    youtubeViews: 1364
  },
  {
    number: 3025,
    matchId: 777353447,
    weekday: "Samstag",
    date: "11.10.2025",
    time: "17:00",
    home: "Sparkassen Wildcats Stralsund",
    away: "Rote Raben Vilsbiburg",
    score: "3:2",
    ballPoints: "95:107",
    sets: [
      "16:25",
      "26:24",
      "25:19",
      "12:25",
      "16:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/ed8ba109-7ec4-4b11-bb74-e53769356d8d/3025",
    rankAfter: 1,
    venue: "Diesterweg-Sporthalle",
    spectators: 425,
    duration: 104,
    mvps: [
      {
        team: "Sparkassen Wildcats Stralsund",
        name: "Gesa Brandstrup",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778688489",
    summary: [
      "Nach wiederum fünf Sätzen konnte der zweite Sieg in Folge erspielt werden."
    ],
    videoUrl: "https://www.youtube.com/live/rSO49D7bztA?si=HSXqUtQAFW7Le6de",
    youtubeViews: 2577
  },
  {
    number: 3034,
    matchId: 777353496,
    weekday: "Samstag",
    date: "18.10.2025",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "NawaRo Straubing",
    score: "3:0",
    ballPoints: "75:58",
    sets: [
      "25:21",
      "25:23",
      "25:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/060844cd-d73b-4215-8828-23d91a6fbaa2/3034",
    rankAfter: 2,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 1293,
    duration: 69,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778784266",
    summary: [
      "Der langjährige Erstligist Rote Raben Vilsbiburg war am Samstagabend für die Gäubodenstädterinnen eine Nummer zu groß. Am Ende stand ein 0:3 aus NawaRo-Sicht."
    ],
    videoUrl: "https://www.youtube.com/live/dkBUaQSwYAI?si=xtEo70digjrBO-H8",
    youtubeViews: 1804
  },
  {
    number: 3037,
    matchId: 777353521,
    weekday: "Samstag",
    date: "01.11.2025",
    time: "16:00",
    home: "TV Planegg-Krailling",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "56:75",
    sets: [
      "23:25",
      "17:25",
      "16:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/c591e75e-9dae-4cef-904d-ba8d221b2695/3037",
    rankAfter: 1,
    venue: "Georg-Scherer-Halle",
    spectators: 250,
    duration: 67,
    mvps: [
      {
        team: "TV Planegg-Krailling",
        name: "Nora Harner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=767130990"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779003993",
    summary: [
      "Das war eine beeindruckende Vorstellung: In 68 Minuten besiegten die Roten Raben den bisherigen Tabellenführer TV Planegg-Krailing mit 3:0. Damit ist Vilsbiburg neuer Tabellenführer."
    ],
    videoUrl: "https://www.youtube.com/live/-kFy8PoVW8E?si=ZvNqDlxT1lGk-ARM",
    youtubeViews: 1709
  },
  {
    number: 3194,
    matchId: 777354478,
    weekday: "Sonntag",
    date: "02.11.2025",
    time: "16:00",
    home: "VCO Dresden",
    away: "Rote Raben Vilsbiburg",
    score: "1:3",
    ballPoints: "76:88",
    sets: [
      "18:25",
      "25:13",
      "15:25",
      "18:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/54eb5226-dca5-474c-8df2-cc8129b633b3/3194",
    rankAfter: 1,
    venue: "Schulsporthalle des Sportschulzentrum",
    spectators: 105,
    duration: 83,
    mvps: [
      {
        team: "VCO Dresden",
        name: "Anni Tändler",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767229487"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Crystal Burk",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=771634116"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779021483",
    summary: [
      "Nach einem durchwachsenen Start mit der gewohnten Aufstellung entwickelte sich das Spiel gegen den Tabellenführer Vilsbiburg zu einem echten Auf und Ab. Im ersten Satz fand der VCO Dresden nur schwer."
    ],
    videoUrl: "https://www.youtube.com/live/DsDAhU_xwak?si=KeI8T0KR2PrN8Xxx",
    youtubeViews: 2006
  },
  {
    number: 3048,
    matchId: 777353582,
    weekday: "Sonntag",
    date: "16.11.2025",
    time: "16:00",
    home: "Rote Raben Vilsbiburg",
    away: "DSHS SnowTrex Köln",
    score: "3:0",
    ballPoints: "75:56",
    sets: [
      "25:15",
      "25:23",
      "25:18"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/1ca09abb-271b-4b84-b319-f57cb34af190/3048",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 916,
    duration: 76,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "DSHS SnowTrex Köln",
        name: "Hannah Mörke",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70203755"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779291374",
    summary: [
      "Köln zeigte in Vilsbiburg gute Ansätze und hielt phasenweise stark dagegen, blieb am Ende aber ohne Satzgewinn. Der Tabellenführer setzte sich verdient 3:0 durch."
    ],
    videoUrl: "https://www.youtube.com/watch?v=8egp1gOMuaw",
    youtubeViews: 1412
  },
  {
    number: 3056,
    matchId: 777353637,
    weekday: "Samstag",
    date: "22.11.2025",
    time: "19:00",
    home: "TV Dingolfing",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "33:75",
    sets: [
      "20:25",
      "6:25",
      "7:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/d1ba2258-11bc-4aa3-a1bc-3770f3ec4bf5/3056",
    rankAfter: 1,
    venue: "Sporthalle Höll-Ost",
    spectators: 603,
    duration: 54,
    mvps: [
      {
        team: "TV Dingolfing",
        name: "Cheyenne Dolarian Hlady",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954890"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779372616",
    summary: [
      "Die Roten Raben haben eindrucksvoll unter Beweis gestellt, dass sie zu Recht auf Platz eins in der Sparda 2. Liga Pro stehen. Sie siegten deutlich TV Dingolfing mit 3:0 (25:20/25:6/25:7)"
    ],
    videoUrl: "https://www.youtube.com/live/aNH8JVScIMw?si=KeMftrDirPOwUGul",
    youtubeViews: 906
  },
  {
    number: 3062,
    matchId: 777353668,
    weekday: "Sonntag",
    date: "30.11.2025",
    time: "16:00",
    home: "Rote Raben Vilsbiburg",
    away: "TV Hörde",
    score: "3:0",
    ballPoints: "75:40",
    sets: [
      "25:16",
      "25:9",
      "25:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/fc7b7438-05c9-41dd-826c-546469a0c513/3062",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 722,
    duration: 56,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "TV Hörde",
        name: "Frauke Böcker",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=8173"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779489187",
    summary: [
      "Mit 3:0 siegten die die Roten Raben gegen den TV Hörde und verteidigten damit die Tabellenführung in der Sparda 2. Liga Pro."
    ],
    videoUrl: "https://www.youtube.com/live/goU84HQsaak?si=N75A7pK_ug9UkLqj",
    youtubeViews: 1345
  },
  {
    number: 3068,
    matchId: 777353711,
    weekday: "Samstag",
    date: "06.12.2025",
    time: "18:00",
    home: "ESA Grimma Volleys",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "64:78",
    sets: [
      "25:27",
      "24:26",
      "15:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/f32c7784-c951-4f21-ba5a-ef1856d2be09/3068",
    rankAfter: 1,
    venue: "Muldentalhalle",
    spectators: 245,
    duration: 69,
    mvps: [
      {
        team: "ESA Grimma Volleys",
        name: "Sally Marie Marong",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=760900352"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Anne Marie Hatch",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056897"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779587002",
    summary: [
      "Die ESA VOLLEYS sehr sehr nah an einer kleiner Sensation! Doch Vilsbiburg setzte sich routiniert durch...."
    ],
    videoUrl: "https://www.youtube.com/live/gavNYpG6a0g?si=wngRH6b9zQOIm-DT",
    youtubeViews: 1181
  },
  {
    number: 3076,
    matchId: 777353754,
    weekday: "Samstag",
    date: "13.12.2025",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:0",
    ballPoints: "75:44",
    sets: [
      "25:19",
      "25:17",
      "25:8"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/57c5dc88-7f05-4e6b-a675-94b9693aff50/3076",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 663,
    duration: 62,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Tina De Groot",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779695655",
    summary: [
      "Am Ende war es wieder eine klare Angelegenheit: Die Roten Raben bleiben auch bei ihrem sechsten Heimspiel ungeschlagen. Sie besiegten in nur 62 Minuten Eintracht Spontent Düsseldorf mit 3:0."
    ],
    videoUrl: "https://www.youtube.com/watch?v=a59o7h6j_6E&pp=ygU4RFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBSb3RlIFJhYmVuIFZpbHNiaWJ1cmc%3D",
    youtubeViews: 1811
  },
  {
    number: 3080,
    matchId: 777353779,
    weekday: "Samstag",
    date: "20.12.2025",
    time: "19:30",
    home: "BayerVolleys Leverkusen",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "44:75",
    sets: [
      "14:25",
      "15:25",
      "15:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/fa9ed7fb-0e47-4bc5-a159-f0dc3805fb06/3080",
    rankAfter: 1,
    venue: "Ostermann-Arena",
    spectators: 387,
    duration: 60,
    mvps: [
      {
        team: "BayerVolleys Leverkusen",
        name: "Cara Beine",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=771435747"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Jeannette Huskic",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=745078242"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779817221",
    summary: [
      "Zweitliga-Team von Coach Dirk Sauermann unterliegt Dresden und Vilsbiburg jeweils 0:3"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Ew7JbDanOPQ",
    youtubeViews: 1064
  },
  {
    number: 3090,
    matchId: 777353846,
    weekday: "Samstag",
    date: "03.01.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "VfL Oythe",
    score: "3:0",
    ballPoints: "75:55",
    sets: [
      "25:20",
      "25:22",
      "25:13"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/51533f77-c81c-45b4-b6b0-280d1c8481cd/3090",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 984,
    duration: 73,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Emely Brodowski",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=760515928"
      },
      {
        team: "VfL Oythe",
        name: "Georgia McGovern",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779933625",
    summary: [
      "Die Roten Raben sind nicht zu stoppen: Auch nicht von einem der ärgsten Verfolger, dem VfL Oythe. Das Team aus Vilsbiburg besiegte den Tabellendritten nach nur 73 Minuten mit 3:0 (25:20/25:22/25:13)."
    ],
    videoUrl: "https://www.youtube.com/live/jA0g1wIDswk?si=HQ5oXbWzt6fxDJmE",
    youtubeViews: 2060
  },
  {
    number: 3098,
    matchId: 777353895,
    weekday: "Samstag",
    date: "10.01.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "Neuseenland-Volleys Markkleeberg",
    score: "3:0",
    ballPoints: "75:51",
    sets: [
      "25:19",
      "25:13",
      "25:19"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/10b389c9-a4dd-4f79-a79a-acb93825d71e/3098",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 465,
    duration: 64,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "Neuseenland-Volleys Markkleeberg",
        name: "Pauline Meyer",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770990166"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780026172",
    summary: [
      "„Vielleicht wachsen wir ja über uns hinaus und können die Vilsbiburgerinnen ein bisschen ärgern!“ hatte der Markkleeberger Chefcoach Tim Reichenbach vor dem Spiel gesagt."
    ],
    videoUrl: "https://www.youtube.com/live/X7Uu6-KaJBY?si=eqcnd4uD22xHZEh6",
    youtubeViews: 1641
  },
  {
    number: 3104,
    matchId: 777353938,
    weekday: "Samstag",
    date: "17.01.2026",
    time: "20:00",
    home: "TV Waldgirmes",
    away: "Rote Raben Vilsbiburg",
    score: "1:3",
    ballPoints: "85:96",
    sets: [
      "25:21",
      "22:25",
      "21:25",
      "17:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/56441e10-f3be-4bc8-b777-a2f58c798bde/3104",
    rankAfter: 1,
    venue: "Sporthalle der Lahntalschule Atzbach",
    spectators: 150,
    duration: 87,
    mvps: [
      {
        team: "TV Waldgirmes",
        name: "Leonie Amann",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Tina De Groot",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780119820",
    summary: [
      "TV Waldgirmes – Rote Raben Vilsbiburg 1:3 / 85:96 (25:21 22:25 21:25 17:25) Der erste Satz gehörte mit Sicherheit zu den besten die das Team von Daniel Bock je abgeliefert haben."
    ],
    videoUrl: "https://www.youtube.com/live/gWTo4PeMiWI?si=m2jzjFJlhuw12KXw",
    youtubeViews: 1515
  },
  {
    number: 3111,
    matchId: 777353975,
    weekday: "Samstag",
    date: "24.01.2026",
    time: "18:00",
    home: "BBSC Berlin",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "41:75",
    sets: [
      "14:25",
      "11:25",
      "16:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/9bda92b9-de7a-4a65-b7cb-2c6731b04843/3111",
    rankAfter: 1,
    venue: "Sporthalle Hämmerlingstraße",
    spectators: 103,
    duration: 53,
    mvps: [
      {
        team: "BBSC Berlin",
        name: "Paula Reinisch",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Emely Brodowski",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=760515928"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780205797",
    summary: [
      "Die BBSC Damen haben am Samstagabend dem favorisierten Tabellenführer aus Niederbayern keine echte Paroli bieten können."
    ],
    videoUrl: "https://www.youtube.com/live/Xn4l5tvmHF8?si=x6z9HLdwG0eMfnqj",
    youtubeViews: 887
  },
  {
    number: 3116,
    matchId: 777354006,
    weekday: "Samstag",
    date: "31.01.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "Sparkassen Wildcats Stralsund",
    score: "3:0",
    ballPoints: "75:56",
    sets: [
      "25:23",
      "25:19",
      "25:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/ff124db4-de40-4f25-a205-60edc5458192/3116",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 907,
    duration: 69,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Tina De Groot",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      },
      {
        team: "Sparkassen Wildcats Stralsund",
        name: "Gesa Brandstrup",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780300853",
    summary: [
      "In einem kämpferischen und teils ausgeglichen Spiel setzte sich die druckvollere Spielweise durch."
    ],
    videoUrl: "https://www.youtube.com/live/ICimEaKWWS4?si=MIwUwV35hRnZyveU",
    youtubeViews: 1609
  },
  {
    number: 3125,
    matchId: 777354061,
    weekday: "Samstag",
    date: "07.02.2026",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "54:75",
    sets: [
      "13:25",
      "19:25",
      "22:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/fcac4f23-1bd2-4739-a68f-d4094ddb8a31/3125",
    rankAfter: 1,
    venue: "turmair Volleyballarena",
    spectators: 864,
    duration: 63,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780379225",
    summary: [
      "Mit 3:0 nach Sätzen konnte der mehrfache deutsche Meister und Pokalsieger von 2014 - Rote Raben Vilsbiburg – NawaRo Straubing am Samstagabend in heimischer Halle eine schmerzhafte Niederlage zufügen."
    ],
    videoUrl: "https://www.youtube.com/live/KIRh4YbMC0Q?si=_YfCxQqGpebTllTp",
    youtubeViews: 1887
  },
  {
    number: 3208,
    matchId: 777354556,
    weekday: "Samstag",
    date: "14.02.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "VCO Dresden",
    score: "3:0",
    ballPoints: "75:50",
    sets: [
      "25:11",
      "25:20",
      "25:19"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/96046c21-30f4-4961-933e-6eb293d02933/3208",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 889,
    duration: 56,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Anne Marie Hatch",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056897"
      },
      {
        team: "VCO Dresden",
        name: "Zoe Albert",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780468170",
    summary: [
      "Nach gerade einmal 56 Minuten war alles vorbei. Ein Abend, der aus Sicht der Roten Raben kaum hätte runder laufen können. Sie besiegten den VCO Dresden klar mit 3:0."
    ],
    videoUrl: "https://www.youtube.com/live/HIaulpJkzcY?si=i75dTgYYJRwZ_tib",
    youtubeViews: 2001
  },
  {
    number: 3128,
    matchId: 777354080,
    weekday: "Sonntag",
    date: "15.02.2026",
    time: "16:00",
    home: "Rote Raben Vilsbiburg",
    away: "TV Planegg-Krailling",
    score: "3:1",
    ballPoints: "91:86",
    sets: [
      "25:22",
      "16:25",
      "25:19",
      "25:20"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/95da3dc5-689a-44e0-a0d1-974d7f208628/3128",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 774,
    duration: 92,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Tina De Groot",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      },
      {
        team: "TV Planegg-Krailling",
        name: "Joana Huber",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=762602031"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780473536",
    summary: [
      "Was für ein Volleyball-Abend! Die Roten Raben haben ihren Fans ein Spiel voller Emotionen, Kampfgeist und Nervenstärke geschenkt – und sich am Ende mit einem hart erkämpften 3:1-Sieg belohnt"
    ],
    videoUrl: "https://www.youtube.com/live/_3V4RLmLpqE?si=4ial_DsSw71TlIvZ",
    youtubeViews: 1931
  },
  {
    number: 3139,
    matchId: 777354147,
    weekday: "Samstag",
    date: "21.02.2026",
    time: "19:00",
    home: "DSHS SnowTrex Köln",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "49:75",
    sets: [
      "15:25",
      "15:25",
      "19:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/edfe6e05-5702-4900-a8b0-715330464e85/3139",
    rankAfter: 1,
    venue: "Deutsche Sporthochschule Köln, Halle 22",
    spectators: 102,
    duration: 58,
    mvps: [
      {
        team: "DSHS SnowTrex Köln",
        name: "Emelie Siegner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780573170",
    summary: [
      "DSHS SnowTrex Köln stellte sich dem Tabellenführer mutig entgegen, musste sich am Ende jedoch der Klasse der Roten Raben Vilsbiburg mit 0:3 geschlagen geben."
    ],
    videoUrl: "https://www.youtube.com/watch?v=hxFniOAftro",
    youtubeViews: 1013
  },
  {
    number: 3147,
    matchId: 777354190,
    weekday: "Samstag",
    date: "07.03.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "TV Dingolfing",
    score: "3:1",
    ballPoints: "94:75",
    sets: [
      "25:18",
      "19:25",
      "25:12",
      "25:20"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/53a1f424-9309-413a-b289-08fa26d6576a/3147",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 1124,
    duration: 84,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Nadine Burbrink",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=36213842"
      },
      {
        team: "TV Dingolfing",
        name: "Franziska Koob",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780737139",
    summary: [
      "Der TV Dingolfing zeigte am Samstagabend beim Derby in Vilsbiburg trotz der Vier-Satz-Niederlage eine gute Leistung."
    ],
    videoUrl: "https://www.youtube.com/live/dlQSTEnhGB0?si=JrwCQMgxirWH_IN2",
    youtubeViews: 934
  },
  {
    number: 3153,
    matchId: 777354233,
    weekday: "Samstag",
    date: "21.03.2026",
    time: "19:30",
    home: "TV Hörde",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "58:76",
    sets: [
      "15:25",
      "19:25",
      "24:26"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/8b35d264-83a6-4eb2-bf1e-64931af36e25/3153",
    rankAfter: 1,
    venue: "Sporthalle Phoenix (Hörde III)",
    spectators: 67,
    duration: 68,
    mvps: [
      {
        team: "TV Hörde",
        name: "Emma Neukirchen",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780944833",
    summary: [
      "Am Samstag, den 21. März 2026, lieferten sich die Hörder Mädchen vom TV Hörde in der heimischen „Hörder Festung“ in Dortmund ein packendes Duell mit dem Tabellenführer Rote Raben Vilsbiburg. Trotz der"
    ],
    videoUrl: "https://www.youtube.com/live/a-10NJEe7kA?si=DDIm68fwEXXfsDKX",
    youtubeViews: 947
  },
  {
    number: 3159,
    matchId: 777354264,
    weekday: "Samstag",
    date: "28.03.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "ESA Grimma Volleys",
    score: "3:0",
    ballPoints: "75:51",
    sets: [
      "25:16",
      "25:15",
      "25:20"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/c6397b86-f4bc-4700-bd96-02dc9b5c7599/3159",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 1467,
    duration: 58,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Tina De Groot",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      },
      {
        team: "ESA Grimma Volleys",
        name: "Sydney Moore",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=778381936"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780995486",
    summary: [
      "Mit einem überzeugenden 3:0-Erfolg gegen Grimma sind die Roten Raben nicht mehr einzuholen. Damit haben sie sich bereits vier Spieltage vor dem Ende der Saison den Meistertitel."
    ],
    videoUrl: "https://www.youtube.com/live/mqbgCeE5SVM?si=F4V7Rt1GN2AyZ86E",
    youtubeViews: 2278
  },
  {
    number: 3167,
    matchId: 777354319,
    weekday: "Sonntag",
    date: "12.04.2026",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "70:76",
    sets: [
      "23:25",
      "24:26",
      "23:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/e934ffa2-84b4-4136-a09d-f184b199eeba/3167",
    rankAfter: 1,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 50,
    duration: 67,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Jenni Liu",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=59195178"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781153542",
    summary: [
      "Auch wenn die Roten Raben bereits als Meister in der Sparda 2. Liga Pro feststehen, haben sie eindrucksvoll bewiesen, warum sie ganz oben stehen: Mit einem souveränen 3:0-Auswärtssieg in Düsseldorf."
    ],
    videoUrl: "https://www.youtube.com/watch?v=PNjF77BZYd0&pp=ygU4RFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBSb3RlIFJhYmVuIFZpbHNiaWJ1cmc%3D",
    youtubeViews: 3811
  },
  {
    number: 3171,
    matchId: 777354344,
    weekday: "Samstag",
    date: "25.04.2026",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "BayerVolleys Leverkusen",
    score: "3:0",
    ballPoints: "75:54",
    sets: [
      "25:23",
      "25:12",
      "25:19"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/27808e6b-69b2-4787-a5c0-6f57675a2f63/3171",
    rankAfter: 1,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 1508,
    duration: 62,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Alayna Beth Crabtree",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056865"
      },
      {
        team: "BayerVolleys Leverkusen",
        name: "Clara Wübbeke",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=678885032"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781314162",
    summary: [
      "Der Trainer fliegt für die Partie in Vilsbiburg aus Finnland ein, doch das Team verliert mit 0:3"
    ],
    videoUrl: "https://www.youtube.com/watch?v=nol7UMPujxg",
    youtubeViews: 1243
  },
  {
    number: 3181,
    matchId: 777354405,
    weekday: "Samstag",
    date: "02.05.2026",
    time: "19:00",
    home: "VfL Oythe",
    away: "Rote Raben Vilsbiburg",
    score: "3:0",
    ballPoints: "75:61",
    sets: [
      "25:22",
      "25:18",
      "25:21"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/34188030-39ee-496c-81d1-ce4f6df94985/3181",
    rankAfter: 1,
    venue: "SH Gymnasium Antonianum Vechta",
    spectators: 351,
    duration: 68,
    mvps: [
      {
        team: "VfL Oythe",
        name: "Maria Petkova",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Alayna Beth Crabtree",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056865"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781372825",
    summary: [
      "Überraschungscoup zum Saisonabschluss: VfL Oythe schlägt Meister mit 3:0"
    ],
    videoUrl: "https://www.youtube.com/live/wZxzNFqRAMQ?si=RedgXmoIwZJsLSuG",
    youtubeViews: 1275
  }
];
