import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';

export const GlobalRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]