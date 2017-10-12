export default [
    { route: '',                  moduleId: 'components/sections/dashboard/dashboard', title: 'Dashboard' },
    { route: 'contacts/:id',      moduleId: 'components/contact-detail',             name: 'contacts' },
    { route: 'my-goals',          moduleId: 'components/sections/my-goals/my-goals', name: 'my-goals' },
    { route: 'my-goals/:quarter', moduleId: 'components/contact-detail', name: 'contacts' },
    { route: 'manager-input',     moduleId: 'components/contact-detail', name: 'contacts' },
    { route: 'career-path/:id',   moduleId: 'components/contact-detail', name: 'contacts' }
];
