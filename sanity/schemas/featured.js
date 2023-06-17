import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Restaurant Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short_description of Dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Dish',
    },
  ],
})
