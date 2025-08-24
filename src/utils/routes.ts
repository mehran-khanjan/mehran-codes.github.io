// export const routes = {
//     'home': {title: 'Home', url: '/'},
//     'about': {title: 'About', url: '/about'},
//     'profile': {title: 'Profile', url: '/profile'},
//     'lms': {
//         title: 'LMS',
//         url: '/lms',
//         children: {
//             'articles': {
//                 title: 'Articles',
//                 url: '/articles',
//                 children: {
//                     'blockchain': {
//                         title: 'Blockchain',
//                         url: '/blockchain',
//                         children: {
//                             'solana': {
//                                 title: 'Solana',
//                                 url: '/solana',
//                                 children: {
//                                     'introduction': {
//                                         title: 'Introduction to Solana Smart Contract Development',
//                                         url: '/introduction',
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// export const getRouteUrl = (routeKeys: string[]): string | undefined => {
//     let currentRoute = routes;
//
//     for (const key of routeKeys) {
//         if (currentRoute.children && currentRoute.children[key]) {
//             currentRoute = currentRoute.children[key];
//         } else {
//             return undefined; // Return undefined if the route does not exist
//         }
//     }
//
//     return currentRoute.url; // Return the URL of the final route
// };
// // Example usage
// const introductionUrl = getRouteUrl(['lms', 'articles', 'blockchain', 'solana', 'introduction']);
// console.log(introductionUrl); // Output: /lms/articles/blockchain/solana/introduction

export interface Route {
    title: string;
    url: string;
}

export interface Routes {
    [key: string]: Route;
}

export const routes: Routes = {
    'home': {title: 'Home', url: '/'},
    'about': {title: 'About', url: '/about'},
    'profile': {title: 'Profile', url: '/profile'},
    'lms': {title: 'LMS', url: '/lms',},
}
routes['leitner'] = {
    title: 'Leitner',
    url: `${routes.lms.url}/leitner`
};
routes['questions'] = {
    title: 'Questions',
    url: `${routes.lms.url}/questions`
}
routes['articles'] = {
    title: 'Articles',
    url: `${routes.lms.url}/articles`
}

// JavaScript
routes['javascript'] = {
    title: 'JavaScript',
    url: `${routes.articles.url}/javascript`
}

routes['JSSerialization'] = {
    title: 'Serialization and Deserialization in JS',
    url: `${routes.javascript.url}/serialization`,
}

// Blockchain
routes['blockchain'] = {
    title: 'Blockchain',
    url: `${routes.articles.url}/blockchain`
}

// Solana: BS (Blockchain Solana)
routes['solana'] = {
    title: 'Solana',
    url: `${routes.blockchain.url}/solana`
}
routes['BSintroduction'] = {
    // title: 'Introduction to Solana Smart Contract Development',
    title: 'Introduction to Solana',
    url: `${routes.solana.url}/introduction`,
}
routes['BSBasic'] = {
    title: 'Solana Basic',
    url: `${routes.solana.url}/basic`,
}
routes['BSProgrammingModel'] = {
    title: 'Solana Programming Model',
    url: `${routes.solana.url}/programming-model`,
}
routes['BSHelloWorld'] = {
    title: 'Solana Hello World',
    url: `${routes.solana.url}/hello-world`,
}
routes['BSPDA'] = {
    title: 'Solana PDA',
    url: `${routes.solana.url}/pda`,
}
routes['BSHelloWorldFrontEnd'] = {
    title: 'Front-End for Solana Hello World',
    url: `${routes.solana.url}/hello-world-front-end`,
}

// EVM: BE (Blockchain EVM)
routes['evm'] = {
    title: 'EVM',
    url: `${routes.blockchain.url}/evm`
}
routes['BEintroduction'] = {
    title: 'Introduction to EVM',
    url: `${routes.evm.url}/introduction`,
}

// Rust
routes['rust'] = {
    title: 'Rust',
    url: `${routes.articles.url}/rust`
}

routes['Ruintroduction'] = {
    title: 'Introduction to Rust',
    url: `${routes.rust.url}/introduction`,
}

// React
routes['react'] = {
    title: 'React',
    url: `${routes.articles.url}/react`
}

routes['Reintroduction'] = {
    title: 'Introduction to React',
    url: `${routes.react.url}/introduction`,
}

routes['Recomponents'] = {
    title: 'React Components',
    url: `${routes.react.url}/components`,
}

routes['Rehooks'] = {
    title: 'React Hooks',
    url: `${routes.react.url}/hooks`,
}