export class TextAnalysisUtility {
    static getWordCount(text: string): number {
        return text.toLowerCase().match(/\b[a-z]+\b/g)?.length || 0;
    }

    static getCharCount(text: string): number {
        return text.replace(/\s+/g, '').length;
    }

    static getSentenceCount(text: string): number {
        return text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
    }

    static getParagraphCount(text: string): number {
        return text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    }

    static getLongestWords(text: string): string[] {
        const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
        const maxLength = Math.max(...words.map(word => word.length), 0);
        return words.filter(word => word.length === maxLength);
    }
}
