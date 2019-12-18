import {Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/members-list/member-detail/member-detail.component';

export const appRoutes : Routes = [
    { path : '' , component: HomeComponent  }, // we will not make it 'home' (not its empty string '') as there would be erorr for localhost:4200 only acess
    {
        path : '',// if you put here any thing..it will be pre pended to its child component : like 'localhost/4200/dummymembers'
        runGuardsAndResolvers : 'always',
        canActivate : [AuthGuard],
        children : [
            { path : 'members' , component: MembersListComponent  },
            { path : 'members/:id' , component: MemberDetailComponent  },/* this is to send the id parametr in request */
            { path : 'lists' , component: ListsComponent  },
            { path : 'messages' , component: MessagesComponent  }

        ]
    },
    
    { path : '**' , redirectTo: '', pathMatch:'full' }
];
 // ** is wild card routes , 
    //PathMatch : we can give 2 options in combination to Redirectto, 
    //And we're basically saying we want a match for forepaugh of the U R L in order to redirect.
    //The other option is Prefect's but in the case of a redirection we want to match the full path of the
    //U R L and in the case of a wildcard that's going to be literally anything as long as the domain is correct.
    //Then anything after that that doesn't match anything in here is going to be redirected back to home.
    //Now the angular router operates on a first match wins system.

// 04:25.250 --> 04:31.640
// So I'll just add the semicolon here and give it the new line that excellent seems to require.

// 04:32.180 --> 04:39.590
// But the concept behind this is that when the user enters a u r l or clicks on a link or is adding something

// 04:39.590 --> 04:45.610
// to the path in the U R L then our router is going to attempt to match with one of these routes and it's

// 04:45.620 --> 04:49.820
// going to keep going down this list attempting to look for something that matches the path in the U R

// 04:49.820 --> 04:57.080
// L and if nothing matches that path then its going to use this wildcard and it's going to redirect East

// 04:57.170 --> 04:58.290
// to home.


