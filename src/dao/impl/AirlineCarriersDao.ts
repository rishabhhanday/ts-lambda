import { IAirlineCarriersDao } from "../IAirlineCarriersDao";

import DynamoDB = require("aws-sdk/clients/dynamodb");
import { DataMapper } from "@aws/dynamodb-data-mapper";
import { AirlineCarriers } from "../../entity/AirlineCarriers";

const client = new DynamoDB({ region: "ap-south-1" });
const mapper = new DataMapper({ client });

export class AirlineCarriersDao implements IAirlineCarriersDao {
  save(airlineCarrier: AirlineCarriers): Promise<AirlineCarriers> {
    console.log(`Saving airline carrier into DynamoDB.`);
    return mapper.put(airlineCarrier);
  }
}
