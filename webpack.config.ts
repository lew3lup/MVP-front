import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/webpack/types/config";

export default function (env: BuildEnv) {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";
  const apiURL = env.apiURL || "https://test-api.lew3lup.com";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev,
    apiURL,
  });

  return config;
}
