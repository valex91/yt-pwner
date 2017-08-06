import { Scraping } from './lib/scraping/scraping';
import { Converter } from './lib/converter/converter';
import { Downloader } from './lib/downloader/downloader';

const inputs: string[] = ['alan walker alone', 'alan walker fading'];

inputs.forEach((q: string) => {
  Scraping.scrapeFromYT(q)
    .then((d) => {
    let url = d.window.document.querySelector('.yt-uix-tile-link').href;
    let stream = Downloader.downloadFromURL(url);

    Converter.conversion(stream, q);
  })
});







