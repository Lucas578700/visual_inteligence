import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { MLKitView } from '@nativescript/mlkit-core'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
