dataSetVersion = "2018-02-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Shotguns", key: "SG"},
	  { name: "Sangvis Ferris", key: "SF" }
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
    name: "Remove guns unavailable on global server. VERY INCOMPLETE!",
    key: "EN",
    tooltip: "Check this to remove guns completely unavailable as of 4 September 2018 in Global Server."
  },
  {
    name: "Remove non T-dolls",
    key: "notgirl",
    tooltip: "Mrs. Kalina, Persica and Helian."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "SAA",
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
    name: "M1895",
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
    name: "P38",
    img: "TDT5A6S.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "PPK",
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
    name: "C96",
    img: "BOxBzef.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Type92",
    img: "LB0QdEk.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Astra",
    img: "oPAgNcY.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "G17",
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
    name: "Ingram",
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
    name: "Vector",
    img: "Osv5S08.png",
    opts: {
      rpgclass: [ "SMG" ],
      rarity: ["st5"]
    }
  },
  {
    name: "PPSh-41",
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
    name: "Gr MP5",
    img: "PfdkEsZ.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Skorpion",
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
    name: "STEN MkII",
    img: "7lNpiy9.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "M38",
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
    name: "M1A1",
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
    name: "Simonova",
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
    name: "SVD",
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
    name: "G43",
    img: "o8dzAzd.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "WA2000",
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
    name: "Lee Enfield",
    img: "jZN48OV.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "FF FN49",
    img: "UvtiST5.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st2"]
    }
  },
  {
    name: "VM59",
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
    name: "StG44",
    img: "iqevWWH.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "Gr G41",
    img: "0IqRSXO.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "Gr G3",
    img: "Q213VMR.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "Gr G36",
    img: "kuoqf7e.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "416",
    img: "19n1BMk.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type56-1",
    img: "fOuWKdy.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "L85A1",
    img: "wSNfG5S.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "Fr FAMAS",
    img: "YpLUyW0.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    }
  },
  {
    name: "FF FNC",
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
    name: "TAR-21",
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
    name: "SIG-510",
    img: "9CqwDzg.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    }
  },
  {
    name: "M1918",
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
    name: "FF M249SAW",
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
    name: "DP28",
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
    name: "MG42",
    img: "iw0x63O.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "MG34",
    img: "bTkJz2t.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st2"]
    }
  },
  {
    name: "MG3",
    img: "T3Vn3gK.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Bren",
    img: "qvRx9sZ.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    }
  },
  {
    name: "FF FNP9",
    img: "m8PtsUE.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st2"]
    }
  },
  {
    name: "MP-446",
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
    name: "IDW",
    img: "wRW5AHG.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Type64",
    img: "7oJpUN3.jpg",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st2"]
    }
  },
  {
    name: "Type88",
    img: "HzzrLI6.jpg",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  {
    name: "Grizzly",
    img: "vteN5lk.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    }
  },
  {
    name: "M950A",
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
      rarity: ["st4"]
    }
  },
  {
    name: "Gr Mk23",
    img: "2HBEpGz.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    }
  },
  {
    name: "P7",
    img: "2IDsO88.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    }
  },
  {
    name: "UMP9",
    img: "hAS8OC4.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    }
  },
  {
    name: "UMP40",
    img: "XuRqSCh.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"],
	  EN: true
    }
  },
  {
    name: "UMP45",
    img: "eKn7mhf.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Gr G36c",
    img: "mPO8SOy.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "OTs-12",
    img: "uAOEFkW.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "FAL",
    img: "yswXsJo.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  { 
    name: "FF F2000",
    img: "AXHNqhY.png", 
    opts: {
      rpgclass: ["AR"],
      rarity: ["st2"]
    } 
  },
  {
    name: "CZ-805",
    img: "tynLJUa.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "Gr MG5",
    img: "zJzpizw.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st5"]
    }
  },
  {
    name: "FG42",
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
    name: "Negev",
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
    name: "Suomi",
    img: "ZIx5Ob0.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    }
  },
  {
    name: "Z-62",
    img: "yDKixlD.png",
    opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Gr PSG-1",
    img: "xPFuUNi.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st4"]
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
    name: "OTs-14",
    img: "IcAfOxb.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "ARX-160",
    img: "cOVncyA.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st3"]
    }
  },
  {
    name: "Mk 48",
    img: "TYh7jp8.png",
    opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    }
  },
  {
    name: "Gr G11",
    img: "zK8VHKR.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "P99",
    img: "7lBzesK.png",
    opts: {
      rpgclass: ["HG"],
      rarity: ["st3"]
    }
  },
  {
    name: "Super SASS",
    img: "LPbyjwC.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st3"]
    }
  },
  { name: "Gr MG4",
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
      rarity: ["st5"]
    }
  },
  
  {
    name: "M99",
    img: "KaDR1Fo.png",
    opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type95",
    img: "9Sz2vMP.png",
    opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    }
  },
  {
    name: "Type97",
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
    name: "Type63",
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
    name: "SR-3MP",
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
    name: "Five-seven",
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
  
  { name: "Persica", 
	img: "EhMtTaF.png", 
	opts: {
		notgirl: true,
	  rpgclass: ["HG", "SMG", "SG", "MG", "AR", "RF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Kalina", 
	img: "8VSfeZl.png", 
	opts: {
      notgirl: true,
	  rpgclass: ["HG", "SMG", "SG", "MG", "AR", "RF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
	  } },
	  
	  { name: "Angelica", 
	img: "9m4cGS2.png", 
	opts: {
      notgirl: true,
	  rpgclass: ["HG", "SMG", "SG", "MG", "AR", "RF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
	  } },
	  
	  { name: "Nyto Obelisk", 
	img: "k3geabt.png", 
	opts: {
      notgirl: true,
	  rpgclass: ["HG", "SMG", "SG", "MG", "AR", "RF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
	  } },
	  
	  { name: "Nyto Polarday", 
	img: "LENVlVl.png", 
	opts: {
      notgirl: true,
	  rpgclass: ["HG", "SMG", "SG", "MG", "AR", "RF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
	  } },
  
  { name: "Helianthus", 
	img: "YPYCpCc.png", 
	opts: {
		notgirl: true,
	  rpgclass: ["HG", "SMG", "SG", "MG", "AR", "RF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	
	
	{ name: "Am KSG", 
	img: "T9G2UBu.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st5"]
    } },
	
	{ name: "M37", 
	img: "m7qPkbX.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st4"]
    } },
	
	{ name: "M500", 
	img: "J1NPjdu.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st3"]
    } },
	
	{ name: "M590", 
	img: "L9TF4Vx.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st4"]
    } },
	
	{ name: "Super-Shorty", 
	img: "8T8IxC7.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st4"]
    } },
	
	{ name: "KS-23", 
	img: "c3vA3Gn.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st3"]
    } },
	
	{ name: "RMB-93", 
	img: "tmgAviM.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st3"]
    } },
	
	{ name: "Type97S", 
	img: "ho2BLlw.png", 
	opts: {
		rpgclass: ["SG"],
		rarity: ["st4"]
    } },
	
		{ name: "PKP", 
	img: "wNSvvfS.png", 
	opts: {
		rpgclass: ["MG"],
		rarity: ["st5"]
    } },
  
	  { name: "Ribeyrolles", 
	img: "Hsb4QnV.png", 
	opts: {
      rpgclass: ["AR"],
      rarity: ["st4"]
    } },
	
	//SAT8
	{ name: "S.A.T.8", 
	img: "PlFRzZy.png", 
	opts: {
      rpgclass: ["SG"],
      rarity: ["st5"]
    } },
	
	//Sangvis
	{ name: "Agent", 
	img: "5IVdcE4.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Elisa", 
	img: "MIByVuu.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Scarecrow", 
	img: "1RBZb5P.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Executioner", 
	img: "ItkqP0A.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Judge", 
	img: "8kpN1ll.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Architect", 
	img: "ow3wCTq.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Gager", 
	img: "gNWAUEg.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Dreamer", 
	img: "7QZmXMv.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Ouroboros", 
	img: "A4ASSDK.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Alchemist", 
	img: "FLJXYdg.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Destroyer", 
	img: "ZH3JLwj.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Intruder", 
	img: "WRG7I2C.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	{ name: "Hunter", 
	img: "Iuj11VP.png", 
	opts: {
	  rpgclass: ["SF"],
	  rarity: ["st2", "st3", "st4", "st5", "ex"]
    } },
	
	
	{ name: "Colt Python", 
	img: "cIqDTV7.png", 
	opts: {
      rpgclass: ["HG"],
      rarity: ["st5"],
	  EN: true
    } },
	
	//SPAS
	{ name: "SPAS-12", 
	img: "NgRB6Pl.png", 
	opts: {
      rpgclass: ["SG"],
      rarity: ["st4"],
	  EN: true
    } },
	
	
	{ name: "Type 80", 
	img: "YrODJMQ.png", 
	opts: {
      rpgclass: ["MG"],
      rarity: ["st4"],
	  EN: true
    } },
	
	
	{ name: "Thunder", 
	img: "xJW8Z7Q.png", 
	opts: {
      rpgclass: ["HG"],
      rarity: ["st4"],
	  EN: true
    } },
	
	{ name: "Contender", 
	img: "2lv8YUt.png", 
	opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    } },
	
	{ name: "Ameli", 
	img: "rsnVyrT.png", 
	opts: {
      rpgclass: ["MG"],
      rarity: ["st4"],
	  EN: true
    } },
	
	{ name: "XM8", 
	img: "DCDSp5C.png", 
	opts: {
      rpgclass: ["AR"],
      rarity: ["st4"],
	  EN: true
    } },	
	
		{ name: "IWS 2000", 
	img: "I16r24X.png", 
	opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
    } },

	{ name: "PP-90", 
	img: "bCidk5M.png", 
	opts: {
      rpgclass: ["SMG"],
      rarity: ["st4"]
    } },	
	
	{ name: "Type 79", 
	img: "pN6PX6Q.png", 
	opts: {
      rpgclass: ["SMG"],
      rarity: ["st5"]
    } },
	
	{ name: "MT-9", 
	img: "ij4bK0k.png", 
	opts: {
      rpgclass: ["SMG"],
      rarity: ["st3"]
    } },
	
	{ name: "RPD", 
	img: "hvFhdG5.png", 
	opts: {
      rpgclass: ["MG"],
      rarity: ["st3"]
    } },
	
	{ name: "CZ75", 
	img: "kOgXCXb.png", 
	opts: {
      rpgclass: ["HG"],
      rarity: ["st5"]
    } },
	
	{ name: "ZAS M21", 
	img: "K0fIVYA.png", 
	opts: {
      rpgclass: ["AR"],
      rarity: ["st5"]
    } },
	
	{ name: "Spitfire", 
	img: "PKTogHd.png", 
	opts: {
      rpgclass: ["HG"],
      rarity: ["st4"]
    } },
	
	{ name: "AEK-999", 
	img: "M4LkWVH.png", 
	opts: {
      rpgclass: ["MG"],
      rarity: ["st4"]
    } },
	
	{ name: "NS2000", 
	img: "1kO6GKV.png", 
	opts: {
      rpgclass: ["SG"],
      rarity: ["st3"]
    } },
	
	{ name: "USAS-12", 
	img: "1LBoCtR.png", 
	opts: {
      rpgclass: ["SG"],
      rarity: ["st4"]
    } },
	
	{ name: "JS05", 
	img: "EsKvdXy.png", 
	opts: {
      rpgclass: ["RF"],
      rarity: ["st5"]
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
