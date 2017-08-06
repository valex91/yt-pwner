import { Stream } from 'stream';
import * as ytdl from 'ytdl-core';

export class Downloader {
  static downloadFromURL(url: string): Stream {
   return ytdl(url);
  }
}
