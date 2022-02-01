import { IAirlineCarriersDao } from "./dao/IAirlineCarriersDao";
import { AirlineCarriersDao } from "./dao/impl/AirlineCarriersDao";
import { AirlineCarriers } from "./entity/AirlineCarriers";
import { IConversionHelper } from "./services/IConversionHelper";
import { ConversionHelper } from "./services/impl/ConversionHelper";

const conversionHelper: IConversionHelper<AirlineCarriers> =
  new ConversionHelper();
const airlineCarriersDao: IAirlineCarriersDao = new AirlineCarriersDao();

exports.handler = async function (event: any) {
  console.log("*********** START *********")
  const airlineCarriers = conversionHelper.convertFromEvent(event);
  const savedAirlineCarrier: AirlineCarriers = await airlineCarriersDao.save(
    airlineCarriers
  );

  console.log("Successfully saved airline carrier details into dynamoDB.");
  return { savedAirlineCarrier };
};
