export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      options: {
        maxLength: 150,
      },
    },
    {
      name: "video_id",
      title: "Video ID",
      type: "string",
    },
    {
      name: "website_url",
      title: "Website Url",
      type: "string",
    },
    {
      name: "github_url",
      title: "Github Url",
      type: "string",
    },
    {
      name: "techs_used",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },
    {
      name: "created_at",
      title: "Created Date",
      type: "datetime",
    },
  ],
};
