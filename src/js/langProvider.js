const availableLangs = ['de', 'en', 'es', 'fr', 'ja', 'pt']

export default async function langProvider(systemLang = 'en') {
  let selectedLang = systemLang;

  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has('lang')) {
    const urlLang = searchParams.get('lang');
    if (availableLangs.includes(urlLang)) {
      selectedLang = urlLang;
    }
  }

  const data = await import(`../json/${selectedLang}.json`)
  return data;
}