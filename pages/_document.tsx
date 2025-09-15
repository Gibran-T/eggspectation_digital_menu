// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* NADA de <meta name="viewport"> aqui (Next já injeta) */}
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){try{
  var s = localStorage.getItem('theme');
  var wantDark = s ? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  var el = document.documentElement.classList;
  wantDark ? el.add('dark') : el.remove('dark');
}catch(e){}})();
`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
