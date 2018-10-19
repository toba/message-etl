import { People, Relation } from './types';
import config from './config/index';

export const people: People = {
   [Relation.Self]: config.self,
   [Relation.Other]: config.other
};
