import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dogs = [
      { id: 1, name: '柴犬', imgurl: 'https://news.cts.com.tw/photo/cts/201801/201801141909165_l.jpg' },
      { id: 2, name: '邊境牧羊犬', imgurl: 'https://pic.hotime.asia/p0/images01/20210415/fa9e8e1ad6cd4a458996a7eda81915f9.jpeg' },
      { id: 3, name: '柯基', imgurl: 'https://img.ltn.com.tw/Upload/playing/page/2019/08/23/190823-20910-01-geReG.jpg'},
      { id: 4, name: '薩摩耶', imgurl: 'https://img.ltn.com.tw/Upload/playing/page/2020/06/19/200619-23621-10-m3xwP.jpg' },
      { id: 5, name: '博美', imgurl: 'http://www.lpetl.com/attachment/202008/14/1_1597412302444Y.jpeg' },
      { id: 7, name: '大麥町', imgurl: 'https://www.petpetbase.com/upload/article/original/375f1b1001554a01b66328b085d74046.jpg' },
      { id: 8, name: '黃金獵犬', imgurl: 'https://www.justdog.tw/wp-content/uploads/2021/03/7084ro80378s4n15o81orn5452o39690.jpg' },
      { id: 9, name: '比熊犬', imgurl: 'http://img.ipet.tw/uploads/2/D0/2D0B38356C.jpeg' },
      { id: 10, name: '傑克羅素㹴犬', imgurl: 'https://p2.pstatp.com/origin/pgc-image/05862b6de6d542588d3b4110ceaa91f5.jpeg' },
      { id: 11, name: '哈士奇', imgurl: 'http://petonea.com/file//n273/t.jpg' }
    ];
    return {dogs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
