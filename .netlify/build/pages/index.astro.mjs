import { c as createComponent, a as renderTemplate, e as createAstro, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D64Q_3Xv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B7MzgBUx.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/bmric/PortfolioBri/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center my-12 max-w-3xl mx-auto px-4"> <h1 class="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
Welcome to my portfolio!
</h1> <p class="mt-4 text-xl text-gray-100 drop-shadow-sm">
I'm Bri — future cybersecurity specialist and digital defender. My dream is to become a valued member of the cybersecurity community, protecting digital worlds with creativity and strength.
</p> </section> ${renderComponent($$result2, "Skills", $$Skills, {})} <section class="my-12 max-w-4xl mx-auto px-4 bg-white p-6 rounded-md shadow-md"> <h2 class="text-3xl font-semibold mb-6 text-center text-black">Behind the Scenes</h2> <p class="text-black leading-relaxed">
This portfolio is built with Astro and React, styled with Tailwind CSS, and designed to showcase my journey into cybersecurity. It reflects my passion for technology and creativity.
</p> </section> ` })}`;
}, "C:/Users/bmric/PortfolioBri/src/pages/index.astro", void 0);

const $$file = "C:/Users/bmric/PortfolioBri/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
