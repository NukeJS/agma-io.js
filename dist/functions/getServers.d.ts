import { Server } from "../models";
declare const getServers: (region?: "EU" | "NA" | "AS" | undefined) => Promise<Server[]>;
export default getServers;
