/** slow */
// export { deflateRaw, inflateRaw } from "./deflate/mod.ts";
/** fast */
export {
  deflate,
  deflateRaw,
  gunzip,
  gzip,
  inflate,
  inflateRaw,
} from "./zlib/mod.ts";
