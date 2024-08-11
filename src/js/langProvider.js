const availableLangs = ['de', 'en', 'es', 'fr', 'ja', 'pt']

export default function langProvider() {
  const systemLang = Intl.DateTimeFormat().resolvedOptions().locale;
  if (availableLangs.includes(systemLang)) {
    return systemLang;
  }

  return 'en';
}