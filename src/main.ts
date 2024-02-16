import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
/*
init server:
ng serve -0

new component:
ng g c templeta/call-to-action

new module:
ng g module authentication

routing:
ng g module authentication --routing
*/
