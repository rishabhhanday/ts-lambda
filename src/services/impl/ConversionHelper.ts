import { AirlineCarriers } from "../../entity/AirlineCarriers";
import { IConversionHelper } from "../IConversionHelper";

export class ConversionHelper implements IConversionHelper<AirlineCarriers> {
  convertFromEvent(event: any): AirlineCarriers {
    const airlineCarriers = new AirlineCarriers();

    airlineCarriers.airlineCode = event["code"];
    airlineCarriers.airlineDisplayName = event["name"];

    return airlineCarriers;
  }
}
