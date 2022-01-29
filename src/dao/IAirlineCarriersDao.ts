import { AirlineCarriers } from "../entity/AirlineCarriers";

export interface IAirlineCarriersDao {
  save(post: AirlineCarriers): Promise<AirlineCarriers>;
}
