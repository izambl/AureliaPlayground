export default [
    { route: '',                  moduleId: 'app/components/sections/tdap-dashboard/tdap-dashboard', name: 'dashboard', title: 'Dashboard' },
    { route: 'contacts/:id',      moduleId: 'app/components/contact-detail',             name: 'contacts' },
    { route: 'my-goals',          moduleId: 'app/components/sections/tdap-my-goals/tdap-my-goals', name: 'my-goals' },
    { route: 'my-goals/:quarter', moduleId: 'app/components/contact-detail', name: 'contacts' },
    { route: 'manager-input',     moduleId: 'app/components/sections/tdap-manager-input/tdap-manager-input', name: 'manager-input' },
    { route: 'career-path',     moduleId: 'app/components/sections/tdap-career-path/tdap-career-path', name: 'career-path' }
];
