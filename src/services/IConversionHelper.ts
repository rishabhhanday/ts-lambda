export interface IConversionHelper<T> {
  convertFromEvent(event: any): T;
}
