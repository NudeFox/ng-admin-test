var md5 = require('md5');

export default function(db) {
    // var randomDate = require('./randomDate')(chance);
    var users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Blet",
            "role": "admin",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "role": "ololoshka",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Olo Howell",
            "username": "Artur",
            "role": "UFO",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 4,
            "name": "Ervin Quint",
            "username": "Huks",
            "role": "UFO",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 5,
            "name": "Hus Hol",
            "username": "tue",
            "role": "UFO",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 6,
            "name": "Kara Nolan",
            "username": "asdfg",
            "role": "UFO",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }
    ];


    // for (var i = 0; i < 900; i++) {
    //     var first_seen = randomDate();
    //     var last_seen = randomDate(first_seen)
    //     var has_ordered = chance.bool({likelihood: 25})
    //     var email = chance.email();
    //     var groups = [];
    //     customers.push({
    //         id: i,
    //         first_name: chance.first(),
    //         last_name: chance.last(),
    //         email: email,
    //         address: has_ordered ? chance.address() : null,
    //         zipcode: has_ordered ? chance.zip() : null,
    //         city: has_ordered ? chance.city() : null,
    //         avatar: 'https://robohash.org/' + md5(email) + '.png',
    //         birthday: has_ordered ? chance.birthday() : null,
    //         first_seen: first_seen,
    //         last_seen: last_seen,
    //         has_ordered: has_ordered,
    //         latest_purchase: null, // finalize
    //         has_newsletter: has_ordered ? chance.bool({likelihood: 30}) : true,
    //         groups: [], // finalize
    //         nb_commands: 0,
    //         total_spent: 0
    //     })
    // };
    return users;
}
