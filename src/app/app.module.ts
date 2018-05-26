import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app';
import { AsmEditorComponent } from './components/asm-editor/asm-editor';
import { ConsoleComponent } from './components/console/console';
import { CpuComponent } from './components/cpu/cpu';
import { RegisterComponent } from './components/cpu/register';
import { ExecutionComponent } from './components/execution/execution';
import { MemoryComponent } from './components/memory/memory';


@NgModule({
  declarations: [
    AppComponent,
    CpuComponent,
    RegisterComponent,
    MemoryComponent,
    ExecutionComponent,
    ConsoleComponent,
    AsmEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
