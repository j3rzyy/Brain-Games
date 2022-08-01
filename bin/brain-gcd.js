#!/usr/bin/env node

import { welcome } from '../src/brain-games.js';
import { startGame } from '../src/main.js';
import { rule, brainGCD } from '../src/brain-gcd.js'

welcome();
startGame(rule, brainGCD);
