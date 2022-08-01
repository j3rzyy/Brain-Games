#!/usr/bin/env node

import { welcome } from '../src/brain-games.js';
import { startGame } from '../src/main.js';
import { rule, brainCalc } from '../src/brain-calc.js'

welcome();
startGame(rule, brainCalc);
