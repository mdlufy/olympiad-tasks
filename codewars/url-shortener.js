class UrlShortener {
    constructor() {
        this.hashMap = new Map();
    }

    shorten(longURL) {
        const host = "short.ly/";
        const longURLChars = longURL.match(/[a-z]/g).slice(-4);

        for (let i = 0; i < longURLChars.length; i++) {
            let code = longURLChars[i].codePointAt(0);
            if (code === 122) {
                code = 97;
            } else {
                code++;
            }

            longURLChars[i] = String.fromCodePoint(code);
        }

        const path = longURLChars.join("");

        const shortURL = `${host}${path}`;

        this.hashMap.set(shortURL, longURL);

        return shortURL;
    }

    redirect(shortURL) {
        return this.hashMap.get(shortURL);
    }
}



class UrlShortener {
  constructor() {
    this.URLBaseShort = {};
    this.URLBaseLong = {};
    this.prefix = 'short.ly/';
    this.minLengthOfHash = 1;
    this.maxLengthOfHash = 5; // in task 4, but in this case we're not including 5
    this.charCodeStart = 97; // 97 = a
    this.charCodeEnd = 123; // 122 = z
  }

  shorten(longURL) {
    let newHash = '';

    if (this.URLBaseLong[longURL]) {
      newHash = this.URLBaseLong[longURL];
    } else {
      newHash = this.#generateRandomUniqueHash();
      this.URLBaseLong[longURL] = newHash;
    }

    this.URLBaseShort[newHash] = longURL;
    const shortURL = `${this.prefix}${newHash}`;
    return shortURL;
  }

  redirect(shortURL) {
    const hash = shortURL.replace(this.prefix, '');
    return this.URLBaseShort[hash];
  }

  #generateRandomUniqueHash() {
    let newHashLength = this.#getRandomNumberInRange(this.minLengthOfHash, this.maxLengthOfHash);
    let newHash = this.#generateRandomHash(newHashLength);

    while (this.URLBaseShort[newHash]) {
      newHashLength = this.#getRandomNumberInRange(this.minLengthOfHash, this.maxLengthOfHash);
      newHash = this.#generateRandomHash(newHashLength);
    }

    return newHash;
  }

  #getRandomNumberInRange(start, end) {
    return start + Math.floor(Math.random() * (end - start));
  }

  #generateRandomHash(length) {
    let randomHash = '';

    for (let i = 0; i < length; i++) {
      randomHash += this.#getRandomLetter();
    }

    return randomHash;
  }

  #getRandomLetter() {
    const randomCharCode = this.#getRandomNumberInRange(this.charCodeStart, this.charCodeEnd);
    return String.fromCharCode(randomCharCode);
  }
}