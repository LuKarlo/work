var nazioni = ["Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antigua",
                "Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrein",
                "Bangladesh",
                "Barbados",
                "Bielorussia",
                "Belgio",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia",
                "Bosnia Erzegovina",
                "Botswana","Brasile",
                "Isole Vergini Britanniche",
                "Brunei",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambogia",
                "Camerun",
                "Capo Verde",
                "Isole Cayman ",
                "Ciad",
                "Cile",
                "Cina",
                "Colombia",
                "Congo",
                "Isole Cook",
                "Costa Rica",
                "Costa d'Avorio",
                "Croazia",
                "Cuba",
                "Cipro",
                "Repubblica Ceca",
                "Danimarca",
                "Gibuti",
                "Dominica",
                "Repubblica Dominicana",
                "Ecuador",
                "Egitto",
                "El Salvador",
                "Guinea Equatoriale",
                "Estonia",
                "Etiopia",
                "Isole Falkland",
                "Isole Faroe",
                "Fiji",
                "Finlandia",
                "Francia",
                "Polinesia francese",
                "Indie occidentali francesi",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germania",
                "Ghana",
                "Gibilterra",
                "Grecia",
                "Groenlandia",
                "Grenada",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Hong Kong",
                "Ungheria",
                "Islanda",
                "India",
                "Indonesia",
                "Iran",
                "Iraq",
                "Irlanda",
                "Isola di Man",
                "Israele",
                "Italia ",
                "Giamaica",
                "Giappone",
                "Jersey",
                "Giordania",
                "Kazakistan",
                "Kenya",
                "Kuwait",
                "Kirghizistan",
                "Laos",
                "Lettonia",
                "Libano",
                "Lesotho",
                "Liberia",
                "Libia",
                "Liechtenstein",
                "Lituania",
                "Lussemburgo",
                "Macao",
                "Macedonia ",
                "Madagascar",
                "Malawi",
                "Malesia",
                "Maldive",
                "Mali",
                "Malta",
                "Mauritania",
                "Mauritius",
                "Messico",
                "Moldavia",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Marocco",
                "Mozambico",
                "Namibia",
                "Nepal",
                "Paesi Bassi",
                "Nuova Caledonia",
                "Nuova Zelanda",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Norvegia",
                "Oman",
                "Pakistan",
                "Israele",
                "Panama",
                "Papua Nuova Guinea",
                "Paraguay",
                "Perù",
                "Filippine",
                "Polonia",
                "Portogallo",
                "Porto Rico",
                "Qatar",
                "Romania",
                "Russia",
                "Rwanda",
                "Samoa",
                "San Marino",
                "Arabia Saudita",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovacchia",
                "Slovenia",
                "Sud Africa",
                "Corea del Sud",
                "Spagna",
                "Sri Lanka",
                "Santa Lucia",
                "St Vincent",
                "St. Lucia",
                "Sudan",
                "Suriname",
                "Swaziland",
                "Svezia",
                "Svizzera",
                "Siria",
                "Taiwan",
                "Tajikistan",
                "Tanzania",
                "Thailandia",
                "Togo",
                "Trinidad Tobago",
                "Tunisia",
                "Turchia",
                "Turkmenistan",
                "Uganda",
                "Ucraina",
                "Emirati Arabi",
                "Regno Unito",
                "Uruguay",
                "Uzbekistan",
                "Venezuela",
                "Vietnam",
                "Isole Vergini",
                "Yemen",
                "Zambia",
                "Zimbabwe"]
                
                console.log(risposta);

                nazioni = nazioni.sort(function() {
                    return Math.random() - 0.5;});
                    window.onload = function() {
                        alert(nazioni[0]);
                    };
                
                    
                    let risposta = document.getElementById('inputA');
                    alert(risposta);
