#!/usr/bin/env node

import { welcome } from '../src/brain-games.js';
import { startGame } from '../src/main.js';
import { rule, brainEven } from '../src/brain-even.js'

welcome();
startGame(rule, brainEven);
