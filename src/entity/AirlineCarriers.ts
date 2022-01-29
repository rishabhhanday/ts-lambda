import {
  attribute,
  hashKey,
  table,
} from "@aws/dynamodb-data-mapper-annotations";

@table("AirlineCarriers")
export class AirlineCarriers {
  @hashKey()
  airlineCode: string;

  @attribute()
  airlineDisplayName: string;
}
