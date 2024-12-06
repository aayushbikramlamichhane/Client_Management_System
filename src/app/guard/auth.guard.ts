import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localUser = localStorage.getItem('employee');
  const router = inject(Router);
  if(localUser != null){
    return true;
  }else{
    router.navigateByUrl('/login');
    return false
  }
};
