import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '720b5ad4a7ef55543f33f5289ab772d22eeb5005', queries,  });
export default client;
  