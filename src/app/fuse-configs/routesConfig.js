import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse';
import { AgendaConfig } from 'app/main/agenda/AgendaConfig';
import { ProductConfig } from 'app/main/products/ProductConfig';
import { StaffConfig } from 'app/main/staff/StaffConfig';
import { ServiceConfig } from 'app/main/services/ServiceConfig';
import { WelcomeConfig } from "app/main/welcome/WelcomeConfig"
import { ClientConfig } from "app/main/client/ClientConfig"
import { LoginConfig } from 'app/main/login/LoginConfig';
import { ClientInSaloonConfig } from 'app/main/clientInSaloon/clientInSaloonConfig';
import { Error404PageConfig } from 'app/main/errors/404/Error404PageConfig';
// import { SalonConfig } from 'app/main/salon-config/SalonConfig';
import { ImageConsultantConfig } from 'app/main/ImageConsultant/ImageConsultantConfig';
import appUtils from 'app/app.utils';

const routeConfigs = [
    StaffConfig,
    ServiceConfig,
    ProductConfig,
    AgendaConfig,
    WelcomeConfig,
    ClientConfig,
    LoginConfig,
    Error404PageConfig,
    // SalonConfig, //hidden for now
];
const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/Agenda" />
    },
    {
        component: () => <Redirect to="/error-404-not-found" />
    }
];

const mobileRouteConfigs = [
    ClientInSaloonConfig,
    LoginConfig,
    ImageConsultantConfig,
    Error404PageConfig,
];

const mobileRoutes = [
    ...FuseUtils.generateRoutesFromConfigs(mobileRouteConfigs, null),
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/clientInSaloon" />
    },
    {
        component: () => <Redirect to="/error-404-not-found" />
    }
];
function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
export default appUtils.detectmob() ? mobileRoutes : routes;
