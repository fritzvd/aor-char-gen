Vue.component('dice-pool', {
  render: function (cE) {
    console.log(this.skill, this.ability)
    let total = Math.max(this.skill, this.ability);
    let upgrade = Math.min(this.skill, this.ability);
    console.log(total)
    return cE('span', 
      Array.apply(null, {length: total}).map((v, i) => {
        if (i < upgrade) {
          return cE('span', {class: { icon: true, proficiency: true}})
        } else {
          return cE('span', {class: { icon: true, ability: true}})
        }
      })
    )
  },
  props: ['skill', 'ability'],
})

const app = new Vue({
  el: '#v-app-sheet',
  data: {
    characteristics: [
      {
        id: 0,
        name: "Brawl",
        score: 2
      },
      {
        id: 1,
        name: "Agility",
        score: 2
      },
      {
        id: 2,
        name: "Intellect",
        score: 2
      },
      {
        id: 3,
        name: "Cunning",
        score: 2
      },
      {
        id: 4,
        name: "Willpower",
        score: 2
      },
      {
        id: 5,
        name: "Presence",
        score: 2
      },
    ],
    skills: [
      {
        name: "Astrogation",
        rank: 0,
        characteristic: 2
      },
      {name: "Athletics (Br)",
        rank: 3,
        characteristic: 0
      },
      {name: "Charm (Pr)",
        rank: 0,
        characteristic: 5
      },
      {name: "Coercion (Will)",
        rank: 0,
        characteristic: 4
      },
      {name: "Computers (Int)",
        rank: 0,
        characteristic: 2
      },
      {name: "Cool (Pr)",
        rank: 0,
        characteristic: 5
      },
      {name: "Coordination (Ag)",
        rank: 0,
        characteristic: 1
      },
      {name: "Deception (Cun)",
        rank: 0,
        characteristic: 3
      },
      {name: "Discipline (Will)",
        rank: 0,
        characteristic: 4
      },
      {name: "Leadership (Pr)",
        rank: 0,
        characteristic: 5
      },
      {name: "Mechanics (Int)",
        rank: 0,
        characteristic: 2
      },
      {name: "Medicine (Int)",
        rank: 0,
        characteristic: 2
      },
      {name: "Negotiation (Pr)",
        rank: 0,
        characteristic: 5
      },
      {name: "Perception (Cun)",
        rank: 0,
        characteristic: 3
      },
      {name: "Piloting - Planetary (Ag)",
        rank: 0,
        characteristic: 1
      },
      {name: "Piloting - Space (Ag)",
        rank: 0,
        characteristic: 1
      },
      {name: "Resilience (Br)",
        rank: 0,
        characteristic: 0
      },
      {name: "Skulduggery (Cun)",
        rank: 0,
        characteristic: 3
      },
      {name: "Stealth (Ag)",
        rank: 0,
        characteristic: 1
      },
      {name: "Streetwise (Cun)",
        rank: 0,
        characteristic: 3
      },
      {name: "Survival (Cun)",
        rank: 0,
        characteristic: 3
      },
      {name: "Vigilance (Will)",
        rank: 0,
        characteristic: 4
      },
    ]
  },
})



// convert marked text into dice and return a HTML format
// 'borrowed' from: https://github.com/stoogoff/sw-adversaries/blob/master/src/media/js/lib/utils.js  
function dice (stat, skill) {
	let total = Math.max(stat, skill);
	let upgrade = Math.min(stat, skill);
  console.log(total, upgrade)
	return [total, upgrade];
}

let diceMap = {
	// dice
	"boost": "<span class='icon boost'></span>",
	"proficiency": "<span class='icon proficiency'></span>",
	"ability": "<span class='icon ability'></span>",
	"setback": "<span class='icon setback'></span>",
	"challenge": "<span class='icon challenge'></span>",
	"difficulty": "<span class='icon difficulty'></span>",
	"force": "<span class='icon force'></span>",

	// outcomes
	"advantage": "<span class='icon advantage'></span>",
	"failure": "<span class='icon failure'></span>",
	"success": "<span class='icon success'></span>",
	"threat": "<span class='icon threat'></span>",
	"triumph": "<span class='icon triumph'></span>",
	"despair": "<span class='icon despair'></span>",

	// force
	"lightside": "<span class='icon lightside'></span>",
	"darkside": "<span class='icon darkside'></span>",
	"forcepip": "<span class='icon forcepip'></span>",

	// difficulty levels
	"easy": "<strong>Easy</strong> (<span class='icon difficulty'></span>)",
	"average": "<strong>Average</strong> (<span class='icon difficulty'></span><span class='icon difficulty'></span>)",
	"hard": "<strong>Hard</strong> (<span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span>)",
	"daunting": "<strong>Daunting</strong> (<span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span>)",
	"formidable": "<strong>Formidable</strong> (<span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span>)",

	// upgraded easy difficulty
	"easy-1": "<strong>Easy</strong> (<span class='icon challenge'></span>)",

	// upgraded average difficulty
	"average-1": "<strong>Average</strong> (<span class='icon challenge'></span><span class='icon difficulty'></span>)",
	"average-2": "<strong>Average</strong> (<span class='icon challenge'></span><span class='icon challenge'></span>)",

	// upgraded hard difficulties
	"hard-1": "<strong>Hard</strong> (<span class='icon challenge'></span><span class='icon difficulty'></span><span class='icon difficulty'></span>)",
	"hard-2": "<strong>Hard</strong> (<span class='icon challenge'></span><span class='icon challenge'></span><span class='icon difficulty'></span>)",
	"hard-3": "<strong>Hard</strong> (<span class='icon challenge'></span><span class='icon challenge'></span><span class='icon challenge'></span>)",

	// upgraded daunting difficulties
	"daunting-1": "<strong>Daunting</strong> (<span class='icon challenge'></span><span class='icon difficulty'></span><span class='icon difficulty'></span><span class='icon difficulty'></span>)",
};

