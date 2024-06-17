import { Coordinates, Station } from "types";
import { db } from "../utils/db";

const findAll = async (): Promise<Station[]> => {
  const res = await db.station.findMany();

  const stationList: Station[] = res.map(r => {
    return {
      id: r.id,
      name: r.name,
      coordinates: r.coordinates?.valueOf() as Coordinates,
      imageUrl: r.imageUrl
    }
  });

  return stationList;
}

const StationRepo = { findAll }

export default StationRepo;