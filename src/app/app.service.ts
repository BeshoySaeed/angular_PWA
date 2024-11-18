import { Injectable } from '@angular/core';
import { ProxyService } from './proxy.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private proxy: ProxyService) {}
}
