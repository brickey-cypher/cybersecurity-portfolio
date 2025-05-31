import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D64Q_3Xv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B7MzgBUx.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

function MyModal({ title, description, details, ...rest }) {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-xl transition duration-300", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mb-4", children: description }),
    /* @__PURE__ */ jsx("button", { className: "text-blue-500 hover:underline", onClick: toggleModal, children: "View Details" }),
    showModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "absolute top-2 right-2 text-gray-500 hover:text-red-500",
          onClick: toggleModal,
          children: "✖"
        }
      ),
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold mb-2", children: title }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-sm whitespace-pre-wrap text-gray-800",
          dangerouslySetInnerHTML: { __html: details }
        }
      )
    ] }) })
  ] });
}

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Security Incident & Assessment Report",
      description: "Investigated a web-based malware incident involving suspicious HTTP traffic.",
      details: 'Utilized tcpdump to analyze redirection patterns and identify a malicious file masquerading as a browser update. Discovered that the attacker gained access through a brute-force attack, resulting in user infections and admin account lockout. <a href="/assets/pdfs/Security%20incident%20and%20assessment%20report.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Risk Register",
      description: "Performed a comprehensive risk assessment for a coastal bank with mixed on-premise and remote workforce.",
      details: 'Evaluated critical assets including funds, user databases, and financial records. Assessed risks by likelihood and severity, then prioritized mitigation strategies using a risk matrix to strengthen security and ensure compliance with financial regulations. <a href="/assets/pdfs/Risk%20register.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Scope, Goals, & Risk Assessment Report",
      description: "Conducted an extensive security audit of Botium Toys' operations and infrastructure.",
      details: 'Reviewed assets, internal systems, and compliance protocols. Assessed existing security controls and completed a compliance checklist to identify vulnerabilities and recommend enhancements that improve overall security posture. <a href="/assets/pdfs/Mock%20scope,%20goals,%20and%20risk%20assessment.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Incident Report Network Traffic Analysis",
      description: "Analyzed a network disruption caused by a SYN flood denial-of-service attack.",
      details: 'Identified overwhelming TCP SYN requests that prevented legitimate server connections. Explained the TCP three-way handshake and how the attack exploits this mechanism to disrupt service availability. <a href="/assets/pdfs/Incident%20report%20network%20traffic%20analysis.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Incident Report Analysis",
      description: "Responded to a simulated DDoS attack involving an ICMP flood.",
      details: 'Documented mitigation procedures aligned with the NIST Cybersecurity Framework, including threat identification, protection of critical services, anomaly detection, and recovery actions. <a href="/assets/pdfs/Incident%20report%20analysis.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Home Asset Inventory",
      description: "Developed a detailed inventory of home network devices, evaluating ownership and sensitivity.",
      details: 'Applied access control principles to categorize assets based on sensitivity and access requirements, enhancing the security posture of the home network environment. <a href="/assets/pdfs/Home%20asset%20inventory.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "File Permissions in Linux",
      description: "Audited and adjusted Linux file and directory permissions to meet team access needs.",
      details: 'Ensured secure system configurations by verifying permission settings and applying appropriate access controls to maintain data confidentiality and integrity. <a href="/assets/pdfs/File%20permissions%20in%20Linux.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Data Leak Worksheet",
      description: "Investigated a data leak caused by excessive access privileges.",
      details: 'Applied NIST SP 800-53 AC-6 guidelines to assess failures and recommended role-based restrictions and audit mechanisms to enforce the principle of least privilege. <a href="/assets/pdfs/Data%20leak%20worksheet.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Apply Filters to SQL Queries",
      description: "Secured a system by analyzing and refining SQL queries with filters.",
      details: 'Identified potential security vulnerabilities and implemented query filters to prevent unauthorized data access while ensuring system integrity and performance. <a href="/assets/pdfs/Apply%20filters%20to%20SQL%20queries.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    },
    {
      title: "Algorithm for File Updates in Python",
      description: "Automated IP allow-list management to control access to restricted content.",
      details: 'Developed a Python script that updates the allow list by removing IPs found in a separate deny list, reducing human error and enhancing network security. <a href="/assets/pdfs/Algorithm%20for%20file%20updates%20in%20Python.pdf" target="_blank" class="text-blue-600 underline">View PDF</a>'
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-5xl mx-auto px-4 py-12"> <h1 class="text-4xl font-extrabold mb-8 text-center">My Projects</h1> <div class="grid md:grid-cols-2 gap-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "MyModal", MyModal, { "client:load": true, "key": project.title, "title": project.title, "description": project.description, "details": project.details, "client:component-hydration": "load", "client:component-path": "C:/Users/bmric/PortfolioBri/src/components/MyModal.jsx", "client:component-export": "default" })}`)} </div> </section> ` })}`;
}, "C:/Users/bmric/PortfolioBri/src/pages/projects.astro", void 0);

const $$file = "C:/Users/bmric/PortfolioBri/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
