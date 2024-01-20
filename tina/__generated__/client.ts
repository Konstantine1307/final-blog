import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/581b3d4f-1b12-495a-9f7e-bceceb5351b2/github/main', token: '720b5ad4a7ef55543f33f5289ab772d22eeb5005', queries,  });
export default client;
  