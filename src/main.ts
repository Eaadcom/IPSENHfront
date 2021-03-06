import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {defineCustomElements} from 'snippet-highlight/dist/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}
