dataSetVersion = "2018-02-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Gun Type",
    key: "rpgclass",
    tooltip: "Check this to restrict to certain gun types.",
    checked: false,
    sub: [
      { name: "Handguns", key: "HG" },
      { name: "Submachine Guns", key: "SMG" },
      { name: "Assault Rifles", key: "AR" },
      { name: "Rifles", key: "RF" },
      { name: "Machine Guns", key: "MG" },
      { name: "Shotguns", key: "SG" }
    ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict guns by their star rarity.",
    checked: false,
    sub: [ { name: "Normal", tooltip: "2 Stars", key: "st2" }, { name: "Rare", tooltip: "3 Stars", key: "st3" }, { name: "Epochal", tooltip: "3 Stars", key: "st4" }, { name: "Legendary", tooltip: "5 Stars", key: "st5" }, { name: "Extra", tooltip: "From crossover events.", key: "ex" }
    ]
  },
  {
    name: "Remove guns unavailable on global server",
    key: "EN",
    tooltip: "Check this to remove guns completely unobtainable as of 22 June 2018 in Global Server."
  },
  {
    name: "Remove Non T-Dolls",
    key: "notgirl",
    tooltip: "Check this to remove Kalina and Persica from the sorter."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Colt SAA Revolver",
    img: "W3wTsp8.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    }
  },
  {
    name: "M1911",
    img: "wvW4hZg.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "M9",
    img: "dA8Agzj.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Nagant Revolver",
    img: "gliLqwM.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Tokarev",
    img: "GGr9qAS.png",
    opts: {
      rpgclass: [ "HG" ],
      rarity: ["st3"]
    }
  },
  {
    name: "Stechkin",
    img: "VumQaSJ.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Makarov",
    img: "74bolrD.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Walther P.38",
    img: "TDT5A6S.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Walther PPK",
    img: "FKmQiT3.png",
    opts: {
      rpgclass: [ "HG" ],
      rarity: ["st2"]
    }
  },
  {
    name: "P08",
    img: "5yIqad2.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Mauser C96",
    img: "BOxBzef.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Type 92",
    img: "LB0QdEk.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Astra 357 Revolver",
    img: "oPAgNcY.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Glock 17",
    img: "YZ477lM.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Thompson",
    img: "BT7OIGX.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "M3",
    img: "6UCV1od.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Ingram MAC-10",
    img: "R1VYDth.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "FMG-9",
    img: "2WT4oj4.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "KRISS Vector",
    img: "Osv5S08.png",
    opts: {
      rpgclass: [ "SMG" ],
      rarity: ["st5"]
    }
  },
  {
    name: "Papasha!",
    img: "uIGlrwh.png",
    opts: {
      rpgclass: [ "SMG" ],
      rarity: ["st2"]
    }
  },
  {
    name: "PPS-43",
    img: "aBRJtcL.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "PP90",
    img: "wm8pDfg.png",
    opts: {
      rpgclass: [ "SMG" ],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "PP-2000",
    img: "y9tp82d.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "MP40",
    img: "A0VnpeR.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "HK MP5",
    img: "PfdkEsZ.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Škorpion vz. 61",
    img: "wyRNfnF.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "HK MP7",
    img: "cHrGKqS.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"],
	  EN: true
    }
  },
  {
    name: "STEN",
    img: "7lNpiy9.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Beretta Modello 38",
    img: "yTP0g3a.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Micro Uzi",
    img: "ggwAZst.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "m45",
    img: "9vn8Sib.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "M1 Garand",
    img: "1kQ2xuT.png",
    opts: {
      rpgclass: [ "RF" ],
      rarity: ["st3"]
    }
  },
  {
    name: "M1 carbine",
    img: "o6rEgyZ.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  {
    name: "Springfield",
    img: "SCJ9wNU.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st4"]
    }
  },
  {
    name: "M14",
    img: "q73ZogI.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  {
    name: "M21",
    img: "shvjAnq.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  {
    name: "Mosin–Nagant",
    img: "FtrOZzA.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st4"]
    }
  },
  {
    name: "SVT-38",
    img: "K7tdSgJ.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "SKS ''Simonova''",
    img: "kemVH6h.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "PTRD",
    img: "RNdiQGa.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st4"]
    }
  },
  {
    name: "SVD 'Dragunov'",
    img: "a3tocNN.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st4"]
    }
  },
  {
    name: "SV-98",
    img: "Xt5UDIo.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  {
    name: "Kar98k",
    img: "dJtLvBc.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "Gewehr 43",
    img: "o8dzAzd.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "Walther WA 2000",
    img: "dbr61Qe.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type 56",
    img: "Zh3hfEb.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "Lee-Enfield",
    img: "jZN48OV.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "FN-49",
    img: "UvtiST5.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "Beretta BM59",
    img: "54VT4m3.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "NTW-20",
    img: "kcsNFyz.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "M16A1",
    img: "T6VidQg.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "M4A1",
    img: "8uFo1Q0.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "M4 SOPMOD II",
    img: "RYzkU3a.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "ST AR-15",
    img: "HGGRUAX.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "AK-47",
    img: "qrxU0ty.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "AS Val",
    img: "cQsg37U.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "Sturmgewehr 44",
    img: "iqevWWH.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "HK G41",
    img: "0IqRSXO.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "HK G3",
    img: "Q213VMR.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "HK G36",
    img: "kuoqf7e.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "HK 416",
    img: "19n1BMk.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type 56-1",
    img: "fOuWKdy.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "L85A1 IW",
    img: "wSNfG5S.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "FAMAS",
    img: "YpLUyW0.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "FNC",
    img: "eUzNrka.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "Galil",
    img: "mAq27HS.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "IWI Tavor",
    img: "gVYXQSf.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "Steyr AUG",
    img: "2INYzgj.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"],
	  EN: true
    }
  },
  {
    name: "SIG SG 510",
    img: "9CqwDzg.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "B.A.R. M1918",
    img: "3PyfOOU.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    }
  },
  {
    name: "M2HB",
    img: "ox8VRIb.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "M60",
    img: "mcY5KKp.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    }
  },
  {
    name: "M249 SAW",
    img: "oeI0JnG.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "M1919A4",
    img: "g2rth0A.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "LWMMG",
    img: "fD257xY.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Degtyaryova Pekhotnyj",
    img: "oIuO9gi.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st2"]
    }
  },
  {
    name: "RPD",
    img: "CAwpdX6.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "PK",
    img: "E2C31cA.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Maschinengewehr 42",
    img: "iw0x63O.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Maschinengewehr 34",
    img: "bTkJz2t.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st2"]
    }
  },
  {
    name: "HK MG3",
    img: "T3Vn3gK.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Bren LMG",
    img: "qvRx9sZ.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "FN FNP9",
    img: "m8PtsUE.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "MP-446 Viking",
    img: "izC8FSw.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Spectre M4",
    img: "5Z29uBN.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Bushman IDW",
    img: "wRW5AHG.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Type 64",
    img: "7oJpUN3.jpg",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Hanyang Type 88",
    img: "HzzrLI6.jpg",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  {
    name: "Grizzly MkV",
    img: "vteN5lk.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Calico M950",
    img: "GO68eiD.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    }
  },
  {
    name: "SPP-1",
    img: "0Sl4XO4.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "HK MK23",
    img: "2HBEpGz.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    }
  },
  {
    name: "HK P7",
    img: "2IDsO88.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    }
  },
  {
    name: "HK UMP9",
    img: "hAS8OC4.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    }
  },
  {
    name: "HK UMP40",
    img: "XuRqSCh.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "HK UMP45",
    img: "eKn7mhf.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    }
  },
  {
    name: "HK G36C",
    img: "mPO8SOy.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "OTs-12 Tiss",
    img: "uAOEFkW.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "FN FAL",
    img: "yswXsJo.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  { 
    name: "FN F2000",
    img: "AXHNqhY.png", 
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    } 
  },
  {
    name: "CZ 805 BREN",
    img: "tynLJUa.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "HK MG5",
    img: "zJzpizw.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Fallschirmjägergewehr 42",
    img: "QAKFXaz.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st2"]
    }
  },
  {
    name: "AAT-52",
    img: "8MZJHQN.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st2"]
    }
  },
  {
    name: "IMI Negev",
    img: "N6AkspD.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Serdyukova",
    img: "INl4ygK.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "Welrod MkII",
    img: "USYJKIn.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Suomi KP/-31",
    img: "ZIx5Ob0.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Star Model Z62",
    img: "yDKixlD.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "PSG-1",
    img: "xPFuUNi.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "9A-91",
    img: "YV6vIok.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "OTs-14 Groza",
    img: "IcAfOxb.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"],
	  EN: true
    }
  },
  {
    name: "Beretta ARX160",
    img: "cOVncyA.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "Mk 48",
    img: "TYh7jp8",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "G11",
    img: "zK8VHKR.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"],
	  EN: true
    }
  },
  {
    name: "Walther P99",
    img: "7lBzesK.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "Super SASS",
    img: "LPbyjwC.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"],
      EN: true
    }
  },
  { name: "HK MG4",
   	img: "SAhStJ9.png", 
	opts: {
      rpgclass: ["MG"],
      rarity: ["st5"]
    } },
  {
    name: "Norinco NZ-75",
    img: "Ya4kGcg.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st5"],
	  EN: true
    }
  },
  {
    name: "Type 79",
    img: "W89xyzD.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Zijiang M99",
    img: "KaDR1Fo.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type 95",
    img: "9Sz2vMP.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type 97",
    img: "qqQuBBA.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "EVO 3 A1",
    img: "4Je62Gt.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "Type 59",
    img: "KXSDADr.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "Type 63",
    img: "9tIksNN.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "AR70",
    img: "o0jkkIY.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"],
	  EN: true
    }
  },
  {
    name: "SR-3MP Vikhr",
    img: "f45tRAh.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "PP-19 Bizon",
    img: "HigOPkN.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "PP-19-01 Vityaz-SN",
    img: "4CEogHM.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "6P62",
    img: "DalbSq9.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "Bren Ten",
    img: "H5LZNU5.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"],
	  EN: true
    }
  },
  {
    name: "PSM",
    img: "xZUVCTu.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"],
      EN: true
    }
  },
  {
    name: "FN Five-seveN",
    img: "6r6fYSC.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    }
  },
  { name: "RO635", 
	img: "4p02TtH.png", 
	opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"],
	  EN: true
    } },
  {
    name: "ASh-12.7",
    img: "dO52Qxz.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  }
];
