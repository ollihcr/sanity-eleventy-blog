export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '6295163cf18120148b83a4f6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3rywr243',
                  apiId: 'aa53fba3-fc77-4a1e-a21f-12a10c4069a5'
                },
                {
                  buildHookId: '6295163cc527070ab240261e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-to4bxo9f',
                  apiId: '8ae787c7-cca6-4eca-a58f-edde899f58e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ollihcr/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-to4bxo9f.netlify.app', category: 'apps'}
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
