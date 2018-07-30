import { Observable } from "../../../../node_modules/rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";

export class CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate,
        route: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}