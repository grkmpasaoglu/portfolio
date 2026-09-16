export type ProjectDeviceType = "web" | "mobile";

export interface Project {
  slug: string;
  coverImage: string;
  images: string[];
  deviceType?: ProjectDeviceType;
}

export const projects: Project[] = [
  {
    slug: "turkcell",
    coverImage: "/projects/turkcell/turkcell-1.png",
    images: [
      "/projects/turkcell/turkcell-1.png",
      "/projects/turkcell/turkcell-2.png",
      "/projects/turkcell/turkcell-3.png",
      "/projects/turkcell/turkcell-4.png"
    ]
  },
  {
    slug: "botas",
    coverImage: "/projects/botas/botas-1.png",
    images: [
      "/projects/botas/botas-1.png"
    ]
  },
  {
    slug: "pusula",
    coverImage: "/projects/pusula/pusula-1.png",
    images: [
      "/projects/pusula/pusula-1.png",
      "/projects/pusula/pusula-2.png",
      "/projects/pusula/pusula-3.png",
      "/projects/pusula/pusula-4.png"
    ]
  },
  {
    slug: "mp",
    coverImage: "/projects/mp/mp-1.png",
    images: [
      "/projects/mp/mp-1.png",
      "/projects/mp/mp-2.png",
      "/projects/mp/mp-3.png",
      "/projects/mp/mp-4.png"
    ]
  },
  {
    slug: "mpm",
    coverImage: "/projects/mpm/mpm-1.png",
    deviceType: "mobile",
    images: [
      "/projects/mpm/mpm-1.png",
      "/projects/mpm/mpm-2.png",
      "/projects/mpm/mpm-3.png",
      "/projects/mpm/mpm-4.png",
      "/projects/mpm/mpm-5.png"
    ]
  },
  {
    slug: "ea",
    coverImage: "/projects/ea/ea-1.png",
    images: [
      "/projects/ea/ea-1.png",
      "/projects/ea/ea-2.png",
      "/projects/ea/ea-3.png",
      "/projects/ea/ea-4.png"
    ]
  },
  {
    slug: "luna",
    coverImage: "/projects/luna/luna-1.png",
    images: [
      "/projects/luna/luna-1.png",
      "/projects/luna/luna-2.png",
      "/projects/luna/luna-3.png",
      "/projects/luna/luna-4.png"
    ]
  },
  {
    slug: "businness-island",
    coverImage: "/projects/businness-island/businness-island-1.png",
    images: [
      "/projects/businness-island/businness-island-1.png",
      "/projects/businness-island/businness-island-2.png",
      "/projects/businness-island/businness-island-3.png"
    ]
  },
  {
    slug: "bh",
    coverImage: "/projects/bh/bh-1.png",
    images: [
      "/projects/bh/bh-1.png",
      "/projects/bh/bh-2.png",
      "/projects/bh/bh-3.png"
    ]
  },
  {
    slug: "seuda",
    coverImage: "/projects/seuda/seuda-1.png",
    images: [
      "/projects/seuda/seuda-1.png",
      "/projects/seuda/seuda-2.png",
      "/projects/seuda/seuda-3.png",
      "/projects/seuda/seuda-4.png"
    ]
  },
  {
    slug: "realhub",
    coverImage: "/projects/realhub/realhub-1.png",
    images: [
      "/projects/realhub/realhub-1.png",
      "/projects/realhub/realhub-2.png",
      "/projects/realhub/realhub-3.png",
      "/projects/realhub/realhub-4.png"
    ]
  },
  {
    slug: "popupsmart",
    coverImage: "/projects/popupsmart/popupsmart-1.png",
    images: [
      "/projects/popupsmart/popupsmart-1.png",
      "/projects/popupsmart/popupsmart-2.png",
      "/projects/popupsmart/popupsmart-3.png",
      "/projects/popupsmart/popupsmart-4.png"
    ]
  },
  {
    slug: "soa",
    coverImage: "/projects/soa/soa-1.png",
    images: [
      "/projects/soa/soa-1.png",
      "/projects/soa/soa-2.png",
      "/projects/soa/soa-3.png",
      "/projects/soa/soa-5.png"
    ]
  },
  {
    slug: "web3",
    coverImage: "/projects/web3/web3-1.png",
    images: [
      "/projects/web3/web3-1.png",
      "/projects/web3/web3-2.png",
      "/projects/web3/web3-3.png",
      "/projects/web3/web3-4.png"
    ]
  },
  {
    slug: "w3m",
    coverImage: "/projects/w3m/w3m-1.png",
    images: [
      "/projects/w3m/w3m-1.png",
      "/projects/w3m/w3m-2.png"
    ]
  },
  {
    slug: "htc",
    coverImage: "/projects/htc/htc-1.png",
    images: [
      "/projects/htc/htc-1.png",
      "/projects/htc/htc-2.png",
      "/projects/htc/htc-3.png",
      "/projects/htc/htc-4.png",
      "/projects/htc/htc-5.png"
    ]
  },
  {
    slug: "3d",
    coverImage: "/projects/3d/3d-1.png",
    images: [
      "/projects/3d/3d-1.png",
      "/projects/3d/3d-2.png",
      "/projects/3d/3d-3.png",
      "/projects/3d/3d-4.png"
    ]
  },
  {
    slug: "sh",
    coverImage: "/projects/sh/sh-1.png",
    images: [
      "/projects/sh/sh-1.png",
      "/projects/sh/sh-2.png",
      "/projects/sh/sh-3.png",
      "/projects/sh/sh-4.png"
    ]
  },
  {
    slug: "newsapp",
    coverImage: "/projects/newsapp/newsapp-1.png",
    deviceType: "mobile",
    images: [
      "/projects/newsapp/newsapp-1.png",
      "/projects/newsapp/newsapp-2.png",
      "/projects/newsapp/newsapp-3.png",
      "/projects/newsapp/newsapp-4.png"
    ]
  },
  {
    slug: "sy",
    coverImage: "/projects/sy/sy-1.png",
    images: [
      "/projects/sy/sy-1.png",
      "/projects/sy/sy-2.png",
      "/projects/sy/sy-3.png",
      "/projects/sy/sy-4.png"
    ]
  },
  {
    slug: "docusaurus",
    coverImage: "/projects/docusaurus/docusaurus-1.png",
    images: [
      "/projects/docusaurus/docusaurus-1.png",
      "/projects/docusaurus/docusaurus-2.png",
      "/projects/docusaurus/docusaurus-3.png",
      "/projects/docusaurus/docusaurus-4.png"
    ]
  },
  {
    slug: "old",
    coverImage: "/projects/old/old-1.png",
    images: [
      "/projects/old/old-1.png",
      "/projects/old/old-2.png",
      "/projects/old/old-3.png"
    ]
  }
];
