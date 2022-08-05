"use strict";
console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
{
    let LietuvosTop5LargestCities;
    (function (LietuvosTop5LargestCities) {
        LietuvosTop5LargestCities[LietuvosTop5LargestCities["Vilnius"] = 1] = "Vilnius";
        LietuvosTop5LargestCities[LietuvosTop5LargestCities["Kaunas"] = 2] = "Kaunas";
        LietuvosTop5LargestCities[LietuvosTop5LargestCities["Klaipeda"] = 3] = "Klaipeda";
        LietuvosTop5LargestCities[LietuvosTop5LargestCities["\u0160iauliai"] = 4] = "\u0160iauliai";
        LietuvosTop5LargestCities[LietuvosTop5LargestCities["Panev\u0117\u017Eys"] = 5] = "Panev\u0117\u017Eys";
    })(LietuvosTop5LargestCities || (LietuvosTop5LargestCities = {}));
    console.log(LietuvosTop5LargestCities);
}
console.groupEnd();
//# sourceMappingURL=TS-Enums.js.map