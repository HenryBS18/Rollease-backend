import { StationRepo } from "../repositories";
import { Station } from "types";

const getAll = async (): Promise<Station[]> => {
  return await StationRepo.findAll();
}

const StationService = { getAll }

export default StationService;