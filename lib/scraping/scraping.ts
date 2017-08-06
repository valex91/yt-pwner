import { JSDOM  } from 'jsdom';
import { QueryParser } from '../parser/queryParser';

export class Scraping {
  static scrapeFromYT(q: string): Promise<JSDOM> {
    return JSDOM.fromURL(`https://www.youtube.com/results?search_query=${QueryParser.parseStringIntoQuery(q)}`)
  }
}
