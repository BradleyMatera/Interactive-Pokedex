declare module "bun" {
  type TemplateLiteralValue = string | number | boolean | null | undefined;

  interface BunSubprocess {
    text(): Promise<string>;
  }

  export const $: (strings: TemplateStringsArray, ...values: TemplateLiteralValue[]) => BunSubprocess;
}
