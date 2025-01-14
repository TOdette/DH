/*
+List of flags and their descriptions:
bypasssub: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
allyanim: Animates when used against allies
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.
*/

export const Moves: {[moveid: string]: MoveData} = {
	/*Gen 7 MetaMons*/
	auraspheregen7: {
		num: 396,
		accuracy: true,
		basePower: 90,
		category: "Special",
		shortDesc: "This move does not check accuracy.",
		name: "Aura Sphere-Gen 7",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Fighting",
		contestType: "Beautiful",
	},
	explosiongen7: {
		num: 153,
		accuracy: 100,
		basePower: 500,
		category: "Physical",
		shortDesc: "Target's Def halved during damage. User faints.",
		name: "Explosion-Gen 7",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
	},
	fellstingergen7: {
		num: 565,
		accuracy: 100,
		basePower: 500,
		category: "Physical",
		shortDesc: "Target's Def halved during damage. User faints.",
		name: "Fell Stinger-Gen 7",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	iciclecrash: {
		num: 556,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		shortDesc: "30% chance to flinch the target.",
		name: "Icicle Crash-Gen 7",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	moonlightgen7: {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Heals the user by a weather-dependent amount.",
		name: "Moonlight-Gen 7",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	playroughgen7: {
		num: 583,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "10% chance to lower the target's Attack by 1.",
		name: "Play Rough-Gen 7",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	rockslide: {
		num: 157,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Rock Slide",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Tough",
	},
	shadowclawgen7: {
		num: 421,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
      shortDesc: "20% chance to lower foe's Defense.",
		name: "Shadow Claw-Gen 7",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shelltrapgen7: {
		num: 704,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		name: "Shell Trap-Gen 7",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	sketchgen7: {
		num: 166,
		accuracy: true,
		basePower: 0,
		category: "Status",
      shortDesc: "Uses the last move used in the battle.",	
		name: "Sketch-Gen 7",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
      onHit(pokemon) {
			const noCopycat = [
				'assist', 'banefulbunker', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'dragontail', 'dynamaxcannon', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'obstruct', 'protect', 'ragepowder', 'roar', 'shelltrap', 'sketch', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.getMove(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax) {
				return false;
			}
			this.useMove(move.id, pokemon);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Clever",
	},
	windshackle: {
		num: 662,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		name: "Wind Shackle",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
      volatileStatus: 'partiallytrapped',
		target: "normal",
		type: "Flying",
		contestType: "Tough",
	},
	/*Gen 8 MetaMons*/
	acidrain: {
	basePower: 75,
	accuracy: 100,
	category: "Special", 
	shortDesc: "Deals super effective damage against Rock-types. has a 20% chance to Poison the target.",
	id: "acidrain",
	name: "Acid Rain",
	pp: 20,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	onEffectiveness(typeMod, target, type) {
			if (type === 'Rock') return 1;
	},
	secondary: {
			chance: 20,
			status: 'psn',
	},
	target: "normal",
	type: "Poison",
	},
	copycatblast: {
		num: 686,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		shortDesc: "Type varies based on the user's secondary type.",
		name: "Copycat Blast",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
		const types = pokemon.getTypes();
		let type = types[1] || types[0];
		if (type === "Bird") type = "Normal";
		move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	rudeparting: {
		num: 521,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		shortDesc: "User switches out after damaging the target.",
		name: "Rude Parting",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	mindreader: {
		num: 170,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mind Reader",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (['hail'].includes(pokemon.effectiveWeather())) move.boosts = {spa: 2, accuracy: 2};
		},
		boosts: {
			spa: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Ice",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
/*Gen 9 MetaMons*/
	filletaway: {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
      shortDesc: "+2 Attack, Sp. Atk, Speed for 1/2 user's max HP.",
		name: "Fillet Away",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({atk: 2, spa: 2, spe: 2,}, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	chillingwater: {
		num: 300,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Chilling Water",
		shortDesc: "100% chance to lower the target's Attack by 1.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	aquacutter: {
		num: 400,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		shortDesc: "High critical hit ratio.",
		name: "Aqua Cutter",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	icespinner: {
		num: -1025,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
		shortDesc: "Ends the effects of terrain.",
		name: "Ice Spinner",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, source, move) {
			this.field.clearTerrain();
		},
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	spectralfang: {
		num: 533,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Spectral Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
};
