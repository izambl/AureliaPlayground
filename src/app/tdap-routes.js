export default [
    { route: '',                  moduleId: 'components/sections/tdap-dashboard/tdap-dashboard', title: 'Dashboard' },
    { route: 'contacts/:id',      moduleId: 'components/contact-detail',             name: 'contacts' },
    { route: 'my-goals',          moduleId: 'components/sections/tdap-my-goals/tdap-my-goals', name: 'my-goals' },
    { route: 'my-goals/:quarter', moduleId: 'components/contact-detail', name: 'contacts' },
    { route: 'manager-input',     moduleId: 'components/contact-detail', name: 'contacts' },
    { route: 'career-path/:id',   moduleId: 'components/contact-detail', name: 'contacts' }
];
