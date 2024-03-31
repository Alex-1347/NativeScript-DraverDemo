import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { demos } from '../install.module';

@Component({
    selector: 'ns-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    demos = demos;
    demoRedirect: string = "/"
    constructor(private router: RouterExtensions) {}

    ngOnInit(): void {
        if (this.demoRedirect) {
            const Demo = demos.find(({ path }) => path === this.demoRedirect);
            if (Demo) {
                this.router.navigate([Demo.path]);
            }
        }
    }

    goToDemo(component: string): void {
        this.router.navigate([component], {
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'ease'
            }
        });
    }
}
