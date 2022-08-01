#!/usr/bin/env node

import { welcome } from '../src/brain-games.js';
import { startGame } from '../src/main.js';
import { rule, brainProgress } from '../src/brain-progression.js';

welcome();
startGame(rule, brainProgress);
