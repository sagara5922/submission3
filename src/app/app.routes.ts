import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Business } from './pages/business/business';
import { Contact } from './pages/contact/contact';
import { Aerospace } from './pages/business/aerospace/aerospace';
import { Banking } from './pages/business/banking/banking';
import { Healthcare } from './pages/business/healthcare/healthcare';
import { Insurance } from './pages/business/insurance/insurance';
import { Locomotive } from './pages/business/locomotive/locomotive';
import { Industrial } from './pages/business/industrial/industrial';

export const routes: Routes = [
    {path:'',component:Main},
    {path:'business',component:Business},{path:'contact',component:Contact},{path:'main',component:Main},
    {path:'business/aerospace',component:Aerospace},{path:'business/banking',component:Banking},
    {path:'business/healthcare',component:Healthcare},{path:'business/insurance',component:Insurance},{path:'business/locomotive',component:Locomotive},
    {path:'business/industrial',component:Industrial},
];
