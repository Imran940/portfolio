export default {
  name: "contacts",
  title: "Contacts",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Name of a person",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
};
