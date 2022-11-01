export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title  of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      description: "Progress of skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),
      type: "number",
    },
    {
      name: "icon",
      title: "Icon Name",
      type: "string",
    },
  ],
};
