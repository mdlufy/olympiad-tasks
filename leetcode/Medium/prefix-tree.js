var Trie = function () {
    this.hashMap = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currTree = this.hashMap;

    for (const char of word) {
        if (!currTree[char]) {
            currTree[char] = {};
        }

        currTree = currTree[char];
    }

    currTree.value = word;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let currTree = this.hashMap;

    for (const char of word) {
        if (!currTree[char]) return false;

        currTree = currTree[char];
    }

    if (currTree.hasOwnProperty('value')) return true;

    return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let currTree = this.hashMap;

    for (const char of prefix) {
        if (!currTree[char]) return false;

        currTree = currTree[char];
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var partam_3 = obj.startsWith(prefix)
 */

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert('apple');
trie.search('apple'); // return True
trie.search('app'); // return False
trie.startsWith('app'); // return True
trie.insert('app');
trie.search('app'); // return True
