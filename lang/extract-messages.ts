import { readdir, writeFile } from "node:fs/promises";
import { extract, compile } from "@formatjs/cli-lib";
import { resolve } from "path";
import process from "process";
import url from "url";
import type { MessageDescriptor } from "@formatjs/cli-lib";
import { supportedLocales } from "./supportedLocales.ts";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const localesFolder = resolve(dirname, "locales");
const messagesPath = resolve(dirname, "messages.json");

async function main() {
  try {
    await extractMessages();
    await compileLocales();
  } catch (err: unknown) {
    console.error(err); // eslint-disable-line no-console
  }
}

async function extractMessages() {
  const patternsToExclude = ["/src/api/generated/", "/src/stories/", ".d.ts"];

  const files = (
    await readdir(resolve(process.cwd(), "src/"), {
      recursive: true,
      withFileTypes: true,
    })
  )
    .filter(
      entry =>
        (entry.isFile() && entry.name.endsWith("ts")) ||
        entry.name.endsWith("tsx"),
    )
    .map(entry => resolve(entry.path, entry.name))
    .filter(filePath => !patternsToExclude.some(dir => filePath.includes(dir)));

  const resultAsString = await extract(files, {
    idInterpolationPattern: "[sha512:contenthash:base64:16]",
    flatten: true,
    extractSourceLocation: true,
  });

  // we want to omit the attributes start and end as they only describe the
  // tokens in the token stream which is most likely irrelevant to the translator
  const result = Object.fromEntries(
    Object.entries(
      JSON.parse(resultAsString) as Record<string, MessageDescriptor>,
    ).map<[string, MessageDescriptor]>(
      ([k, { start: _ignoreStart, end: _ignoreEnd, ...rest }]) => [k, rest],
    ),
  );

  await writeFile(messagesPath, JSON.stringify(result, undefined, 4), {
    encoding: "utf8",
  });
}

async function compileLocales() {
  const localeAsString = await compile([messagesPath]);

  for (const locale of supportedLocales) {
    await writeFile(resolve(localesFolder, `${locale}.json`), localeAsString, {
      encoding: "utf8",
    });
  }
}

void main();
