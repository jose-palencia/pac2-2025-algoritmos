const personas = [{
    "id": 1,
    "firstName": "Phil",
    "lastName": "Vogeler",
    "email": "pvogeler0@reddit.com",
    "gender": "Female"
}, {
    "id": 2,
    "firstName": "Ronalda",
    "lastName": "Mackilpatrick",
    "email": "rmackilpatrick1@apple.com",
    "gender": "Female"
}, {
    "id": 3,
    "firstName": "Alonzo",
    "lastName": "Grzesiewicz",
    "email": "agrzesiewicz2@skyrock.com",
    "gender": "Male"
}, {
    "id": 4,
    "firstName": "Rogerio",
    "lastName": "Alberts",
    "email": "ralberts3@weibo.com",
    "gender": "Male"
}, {
    "id": 5,
    "firstName": "Lanna",
    "lastName": "Burdfield",
    "email": "lburdfield4@jiathis.com",
    "gender": "Female"
}, {
    "id": 6,
    "firstName": "Yelena",
    "lastName": "Jayume",
    "email": "yjayume5@smugmug.com",
    "gender": "Female"
}, {
    "id": 7,
    "firstName": "Thatch",
    "lastName": "Boutcher",
    "email": "tboutcher6@etsy.com",
    "gender": "Male"
}, {
    "id": 8,
    "firstName": "Jeniece",
    "lastName": "Wilacot",
    "email": "jwilacot7@pen.io",
    "gender": "Female"
}, {
    "id": 9,
    "firstName": "Cece",
    "lastName": "Yitshak",
    "email": "cyitshak8@goo.gl",
    "gender": "Male"
}, {
    "id": 10,
    "firstName": "Pooh",
    "lastName": "Anker",
    "email": "panker9@cbsnews.com",
    "gender": "Female"
}, {
    "id": 11,
    "firstName": "Yehudi",
    "lastName": "Gawthrop",
    "email": "ygawthropa@addthis.com",
    "gender": "Male"
}, {
    "id": 12,
    "firstName": "Dayna",
    "lastName": "Kennard",
    "email": "dkennardb@studiopress.com",
    "gender": "Female"
}, {
    "id": 13,
    "firstName": "Meredith",
    "lastName": "Bullerwell",
    "email": "mbullerwellc@deliciousdays.com",
    "gender": "Male"
}, {
    "id": 14,
    "firstName": "Helaina",
    "lastName": "Hollingshead",
    "email": "hhollingsheadd@cam.ac.uk",
    "gender": "Female"
}, {
    "id": 15,
    "firstName": "Ivie",
    "lastName": "Clinch",
    "email": "iclinche@live.com",
    "gender": "Female"
}, {
    "id": 16,
    "firstName": "Antonella",
    "lastName": "Amort",
    "email": "aamortf@xrea.com",
    "gender": "Female"
}, {
    "id": 17,
    "firstName": "Thaddus",
    "lastName": "Rosser",
    "email": "trosserg@java.com",
    "gender": "Male"
}, {
    "id": 18,
    "firstName": "Kenn",
    "lastName": "Penwright",
    "email": "kpenwrighth@apple.com",
    "gender": "Male"
}, {
    "id": 19,
    "firstName": "Zandra",
    "lastName": "Heinrich",
    "email": "zheinrichi@xrea.com",
    "gender": "Female"
}, {
    "id": 20,
    "firstName": "Pascal",
    "lastName": "Baack",
    "email": "pbaackj@comcast.net",
    "gender": "Male"
}]


// for (let i = 0; i < personas.length; i++) {
//     console.log(`${i+1} - ${personas[i].firstName} ${personas[i].lastName}`);        
// }

/* 
    % modulo
* 1 - IMPAR
* 2 - PAR
* 3 - IMPAR
*/

for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`${i} - PAR`);
    } else {
        console.log(`${i} - IMPAR`);
    }
}