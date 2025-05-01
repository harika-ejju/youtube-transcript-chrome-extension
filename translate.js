async function translateToEnglish(text) {
    const res = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: 'auto',
        target: 'en',
        format: 'text'
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    const data = await res.json();
    return data.translatedText;
  }
  