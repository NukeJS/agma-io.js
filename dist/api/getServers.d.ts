import { Region } from '../types';
import { Server } from '../models';
declare const getServers: (region?: Region | undefined) => Promise<Server[]>;
export default getServers;
