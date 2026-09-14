// Syntax colour for the two code slides, in the deck's own palette
// rather than an imported editor theme. Four roles carry everything:
// the component name, the thing you configure, a literal, and a comment.
//
// The violet is the one the structure diagram gives the parts of a row,
// so a prop on a code slide and a box on the diagram are visibly the
// same subject.
//
// Tailwind classes, not a scoped <style>: these spans are built inside
// an expression and Astro's style scoping does not reach those, so a
// scoped rule matches nothing and the code renders in one flat colour.

export const CLASS = {
	tag: 'text-accent',
	attr: 'text-[rgb(139_124_246)]',
	str: 'text-[rgb(245_158_11)]',
	expr: 'text-default',
	comment: 'text-weak italic',
	punc: 'text-weak',
	ws: '',
} as const;

export type Token = { t: string; k: keyof typeof CLASS };

// Primitive type names read as literals rather than as identifiers.
const PRIMITIVES = new Set(['string', 'boolean', 'number', 'null', 'undefined']);
const KEYWORDS = new Set(['type', 'const', 'let', 'return']);

// Two dialects, because the slides show two. JSX wants the props
// highlighted; a type block wants the keywords and the type names. One
// tokeniser trying to do both ends up colouring neither convincingly.
export function tokenise(src: string, mode: 'jsx' | 'ts' = 'jsx'): Token[] {
	const out: Token[] = [];
	const re =
		/(\/\/[^\n]*)|("[^"]*"|'[^']*')|(<\/?[A-Z][A-Za-z0-9]*)|(\/>|>)|(\{[^}\n]*\})|([A-Za-z_][A-Za-z0-9_]*)|(\s+)|([^\s])/g;

	let m: RegExpExecArray | null;
	while ((m = re.exec(src))) {
		if (m[1]) out.push({ t: m[1], k: 'comment' });
		else if (m[2]) out.push({ t: m[2], k: 'str' });
		else if (m[3]) out.push({ t: m[3], k: 'tag' });
		else if (m[4]) out.push({ t: m[4], k: 'punc' });
		else if (m[5]) out.push({ t: m[5], k: 'expr' });
		else if (m[6]) {
			const w = m[6];
			if (mode === 'jsx') {
				out.push({ t: w, k: 'attr' });
			} else if (KEYWORDS.has(w)) {
				out.push({ t: w, k: 'attr' });
			} else if (PRIMITIVES.has(w) || /^[A-Z]/.test(w)) {
				out.push({ t: w, k: 'tag' });
			} else {
				out.push({ t: w, k: 'expr' });
			}
		} else if (m[7]) out.push({ t: m[7], k: 'ws' });
		else out.push({ t: m[8], k: 'punc' });
	}
	return out;
}
