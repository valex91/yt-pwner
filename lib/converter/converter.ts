import * as Ffmpg from 'fluent-ffmpeg';
import { Stream } from 'stream';

export class Converter {
  static conversion(stream: Stream, fileName: string): Promise<void> {
    let conversion = new Ffmpg({ source: stream });
    conversion.setFfmpegPath('/Applications/ffmpeg');

    return new Promise((res, rej) => {
      conversion.saveToFile(`./results/${fileName}.mp3`, (done, err) => {
        if (done) {
          res();
        } else {
          rej(err);
        }
      });
    });
  }
}
