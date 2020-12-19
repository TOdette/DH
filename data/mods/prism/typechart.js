'use strict'

exports.BattleTypeChart = {
		"Bug": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 1,
			"Flying": 1,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 1,
			"Sound": 2,
			"Steel": 0,
			"Tri": 1,
			"Water": 0,
		},
		HPivs: {"atk": 30, "def": 30, "spd": 30},
		HPdvs: {"atk": 13, "def": 13},
	},
	"Dark": {
		damageTaken: {
			prankster: 3,
			"Bug": 1,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 3,
			"Rock": 0,
			"Sound": 0,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
		HPivs: {},
	},
	"Dragon": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 1,
			"Electric": 2,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 0,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 0,
			"Tri": 2,
			"Water": 2,
		},
		HPivs: {"atk": 30},
		HPdvs: {"def": 14},
	},
	"Electric": {
		damageTaken: {
			par: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 2,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 2,
			"Tri": 0,
			"Water": 0,
		},
		HPivs: {"spa": 30},
		HPdvs: {"atk": 14},
	},
	"Fairy": {
		damageTaken: {
			"Bug": 2,
			"Dark": 2,
			"Dragon": 3,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Gas": 1,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 1,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 1,
			"Tri": 0,
			"Water": 0,
		},
	},
	"Fighting": {
		damageTaken: {
			"Bug": 2,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 1,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 1,
			"Rock": 2,
			"Sound": 2,
			"Steel": 0,
			"Tri": 2,
			"Water": 0,
		},
		HPivs: {"def": 30, "spa": 30, "spd": 30, "spe": 30},
		HPdvs: {"atk": 12, "def": 12},
	},
	"Fire": {
		damageTaken: {
			brn: 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Gas": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 1,
			"Sound": 0,
			"Steel": 2,
			"Tri": 2,
			"Water": 1,
		},
		HPivs: {"atk": 30, "spa": 30, "spe": 30},
		HPdvs: {"atk": 14, "def": 12},
	},
	"Flying": {
		damageTaken: {
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 3,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 1,
			"Sound": 0,
			"Steel": 0,
			"Tri": 1,
			"Water": 0,
		},
		HPivs: {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30},
		HPdvs: {"atk": 12, "def": 13},
	},
	"Gas": {
		damageTaken: {
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fighting": 2,
			"Fire": 1,
			"Fairy": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 1,
			"Steel": 0,
			"Tri": 1,
			"Water": 0,
		},
	},
	"Ghost": {
		damageTaken: {
			trapped: 3,
			"Bug": 2,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 3,
			"Fire": 0,
			"Flying": 0,
			"Gas": 2,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 3,
			"Poison": 2,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 1,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
		HPivs: {"def": 30, "spd": 30},
		HPdvs: {"atk": 13, "def": 14},
	},
	"Grass": {
		damageTaken: {
			powder: 3,
			"Bug": 1,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 1,
			"Flying": 1,
			"Gas": 2,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 1,
			"Normal": 0,
			"Poison": 1,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 0,
			"Tri": 1,
			"Water": 2,
		},
		HPivs: {"atk": 30, "spa": 30},
		HPdvs: {"atk": 14, "def": 14},
	},
	"Ground": {
		damageTaken: {
			sandstorm: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 3,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 1,
			"Normal": 0,
			"Poison": 2,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 2,
			"Sound": 0,
			"Steel": 0,
			"Tri": 3,
			"Water": 1,
		},
		HPivs: {"spa": 30, "spd": 30},
		HPdvs: {"atk": 12},
	},
	"Ice": {
		damageTaken: {
			hail: 3,
			frz: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 1,
			"Flying": 0,
			"Gas": 2,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 1,
			"Sound": 0,
			"Steel": 1,
			"Tri": 0,
			"Water": 0,
		},
		HPivs: {"atk": 30, "def": 30},
		HPdvs: {"def": 13},
	},
	"Normal": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 3,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 2,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
	},
	"Poison": {
		damageTaken: {
			psn: 3,
			tox: 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 2,
			"Prism": 0,
			"Psychic": 1,
			"Rock": 0,
			"Sound": 0,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
		HPivs: {"def": 30, "spa": 30, "spd": 30},
		HPdvs: {"atk": 12, "def": 14},
	},
	"Prism": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fairy": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
	},	
	"Psychic": {
		damageTaken: {
			"Bug": 1,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 2,
			"Rock": 0,
			"Sound": 1,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
		HPivs: {"atk": 30, "spe": 30},
		HPdvs: {"def": 12},
	},
	"Rock": {
		damageTaken: {
			sandstorm: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 2,
			"Flying": 2,
			"Gas": 2,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 1,
			"Ice": 0,
			"Normal": 2,
			"Poison": 2,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 1,
			"Tri": 0,
			"Water": 1,
		},
		HPivs: {"def": 30, "spd": 30, "spe": 30},
		HPdvs: {"atk": 13, "def": 12},
	},
	"Sound": {
		damageTaken: {
			"Bug": 1,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fighting": 1,
			"Fire": 0,
			"Fairy": 0,
			"Flying": 0,
			"Gas": 2,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 1,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 2,
			"Sound": 3,
			"Steel": 2,
			"Tri": 1,
			"Water": 2,
		},
	},
	"Steel": {
		damageTaken: {
			psn: 3,
			tox: 3,
			sandstorm: 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 2,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 1,
			"Fire": 1,
			"Flying": 2,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Normal": 2,
			"Poison": 3,
			"Prism": 0,
			"Psychic": 2,
			"Rock": 2,
			"Sound": 1,
			"Steel": 2,
			"Tri": 1,
			"Water": 0,
		},
		HPivs: {"spd": 30},
		HPdvs: {"atk": 13},
	},
	"Tri": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fairy": 0,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 0,
			"Tri": 0,
			"Water": 0,
		},
	},
	"Water": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Gas": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Prism": 0,
			"Psychic": 0,
			"Rock": 0,
			"Sound": 0,
			"Steel": 2,
			"Tri": 2,
			"Water": 2,
		},
		HPivs: {"atk": 30, "def": 30, "spa": 30},
		HPdvs: {"atk": 14, "def": 13},
	},
}