// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch: "main",
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src",
      publicFolder: ""
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: false
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date Posted",
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            options: [
              "christmas",
              "restaurants",
              "food",
              "family",
              "gran canaria",
              "south island - nz",
              "excursions",
              "lakes",
              "hotels",
              "friends",
              "cities",
              "travel",
              "preparations",
              "north america",
              "north island - nz",
              "weather",
              "reunion",
              "beach",
              "history",
              "adventure",
              "relaxation",
              "singapore",
              "issues"
            ]
          },
          {
            type: "object",
            name: "galleryImages",
            label: "Gallery Images",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Image Src"
              },
              {
                type: "string",
                name: "caption",
                label: "Image Caption"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "SpecialText",
                label: "Special Text",
                fields: [
                  {
                    name: "variant",
                    label: "variant",
                    type: "string",
                    options: [
                      "facts",
                      "chat",
                      "love",
                      "caption"
                    ]
                  },
                  {
                    name: "children",
                    label: "Text",
                    type: "string"
                  }
                ]
              },
              {
                name: "ImageText",
                label: "Image Text",
                fields: [
                  {
                    name: "src",
                    label: "Image src",
                    type: "image"
                  },
                  {
                    name: "alt",
                    label: "Image alt",
                    type: "string"
                  },
                  {
                    name: "caption",
                    label: "Image caption",
                    type: "string",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                name: "SideBySideImages",
                label: "Side by Side Images",
                fields: [
                  {
                    name: "src",
                    label: "Image src",
                    type: "image"
                  },
                  {
                    name: "alt",
                    label: "Image alt",
                    type: "string"
                  },
                  {
                    name: "src2",
                    label: "Image src2",
                    type: "image"
                  },
                  {
                    name: "alt2",
                    label: "Image alt2",
                    type: "string"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
