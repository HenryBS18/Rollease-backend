import { VehicleRepo } from "../repositories";
import { Vehicle } from "types";

const getAllAvailableByStationId = async (stationId: number): Promise<Vehicle[]> => {
  return await VehicleRepo.findAllAvailableByStationId(stationId);
}

const VehicleService = { getAllAvailableByStationId }

export default VehicleService;