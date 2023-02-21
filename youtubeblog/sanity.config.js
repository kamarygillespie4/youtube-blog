import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

export default defineConfig({
  name: 'default',
  title: 'youtubeblog',

  projectId: 'royty8xz',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '274dc56c-5d18-4747-83eb-126913a6e6c0',
              buildHookId: '63f5191e41f72b065c6adb59',
              name: 'lucky-moxie-2fc34a',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
