import { Coordinates, Vehicle, VehicleType } from "../types";
import { db } from "../utils/db";

const findAllAvailableByStationId = async (stationId: number): Promise<Vehicle[]> => {
  const res = await db.vehicle.findMany({
    where: {
      currentStationId: stationId
    }
  });

  const vehicleList: Vehicle[] = res.map(vehicle => {
    return {
      id: vehicle.id,
      name: vehicle.name,
      type: vehicle.type == 'Scooter' ? VehicleType.scooter : VehicleType.bike,
      imageUrl: vehicle.imageUrl,
      battery: vehicle.battery,
      inUse: vehicle.inUse,
      currentCoordinates: vehicle.currentCoordinates?.valueOf() as Coordinates,
      currentStationId: vehicle.currentStationId,
      argoPrice: vehicle.argoPrice
    }
  })

  return vehicleList;
}

const VehicleRepo = { findAllAvailableByStationId }

export default VehicleRepo;