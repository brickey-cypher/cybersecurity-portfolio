import { c as createComponent, e as createAstro, b as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_D64Q_3Xv.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "My Cybersecurity Portfolio" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${Astro2.props.title ?? "My Portfolio"}</title><!-- Add this line to load your Tailwind CSS --><link rel="stylesheet" href="/src/styles/global.css"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet" href="/dist/style.css">${renderHead()}</head> <body class="bg-gradient-to-b from-black via-gray-800 to-gray-200 text-white min-h-screen"> <header class="p-4 border-b border-gray-700"> <h1 class="text-4xl font-bold text-gray-50">Cybersecurity Portfolio by Brianna</h1> <nav class="mt-2"> <a href="/" class="mr-4 hover:underline">Home</a> <a href="/about" class="mr-4 hover:underline">About</a> <a href="/projects" class="hover:underline">Projects</a> </nav> </header> <main class="max-w-4xl mx-auto p-6"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="text-center p-4 text-500 text-black border-t border-gray-700">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Brianna Marie Rickey. All rights reserved.
</footer> </body></html>`;
}, "C:/Users/bmric/PortfolioBri/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
