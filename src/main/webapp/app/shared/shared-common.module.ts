import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    StuffSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        StuffSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        StuffSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class StuffSharedCommonModule {}
