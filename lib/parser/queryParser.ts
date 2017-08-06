export class QueryParser {
  static parseStringIntoQuery(string: string): string {
    return string.replace(/ /g,'+');
  }
}
