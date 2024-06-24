import { StationDto, Vehicle } from "../types";
import { StationRepo } from "../repositories";
import VehicleService from "./vehicle";

const getAll = async (): Promise<StationDto[]> => {
  const stationList = await StationRepo.findAll();

  const stationDto: StationDto[] = []

  for (const station of stationList) {
    const vehicleList: Vehicle[] = await VehicleService.getAllAvailableByStationId(station.id);

    stationDto.push({
      ...station,
      vehicleList: vehicleList
    });
  }

  return stationDto;
}

const StationService = { getAll }

export default StationService;