// `app/page.js` is the UI for the root `/` URL

export const metadata = {
  
  // title
  title: {
    default: 'monymngr - simple and customizable finance tracker to track your spends',
    template: '%s'
  },
  description: 'finance tracker for managing your monthly expenditures and income.',

  // metadata
  charSet: 'utf-8',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  keywords: [
    'finance manager',
    "monymngr",
    'wallet app',
    "expenditure tracker",
    'finance'
  ],

  // verification
  verification: {
    google: 'gbQDdQ1IawODcdAJcR9WfQjXTHBo5MsB5S3denFl1A4'
  }
}


export default function Page() {
    return <h1 id="title">monymngr</h1>;
  }
  