var tracery = require('tracery-grammar');

var rawGrammar = 
{
	"origin": [
		"#bonjour#, je tenais à vous rappeler qu'il était #medicis#.",
		"#bonjour#, n'oubliez pas qu'il est #medicis#.",
		"Il est #medicis# les p'tits potes !",
		"#bonjour#, bon vous connaissez la chanson.",
		"Oubliez pas que comme hier à la même heure, il est #medicis# !",
		"Il est #medicis# et à demain !",
		"Prout ! il est #medicis#...",
		"#bonjour#, ai-je vraiment besoin de rappeler quelle heure il est ?",
		"#bonjour# c'est #celebrite# ! Et non c'est moi hihi, il est #medicis# !",
		"#bonjour#, #medicis#, c'est pareil tous les jours de toute façon.",
		"#medicis#.",
		"C'est #medicis#.",
		"Il est #medicis#.",
		"Hello, it's six past twelve (c'est en anglais mais vous connaissez).",
		"Houston, on a un problème... ah non il est juste #medicis# !",
		"#bonjour#",
		"Ici #celebrite# et non c'est la vieille Catherine et il est #medicis#",
		"#medicis#, #bonjour#. \noulà petit bug là...",
		"#bonjour#"
	],
	"bonjour": [
		"Salut",
		"Yo",
		"Bonjour",
		"Wesh",
		"Salam",
		"Bien le bonjour",
		"Salusse",
		"Salut Salut",
		"Hey",
		"Wazaaaaaaaaa",
		"Hello",
		"À l'abordage",
		"Annyeonghaseyo",
		"Nǐ hǎo",
		"Kon'nichiwa",
		"Bonum diem",
		"Buongiorno",
		"Buenos dias",
		"Hola"
	],
	"medicis": [
		"midi six",
		"12:06",
		"12:06 (faut le lire midi six, pas douze heure six sinon ça marche pas)",
		"midi 6",
		"six past twelve (c'est en anglais mais vous connaissez)",
		"Catherine",
		"Catherine de Midi-six",
		"Catherine de Médicis",
		"mehdi 6",
		"mehdi six"
	],
	"celebrite": [
		"The Rock",
		"Snoop Dogg",
		"Chuck Norris",
		"Justin Timberlake",
		"Uma Thurman",
		"Brad Pitt",
		"Daenerys",
		"Michael Jackson",
		"Lady Gaga",
		"Katy Perry",
		"Nicki Minaj",
		"Kate Moss",
		"Kate Middleton",
		"Elisabeth II",
	]
}

var processedGrammar = tracery.createGrammar(rawGrammar);

processedGrammar.addModifiers(tracery.baseEngModifiers); 

var tweet = processedGrammar.flatten("#origin#");
//console.log(tweet);


var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  //console.log(data)
})



