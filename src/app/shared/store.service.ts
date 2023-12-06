import {Injectable} from '@angular/core';
import {Kindergarden} from './interfaces/Kindergarden';
import {ChildResponse} from './interfaces/Child';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public kindergardens: Kindergarden[] = [];
  public children: ChildResponse[] = []
  public childrenTotalCount: number = 0;
}
