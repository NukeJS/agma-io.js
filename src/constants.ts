import axios from "axios";

export const API = axios.create({
  baseURL: "https://agma.io",
});

export const availableRegions = ["EU", "NA", "AS"] as const;
