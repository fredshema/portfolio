import { getInstance } from "./auth0";

export const authGuard = async (to, from, next) => {
  const authService = await getInstance();
  const fn = () => {
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      return isLoggedIn(to, next);
    }
    isNotLoggedIn(to, next);
  };
  if (!authService.loading) {
    return fn();
  }
  authService.$watch("loading", (loading) => {
    if (loading === false) {
      return fn();
    }
  });
};

function isLoggedIn(to, next) {
  console.log("logged in");
  if (to.matched.some((record) => record.meta.guest)) {
    navigateToUserPage(to, next);
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    next();
  } else if (to.matched.some((record) => record.meta.notFound)) {
    next();
  }
}
function isNotLoggedIn(to, next) {
  const authService = getInstance();
  console.log(to, authService);
  if (to.matched.some((record) => record.meta.guest)) {
    next();
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  } else if (to.matched.some((record) => record.meta.notFound)) {
    next();
  }
}

function navigateToUserPage(to, next) {
  goToRoute("/admin", next);
}

// function setUserData(to, next) {
//   const token = sessionStorage.getItem("access");
//   store.dispatch("merchant/setMerchantData", decode(token));
//   if (!to.path.includes("merchant")) {
//     goToRoute("/merchant", next);
//   } else {
//     next();
//   }
// }

function goToRoute(route, next) {
  if (appRouter.currentRoute.path != route) {
    next(route);
  }
}

// export const authGuard = (to, from, next) => {
//   const authService = getInstance();

//   const fn = () => {
//     // If the user is authenticated, continue with the route
//     if (authService.isAuthenticated) {
//       return next();
//     }

//     // Otherwise, log in
//     console.log(to.fullPath);
//     authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
//   };

//   // If loading has already finished, check our auth state using `fn()`
//   if (!authService.loading) {
//     return fn();
//   }

//   // Watch for the loading property to change before we check isAuthenticated
//   authService.$watch("loading", (loading) => {
//     if (loading === false) {
//       return fn();
//     }
//   });
// };
