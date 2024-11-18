import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ProxyService } from './proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_pwa';
  list: any = [];

  constructor(private sw: SwUpdate, private proxy: ProxyService) {}

  ngOnInit() {
    this.getList();
    if (this.sw.isEnabled) {
      this.sw.versionUpdates.subscribe((available) => {
        // if (confirm('Update Available')) window.location.reload();
      });
    }
  }

  getList() {
    this.proxy.getList().subscribe((res) => {
      console.log(res);
      this.list = res;
    });
  }
}
