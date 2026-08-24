export const navigation = [
  {
    label: "About",
    href: "/about",
  },

  {
    label: "Inclusive Education",
    href: "/education",

    children: [
      {
        label: "Overview",
        href: "/education",
      },
      {
        label: "Services",
        href: "/education/services",
      },
      {
        label: "Resources",
        href: "/education/resources",
      },
      {
        label: "Testimonials",
        href: "/education/testimonials",
      },
    ],
  },

  {
    label: "Photography",
    href: "/photography",

    children: [
      {
        label: "Overview",
        href: "/photography",
      },
      {
        label: "Projects",
        href: "/photography/projects",
      },
      {
        label: "Services",
        href: "/photography/services",
      },
      {
        label: "Testimonials",
        href: "/photography/testimonials",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];