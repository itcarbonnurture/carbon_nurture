export default defineNuxtConfig({
  compatibilityDate: "2025-02-13",

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/css/main.css"
  ],

  app: {
    head: {
      title: "Carbon Nurture",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content: "Carbon Nurture company develops sustainable, biodegradable mulch films and eco-friendly solutions for agriculture. Our innovative technology reduces carbon footprint and promotes soil health for a greener future."
        },
        {
          name: "keywords",
          content: "mulch film, biodegradable film, biodegradable mulch film, biodegradable mulch, agriculture, water management, biodegradation, eco-friendly mulch film, compostable mulch film, sustainable mulch film, environmentally friendly mulch, degradable plastic mulch, agricultural mulch film, horticultural mulch film, plastic alternative mulch, greenhouse mulch film, row crop mulch, soil health mulch film, weed control mulch film, moisture retention mulch"
        }
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
          defer: true
        },
        {
          children: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3619628418181017');
            fbq('track', 'PageView');
          `,
          type: "text/javascript"
        }
      ],
      noscript: [
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3619628418181017&ev=PageView&noscript=1" />`
        }
      ]
    }
  }
});
