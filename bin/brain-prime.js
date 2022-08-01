#!/usr/bin/env node

import { welcome } from '../src/brain-games.js';
import { startGame } from '../src/main.js';
import { rule, brainPrime } from '../src/brain-prime.js'

welcome();
startGame(rule, brainPrime);
