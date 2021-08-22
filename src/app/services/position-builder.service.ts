import { Injectable } from '@angular/core';


// Notes for Historical Position Analyzer.  Move these later
  // The service builds an OptionPosition object that will be passed to the Historical Position Analyzer
  // for data download, calculation and analysis
  // Apply a config to a stock time series to generate a list of positions for testing / analysis with historical data
  // Take an OptionSpreadConfig object and create an OptionPosition object
  // User supplies 
  // underlying symbol
  // OptionSpreadConfig
  // frequency to trade
  // start and end dates
  // expiration
// export interface OptionPosition {
//   underlying: string;   // todo - put underlying data in an object
//   underlyingPrice: number,
//   underlyingIv: number,
//   dateOpened: Date;
//   config: OptionSpreadConfig;
//   symbols: string[];
//   data: PositionPricePoint[];

// }

@Injectable({
  providedIn: 'root'
})
export class PositionBuilderService {

  constructor() { }



  





}


