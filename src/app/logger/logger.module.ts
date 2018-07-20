import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from "./logger.service";

@NgModule()
export class LoggerModule {

  static init(config): ModuleWithProviders {
    console.log(config);
    return {
      ngModule: LoggerModule,
      providers: [{
        provide: LoggerService,
        useFactory: () => new LoggerService(
            config.flag
        )
      }]
    }
  }

}
