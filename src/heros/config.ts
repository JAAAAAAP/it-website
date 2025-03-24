// import { headers } from 'next/headers'
// import { Media } from '@/components/Media'
import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Slider',
          value: 'slider',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { type } = {}) =>
          ['none', 'highImpact', 'mediumImpact', 'lowImpact'].includes(type),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'silderMedia',
      type: 'array',
      admin: {
        condition: (_, { type } = {}) => ['slider'].includes(type),
      },
      fields: [
        {
          name: 'mediaSilder',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'silderHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'silderSubheader',
          type: 'text',
          required: true,
        },
        {
          name: 'sliderReference',
          type: 'select',
          options: [
            { label: 'reference', value: 'reference' },
            { label: 'custom', value: 'custom' },
          ],
          required: true,
        },
        {
          name: 'referenceSilderLink',
          type: 'relationship',
          admin: {
            condition: (_, siblingData) => siblingData?.sliderReference === 'reference',
          },
          label: 'Document to link to',
          relationTo: ['pages', 'posts'],
          required: true,
        },
        {
          name: 'Customurl',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.sliderReference === 'custom',
          },
          label: 'Custom URL',
          required: true,
        },
      ],
    },
  ],
  label: false,
}
