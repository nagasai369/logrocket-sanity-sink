export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61dd6b66e18b2eec418912ef',
                  title: 'Sanity Studio',
                  name: 'logrocket-sanity-sink-studio',
                  apiId: '5c475dfe-d66c-4de1-970e-0a62347bce36'
                },
                {
                  buildHookId: '61dd6b66a599f7f04cade6d8',
                  title: 'Blog Website',
                  name: 'logrocket-sanity-sink',
                  apiId: '8e77aa5a-f18d-4705-944f-3c7a18b92aec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nagasai369/logrocket-sanity-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://logrocket-sanity-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
