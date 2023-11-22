import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Learn English Together | La mejor forma de aprender inglés online</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./Icon.png" />
        <script id="setmore_script" type="text/javascript" src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"></script><a style="float:none; position: fixed; right: -2px; top: 25%; display: block; z-index: 20000" id="Setmore_button_iframe" href="https://booking.setmore.com/scheduleappointment/53db59a2-b99d-421f-ac8a-48b901d50432"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png" alt="Book an appointment with LET Team using Setmore" /></a>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
  (function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "hsz1lng4l6");
  `,
          }}
        />
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '278354874748985');
          fbq('track', 'PageView');
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=278354874748985&ev=PageView&noscript=1"
        /></noscript>
          `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

